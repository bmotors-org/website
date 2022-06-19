import {Route, Routes} from "react-router-dom";
import {About} from "../../pages/About";
import {Contact} from "../../pages/Contact";
import {Apps} from "../../pages/Apps";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<About/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/apps" element={<Apps/>}/>
    </Routes>
  );
}