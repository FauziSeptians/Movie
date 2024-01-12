import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailMovie from "./pages/detail.js";
import Home from "./pages/home.js";
import NotFound from "./pages/404.js";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/detail/:id" element={<DetailMovie />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
