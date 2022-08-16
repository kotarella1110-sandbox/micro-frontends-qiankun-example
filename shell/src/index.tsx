import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { App } from "./App";
import { startMicroApps } from "./startMicroApps";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <StrictMode>
    <RecoilRoot>
      <Provider store={store}>
        <App />
      </Provider>
    </RecoilRoot>
  </StrictMode>
);

startMicroApps();
