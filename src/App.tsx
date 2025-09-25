import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CityMapPage from "./pages/CityMapPage";
import ServicesPage from "./pages/ServicesPage";
import TouristGuidePage from "./pages/TouristGuidePage";
import TransportGuidePage from "./pages/TransportGuidePage";
import ReportIssuePage from "./pages/ReportIssuePage";
import GovernmentServicesPage from "./pages/GovernmentServicesPage";
import EventsPage from "./pages/EventsPage";
import NewsPage from "./pages/NewsPage";
import NotFound from "./pages/NotFound";
import Header from "./components/layout/Header";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Header />
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/map" element={<CityMapPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/tourist-guide" element={<TouristGuidePage />} />
              <Route path="/transport-guide" element={<TransportGuidePage />} />
              <Route path="/report" element={<ReportIssuePage />} />
              <Route path="/government" element={<GovernmentServicesPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/news" element={<NewsPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
