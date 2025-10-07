import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../home"; // Your main page
import ContactForm from "../components/contact"; // Your contact component
import ExploreProjects from "../components/projects";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
         <Route path="/projects" element={<ExploreProjects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;