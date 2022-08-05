import { prefetchApps } from "qiankun";
import { useEffect } from "react";
import { useHover } from "../hooks/useHover";

const navigateToUrl: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
  e.preventDefault();
  history.pushState(null, "", e.currentTarget.href);
};

export const NavBar = () => {
  const [ref, isHovered] = useHover<HTMLAnchorElement>();

  useEffect(() => {
    if (isHovered) {
      prefetchApps([{ name: "reactApp", entry: "//localhost:9001" }]);
    }
  }, [isHovered]);

  return (
    <nav>
      <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
        <li style={{ padding: "8px" }}>
          <a href="/" onClick={navigateToUrl}>
            Home
          </a>
        </li>
        <li style={{ padding: "8px" }}>
          <a ref={ref} href="/react" onClick={navigateToUrl}>
            React
          </a>
        </li>
      </ul>
    </nav>
  );
};
