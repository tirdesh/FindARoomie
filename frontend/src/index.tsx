import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { AlertProvider } from "./handlers/AlertProvider";
import { ValidationProvider } from "./handlers/ValidationProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <AlertProvider>
          <ValidationProvider>
            <App />
          </ValidationProvider>
        </AlertProvider>
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorkerRegistration.register();
