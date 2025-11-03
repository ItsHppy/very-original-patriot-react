import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Page8 from "./pages/Page8";
import Page9 from "./pages/Page9";
import Page10 from "./pages/Page10";
import Page11 from "./pages/Page11";
import Page12 from "./pages/Page12";
import Page13 from "./pages/Page13";
import Page14 from "./pages/Page14";
import Page15 from "./pages/Page15";
import Page16 from "./pages/Page16";
import Page17 from "./pages/Page17";
import Page18 from "./pages/Page18";
import Page19 from "./pages/Page19";
import Page20 from "./pages/Page20";
import Page21 from "./pages/Page21";
import Page22 from "./pages/Page22";
import Page23 from "./pages/Page23";
import Page24 from "./pages/Page24";
import Page25 from "./pages/Page25";
import Page26 from "./pages/Page26";
import Page27 from "./pages/Page27";
import Page28 from "./pages/Page28";
import Page29 from "./pages/Page29";
import Page30 from "./pages/Page30";
import Page31 from "./pages/Page31";
import Page32 from "./pages/Page32";
import Page33 from "./pages/Page33";
import Page34 from "./pages/Page34";
import Page36 from "./pages/Page36";
import Page37 from "./pages/Page37";
import Page38 from "./pages/Page38";
import Page39 from "./pages/Page39";
import Page35 from "./pages/Page35";
import Page40 from "./pages/Page40";
import Page41 from "./pages/Page41";
import Page42 from "./pages/Page42";
import Page43 from "./pages/Page43";
import Page44 from "./pages/Page44";
import Page45 from "./pages/Page45";
import Page46 from "./pages/Page46";
import Page47 from "./pages/Page47";
import Page48 from "./pages/Page48";
import Page49 from "./pages/Page49";
import Page50 from "./pages/Page50";
import Page51 from "./pages/Page51";
import Page52 from "./pages/Page52";
import Page53 from "./pages/Page53";
import Page54 from "./pages/Page54";
import Page55 from "./pages/Page55";
import Page56 from "./pages/Page56";
import Page57 from "./pages/Page57";
import Page58 from "./pages/Page58";
import Page59 from "./pages/Page59";
import Page60 from "./pages/Page60";
import Page61 from "./pages/Page61";
import Page62 from "./pages/Page62";
import Page63 from "./pages/Page63";
import Page64 from "./pages/Page64";
import Page65 from "./pages/Page65";
import Page66 from "./pages/Page66";
import Page67 from "./pages/Page67";
import Page68 from "./pages/Page68";
import Page69 from "./pages/Page69";
import Page70 from "./pages/Page70";
import Page71 from "./pages/Page71";
import Page72 from "./pages/Page72";
import Page73 from "./pages/Page73";
import Page74 from "./pages/Page74";
import Page75 from "./pages/Page75";
import Page76 from "./pages/Page76";
import Page77 from "./pages/Page77";
import Page78 from "./pages/Page78";
import Page79 from "./pages/Page79";
import Page80 from "./pages/Page80";
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
          <Route path="/page/1" element={<Page1 />} />
          <Route path="/page/2" element={<Page2 />} />
          <Route path="/page/3" element={<Page3 />} />
          <Route path="/page/4" element={<Page4 />} />
          <Route path="/page/5" element={<Page5 />} />
          <Route path="/page/6" element={<Page6 />} />
          <Route path="/page/7" element={<Page7 />} />
          <Route path="/page/8" element={<Page8 />} />
          <Route path="/page/9" element={<Page9 />} />
          <Route path="/page/10" element={<Page10 />} />
        <Route path="/page/11" element={<Page11 />} />
        <Route path="/page/12" element={<Page12 />} />
        <Route path="/page/13" element={<Page13 />} />
        <Route path="/page/14" element={<Page14 />} />
        <Route path="/page/15" element={<Page15 />} />
        <Route path="/page/16" element={<Page16 />} />
        <Route path="/page/17" element={<Page17 />} />
        <Route path="/page/18" element={<Page18 />} />
        <Route path="/page/19" element={<Page19 />} />
        <Route path="/page/20" element={<Page20 />} />
        <Route path="/page/21" element={<Page21 />} />
        <Route path="/page/22" element={<Page22 />} />
        <Route path="/page/23" element={<Page23 />} />
          <Route path="/page/24" element={<Page24 />} />
          <Route path="/page/25" element={<Page25 />} />
          <Route path="/page/26" element={<Page26 />} />
          <Route path="/page/27" element={<Page27 />} />
          <Route path="/page/28" element={<Page28 />} />
          <Route path="/page/29" element={<Page29 />} />
          <Route path="/page/30" element={<Page30 />} />
          <Route path="/page/31" element={<Page31 />} />
          <Route path="/page/32" element={<Page32 />} />
          <Route path="/page/33" element={<Page33 />} />
          <Route path="/page/34" element={<Page34 />} />
          <Route path="/page/36" element={<Page36 />} />
          <Route path="/page/37" element={<Page37 />} />
          <Route path="/page/38" element={<Page38 />} />
          <Route path="/page/39" element={<Page39 />} />
          <Route path="/page/35" element={<Page35 />} />
          <Route path="/page/40" element={<Page40 />} />
          <Route path="/page/41" element={<Page41 />} />
          <Route path="/page/42" element={<Page42 />} />
          <Route path="/page/43" element={<Page43 />} />
          <Route path="/page/44" element={<Page44 />} />
          <Route path="/page/45" element={<Page45 />} />
          <Route path="/page/46" element={<Page46 />} />
          <Route path="/page/47" element={<Page47 />} />
          <Route path="/page/48" element={<Page48 />} />
          <Route path="/page/49" element={<Page49 />} />
          <Route path="/page/50" element={<Page50 />} />
          <Route path="/page/51" element={<Page51 />} />
          <Route path="/page/52" element={<Page52 />} />
          <Route path="/page/53" element={<Page53 />} />
          <Route path="/page/54" element={<Page54 />} />
          <Route path="/page/55" element={<Page55 />} />
          <Route path="/page/56" element={<Page56 />} />
          <Route path="/page/57" element={<Page57 />} />
          <Route path="/page/58" element={<Page58 />} />
          <Route path="/page/59" element={<Page59 />} />
          <Route path="/page/60" element={<Page60 />} />
          <Route path="/page/61" element={<Page61 />} />
          <Route path="/page/62" element={<Page62 />} />
          <Route path="/page/63" element={<Page63 />} />
          <Route path="/page/64" element={<Page64 />} />
          <Route path="/page/65" element={<Page65 />} />
          <Route path="/page/66" element={<Page66 />} />
          <Route path="/page/67" element={<Page67 />} />
          <Route path="/page/68" element={<Page68 />} />
          <Route path="/page/69" element={<Page69 />} />
          <Route path="/page/70" element={<Page70 />} />
          <Route path="/page/71" element={<Page71 />} />
          <Route path="/page/72" element={<Page72 />} />
          <Route path="/page/73" element={<Page73 />} />
          <Route path="/page/74" element={<Page74 />} />
          <Route path="/page/75" element={<Page75 />} />
          <Route path="/page/76" element={<Page76 />} />
          <Route path="/page/77" element={<Page77 />} />
          <Route path="/page/78" element={<Page78 />} />
          <Route path="/page/79" element={<Page79 />} />
          <Route path="/page/80" element={<Page80 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
