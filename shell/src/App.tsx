import { NavBar } from "./components/NavBar";
import { Counter } from "./components/Counter";

export const App = () => (
  <div style={styleRoot}>
    <NavBar />
    <div>
      <Counter />
      <main id="container" />
    </div>
  </div>
);

const styleRoot = {
  display: "grid",
  gridTemplateColumns: "264px max-content",
};
