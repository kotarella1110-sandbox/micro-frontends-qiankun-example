import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import packageJson from "../package.json";
import App from "./App";

if (window.__POWERED_BY_QIANKUN__) {
  window.__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

let container: HTMLElement;

const render = (props?: any) => {
  container = props?.container
    ? props.container.querySelector("#root")
    : document.getElementById("root");

  ReactDOM.render(
    <StrictMode>
      <App />
    </StrictMode>,
    container
  );
};

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log(`${packageJson.name} bootstrap`);
}

export async function mount(props: any) {
  console.log(`${packageJson.name} mount`, props);
  render(props);
}

export async function unmount(props: any) {
  console.log(`${packageJson.name} unmount`, props);
  ReactDOM.unmountComponentAtNode(container);
}

export async function update(props: any) {
  console.log(`${packageJson.name} update`, props);
}
