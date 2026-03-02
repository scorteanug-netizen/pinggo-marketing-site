import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Docs from "./pages/Docs";
import Contact from "./pages/Contact";
import Calculator from "./pages/Calculator";
import Faq from "./pages/Faq";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogLeadCost from "./pages/blog/cat-costa-un-lead-pierdut";
import BlogPacienti from "./pages/blog/pacient-nou-pierdut-clinica-whatsapp";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/cat-costa-un-lead-pierdut" element={<BlogLeadCost />} />
          <Route path="/blog/cat-costa-un-lead-pierdut-romania" element={<BlogLeadCost />} />
          <Route path="/blog/pacient-nou-pierdut-clinica-whatsapp" element={<BlogPacienti />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
