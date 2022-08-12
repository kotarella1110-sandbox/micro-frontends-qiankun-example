import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { Counter } from "./components/Counter";
import { Profile } from "./components/Profile";

export const App = () => (
  <BrowserRouter basename="react18">
    <NavBar />
    <Routes>
      <Route index element={<Home />} />
      <Route path="counter" element={<Counter />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
);

export default App;
