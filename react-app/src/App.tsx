import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Topics } from "./components/Topics";

export const App = () => (
  <BrowserRouter basename="react">
    <NavBar />
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="topics" element={<Topics />} />
    </Routes>
  </BrowserRouter>
);

export default App;
