import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Empreendimentos from "./pages/Empreendimentos";
import EmpreendimentoDetail from "./pages/EmpreendimentoDetail";
import ASolos from "./pages/ASolos";
import NossaHistoria from "./pages/NossaHistoria";
import ComoTrabalhamos from "./pages/ComoTrabalhamos";
import OferecaSuaArea from "./pages/OferecaSuaArea";
import ParaCorretores from "./pages/ParaCorretores";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/empreendimentos" element={<Empreendimentos />} />
            <Route path="/empreendimentos/:slug" element={<EmpreendimentoDetail />} />
            <Route path="/a-solos" element={<ASolos />} />
            <Route path="/nossa-historia" element={<NossaHistoria />} />
            <Route path="/como-trabalhamos" element={<ComoTrabalhamos />} />
            <Route path="/para-parceiros/ofereca-sua-area" element={<OferecaSuaArea />} />
            <Route path="/para-parceiros/para-corretores" element={<ParaCorretores />} />
            <Route path="/contato" element={<Contato />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
