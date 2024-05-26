import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import TabContextProvider from "./context/TabContextProvider.jsx";
import SearchContextProvider from "./context/SearchContextProvider.jsx";
import LoginContextProvider from "./context/LoginContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TabContextProvider>
        <SearchContextProvider>
          <LoginContextProvider>
            <App />
          </LoginContextProvider>
        </SearchContextProvider>
      </TabContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
