import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BenSeg from "./pages/BenSeg";
import InterContabil from "./pages/InterContabil";
import InterNegocios from "./pages/InterNegocios";
import InterMed from "./pages/InterMed";
import ScrollToTop from "./lib/scrollToTop";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/benseg" element={<BenSeg />} />
          <Route path="/intercontabil" element={<InterContabil />} />
          <Route path="/internegocios" element={<InterNegocios />} />
          <Route path="/intermed" element={<InterMed />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
