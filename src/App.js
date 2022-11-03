import "./App.css";
import Landing from "./pages/LandingPage/LandingPage";
import Contact from "./pages/ContactPage/ContactPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Hngi9-linktreeClone" element={<Landing />} />
        <Route path="/Hngi9-linktreeClone/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
