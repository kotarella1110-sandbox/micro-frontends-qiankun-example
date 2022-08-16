import { NavBar } from "./components/NavBar";
import { Counter } from "./components/Counter";
import { TodoList } from "./components/TodoList";

export const App = () => (
  <div style={styleRoot}>
    <NavBar />
    <div>
      <Counter />
      <TodoList />
      <main id="container" />
    </div>
  </div>
);

const styleRoot = {
  display: "grid",
  gridTemplateColumns: "264px max-content",
};
