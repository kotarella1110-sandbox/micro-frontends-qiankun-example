import type { MicroAppStateActions } from "qiankun";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { Shared } from "./components/Shared";
import { Topics } from "./components/Topics";

export type Props = {
  actions: MicroAppStateActions;
};

export const App = (props: Props) => (
  <BrowserRouter basename="react18">
    <NavBar />
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="topics" element={<Topics />} />
      <Route path="shared" element={<Shared {...props} />} />
    </Routes>
  </BrowserRouter>
);

export default App;
