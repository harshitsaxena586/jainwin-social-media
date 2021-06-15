import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { NetworkContextProvider } from "./NetworkContext";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NetworkContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </NetworkContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
