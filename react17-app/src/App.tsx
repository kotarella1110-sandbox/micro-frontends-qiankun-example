import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Topics } from "./components/Topics";
import { Counter } from "./components/Counter";

export const App = () => (
  <BrowserRouter basename="react17">
    <NavBar />
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="topics" element={<Topics />} />
      <Route path="counter" element={<Counter />} />
    </Routes>
  </BrowserRouter>
);

export default App;
