import { Helmet } from "react-helmet-async";

interface SchemaMarkupProps {
  schema: Record<string, unknown>;
}

export function SchemaMarkup({ schema }: SchemaMarkupProps) {
  return (
    <Helmet>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Helmet>
  );
}
