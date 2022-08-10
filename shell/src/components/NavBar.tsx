import { usePrefetchApp } from "../hooks/usePrefetchApp";
import react17AppPackageJson from "../../../react17-app/package.json";
import react18AppPackageJson from "../../../react18-app/package.json";

const navigateToUrl: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
  e.preventDefault();
  history.pushState(null, "", e.currentTarget.href);
};

export const NavBar = () => {
  const react17Ref = usePrefetchApp<HTMLAnchorElement>({
    name: react17AppPackageJson.name,
    entry: "//localhost:9002",
  });

  const react18Ref = usePrefetchApp<HTMLAnchorElement>({
    name: react18AppPackageJson.name,
    entry: "//localhost:9003",
  });

  return (
    <nav style={styleNavBar}>
      <h3>global nav</h3>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        <li style={{ padding: "8px" }}>
          <a href="/" onClick={navigateToUrl}>
            to Home App
          </a>
        </li>
        <li style={{ padding: "8px" }}>
          <a ref={react17Ref} href="/react17" onClick={navigateToUrl}>
            to React17 App
          </a>
        </li>
        <li style={{ padding: "8px" }}>
          <a ref={react18Ref} href="/react18" onClick={navigateToUrl}>
            to React18 App
          </a>
        </li>
      </ul>
    </nav>
  );
};

const styleNavBar = {
  background: "#F2F4F7",
  minHeight: "100vh",
};
