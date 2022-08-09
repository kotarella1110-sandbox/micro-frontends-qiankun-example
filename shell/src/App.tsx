import { NavBar } from "./components/NavBar";

export const App = () => (
  <div style={styleRoot}>
    <NavBar />
    <main id="container" />
  </div>
);

const styleRoot = {
  display: "grid",
  gridTemplateColumns: "264px max-content"
};
