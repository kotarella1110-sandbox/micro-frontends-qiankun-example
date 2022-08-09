import { prefetchApps } from "qiankun";
import { useEffect } from "react";
import { useHover } from "../hooks/useHover";
import reactAppPackageJson from "../../../react-app/package.json";

const navigateToUrl: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
  e.preventDefault();
  history.pushState(null, "", e.currentTarget.href);
};

export const NavBar = () => {
  const [ref, isHovered] = useHover<HTMLAnchorElement>();

  useEffect(() => {
    if (isHovered) {
      prefetchApps([
        { name: reactAppPackageJson.name, entry: "//localhost:9002" },
      ]);
    }
  }, [isHovered]);

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
          <a ref={ref} href="/react" onClick={navigateToUrl}>
            to React App
          </a>
        </li>
      </ul>
    </nav>
  );
};

const styleNavBar = {
  background: "#F2F4F7",
  minHeight: "100vh"
};
