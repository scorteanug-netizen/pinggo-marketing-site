export type HubspotFormType = "contact" | "calculator";

type HubspotFieldValue = string | number | boolean | null | undefined;

interface HubspotField {
  name: string;
  value: HubspotFieldValue;
}

interface SubmitHubspotFormParams {
  formType: HubspotFormType;
  fields: HubspotField[];
  pageName?: string;
  pageUri?: string;
}

interface NameParts {
  firstName: string;
  lastName: string;
}

interface ContactSubmissionInput {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  role?: string;
  message?: string;
}

interface CalculatorSubmissionInput {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  leads: number;
  convRate: number;
  avgValue: number;
  responseRate: number;
  monthlyLoss: number;
  annualLoss: number;
}

const HUBSPOT_ENDPOINT_BASE = "https://api.hsforms.com/submissions/v3/integration/submit";

const HUBSPOT_PORTAL_ID = import.meta.env.VITE_HUBSPOT_PORTAL_ID?.trim();
const HUBSPOT_FORM_ID_DEFAULT = import.meta.env.VITE_HUBSPOT_FORM_ID?.trim();
const HUBSPOT_CONTACT_FORM_ID = import.meta.env.VITE_HUBSPOT_CONTACT_FORM_ID?.trim();
const HUBSPOT_CALCULATOR_FORM_ID = import.meta.env.VITE_HUBSPOT_CALCULATOR_FORM_ID?.trim();

const HUBSPOT_FIELD_FIRST_NAME = (import.meta.env.VITE_HUBSPOT_FIELD_FIRST_NAME?.trim() || "firstname");
const HUBSPOT_FIELD_LAST_NAME = (import.meta.env.VITE_HUBSPOT_FIELD_LAST_NAME?.trim() || "lastname");
const HUBSPOT_FIELD_EMAIL = (import.meta.env.VITE_HUBSPOT_FIELD_EMAIL?.trim() || "email");
const HUBSPOT_FIELD_PHONE = (import.meta.env.VITE_HUBSPOT_FIELD_PHONE?.trim() || "phone");
const HUBSPOT_FIELD_COMPANY = (import.meta.env.VITE_HUBSPOT_FIELD_COMPANY?.trim() || "company");
const HUBSPOT_FIELD_ROLE = (import.meta.env.VITE_HUBSPOT_FIELD_ROLE?.trim() || "jobtitle");
const HUBSPOT_FIELD_MESSAGE = (import.meta.env.VITE_HUBSPOT_FIELD_MESSAGE?.trim() || "message");
const HUBSPOT_FIELD_SOURCE = import.meta.env.VITE_HUBSPOT_FIELD_SOURCE?.trim();
const HUBSPOT_FIELD_CALCULATOR_SUMMARY = import.meta.env.VITE_HUBSPOT_FIELD_CALCULATOR_SUMMARY?.trim();

function toStringValue(value: HubspotFieldValue) {
  if (value === null || value === undefined) {
    return null;
  }

  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : null;
  }

  return String(value);
}

function getHubspotCookie(cookieName: string) {
  if (typeof document === "undefined") {
    return null;
  }

  const source = document.cookie ?? "";
  if (!source) {
    return null;
  }

  const target = `${cookieName}=`;
  const parts = source.split(";").map((part) => part.trim());
  const item = parts.find((part) => part.startsWith(target));
  if (!item) {
    return null;
  }

  const raw = item.slice(target.length);
  return raw ? decodeURIComponent(raw) : null;
}

function getFormId(formType: HubspotFormType) {
  if (formType === "contact") {
    return HUBSPOT_CONTACT_FORM_ID || HUBSPOT_FORM_ID_DEFAULT || "";
  }

  if (formType === "calculator") {
    return HUBSPOT_CALCULATOR_FORM_ID || HUBSPOT_FORM_ID_DEFAULT || "";
  }

  return HUBSPOT_FORM_ID_DEFAULT || "";
}

function buildHubspotEndpoint(formType: HubspotFormType) {
  const formId = getFormId(formType);

  if (!HUBSPOT_PORTAL_ID || !formId) {
    throw new Error("HubSpot is not configured. Missing portal ID or form ID.");
  }

  return `${HUBSPOT_ENDPOINT_BASE}/${HUBSPOT_PORTAL_ID}/${formId}`;
}

export function splitFullName(value: string): NameParts {
  const parts = value.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) {
    return { firstName: "", lastName: "" };
  }

  if (parts.length === 1) {
    return { firstName: parts[0], lastName: "" };
  }

  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(" "),
  };
}

export function isHubspotConfigured(formType: HubspotFormType) {
  return Boolean(HUBSPOT_PORTAL_ID && getFormId(formType));
}

async function parseHubspotError(response: Response) {
  const payload = await response.json().catch(() => null);
  if (!payload || typeof payload !== "object") {
    return `HubSpot submit failed (${response.status}).`;
  }

  const nestedMessage =
    "errors" in payload &&
    Array.isArray((payload as { errors?: unknown[] }).errors) &&
    (payload as { errors?: Array<{ message?: string }> }).errors?.[0]?.message;
  if (typeof nestedMessage === "string" && nestedMessage.trim()) {
    return nestedMessage;
  }

  const message = "message" in payload ? (payload as { message?: unknown }).message : null;
  if (typeof message === "string" && message.trim()) {
    return message;
  }

  return `HubSpot submit failed (${response.status}).`;
}

function buildContext(params: SubmitHubspotFormParams) {
  const context: Record<string, string> = {};
  const hutk = getHubspotCookie("hubspotutk");
  if (hutk) {
    context.hutk = hutk;
  }

  const pageUri = params.pageUri || (typeof window !== "undefined" ? window.location.href : "");
  if (pageUri) {
    context.pageUri = pageUri;
  }

  const pageName = params.pageName || (typeof document !== "undefined" ? document.title : "");
  if (pageName) {
    context.pageName = pageName;
  }

  return context;
}

export async function submitHubspotForm(params: SubmitHubspotFormParams) {
  const endpoint = buildHubspotEndpoint(params.formType);
  const fields = params.fields
    .map((field) => {
      const value = toStringValue(field.value);
      if (!field.name || value === null) {
        return null;
      }
      return { name: field.name, value };
    })
    .filter((field): field is { name: string; value: string } => Boolean(field));

  if (fields.length === 0) {
    throw new Error("No valid HubSpot fields to submit.");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      submittedAt: Date.now(),
      fields,
      context: buildContext(params),
    }),
  });

  if (!response.ok) {
    throw new Error(await parseHubspotError(response));
  }
}

export async function submitContactToHubspot(input: ContactSubmissionInput) {
  const { firstName, lastName } = splitFullName(input.name);
  const fields: HubspotField[] = [
    { name: HUBSPOT_FIELD_FIRST_NAME, value: firstName || input.name },
    { name: HUBSPOT_FIELD_LAST_NAME, value: lastName },
    { name: HUBSPOT_FIELD_EMAIL, value: input.email },
    { name: HUBSPOT_FIELD_PHONE, value: input.phone },
    { name: HUBSPOT_FIELD_COMPANY, value: input.company },
    { name: HUBSPOT_FIELD_ROLE, value: input.role },
    { name: HUBSPOT_FIELD_MESSAGE, value: input.message },
  ];

  if (HUBSPOT_FIELD_SOURCE) {
    fields.push({
      name: HUBSPOT_FIELD_SOURCE,
      value: "marketing_contact_form",
    });
  }

  await submitHubspotForm({
    formType: "contact",
    fields,
    pageName: "Contact | Pinggo",
  });
}

function formatCalculatorSummary(input: CalculatorSubmissionInput) {
  return [
    `Leads/luna: ${Math.round(input.leads)}`,
    `Conversie (%): ${Math.round(input.convRate)}`,
    `Valoare medie (RON): ${Math.round(input.avgValue)}`,
    `Raspuns in 15 min (%): ${Math.round(input.responseRate)}`,
    `Pierdere lunara (RON): ${Math.round(input.monthlyLoss)}`,
    `Pierdere anuala (RON): ${Math.round(input.annualLoss)}`,
  ].join(" | ");
}

export async function submitCalculatorToHubspot(input: CalculatorSubmissionInput) {
  const { firstName, lastName } = splitFullName(input.name);
  const fields: HubspotField[] = [
    { name: HUBSPOT_FIELD_FIRST_NAME, value: firstName || input.name },
    { name: HUBSPOT_FIELD_LAST_NAME, value: lastName },
    { name: HUBSPOT_FIELD_EMAIL, value: input.email },
    { name: HUBSPOT_FIELD_PHONE, value: input.phone },
    { name: HUBSPOT_FIELD_COMPANY, value: input.company },
  ];

  const summary = formatCalculatorSummary(input);
  if (HUBSPOT_FIELD_CALCULATOR_SUMMARY) {
    fields.push({ name: HUBSPOT_FIELD_CALCULATOR_SUMMARY, value: summary });
  } else {
    fields.push({ name: HUBSPOT_FIELD_MESSAGE, value: summary });
  }

  if (HUBSPOT_FIELD_SOURCE) {
    fields.push({
      name: HUBSPOT_FIELD_SOURCE,
      value: "marketing_calculator_gate",
    });
  }

  await submitHubspotForm({
    formType: "calculator",
    fields,
    pageName: "Calculator | Pinggo",
  });
}
