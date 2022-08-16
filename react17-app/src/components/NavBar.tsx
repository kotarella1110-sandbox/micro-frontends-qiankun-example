import { Link } from "react-router-dom";

export const NavBar = () => (
  <nav>
    <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
      <li style={{ padding: "8px" }}>
        <Link to="/">Home</Link>
      </li>
      <li style={{ padding: "8px" }}>
        <Link to="about">About</Link>
      </li>
      <li style={{ padding: "8px" }}>
        <Link to="topics">Topics</Link>
      </li>
      <li style={{ padding: "8px" }}>
        <Link to="todo">Todo</Link>
      </li>
      <li style={{ padding: "8px" }}>
        <Link to="counter">Counter</Link>
      </li>
    </ul>
  </nav>
);
