import React from "react";
import ReactDOM from "react-dom";
import * as SimplyBusiness from "@simplybusiness/mobius-simplybusiness";
import App from "./App";
import { theme } from "./theme";
import { MobiusProvider } from "./MobiusProvider";

ReactDOM.render(
  <React.StrictMode>
    <MobiusProvider components={SimplyBusiness} theme={theme}>
      <div className="App">
        <App />
      </div>
    </MobiusProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
