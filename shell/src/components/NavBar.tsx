import { navigateToUrl } from "single-spa";

export const NavBar = () => (
  <nav>
    <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
      <li style={{ padding: "8px" }}>
        <a href="/" onClick={navigateToUrl}>
          Home
        </a>
      </li>
      <li style={{ padding: "8px" }}>
        <a href="/react" onClick={navigateToUrl}>
          React
        </a>
      </li>
    </ul>
  </nav>
);
