import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { Topics } from "./components/Topics";

export const App = () => (
  <BrowserRouter basename="react18">
    <NavBar />
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="topics" element={<Topics />} />
    </Routes>
  </BrowserRouter>
);

export default App;
