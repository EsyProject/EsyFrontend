import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.jsx";
import "./index.css";
import { MsalProvider } from "@azure/msal-react";
import { msalInstance } from "./lib/sso/msalInstance.js";
import { BrowserRouter } from "react-router-dom";

// Creates a QueryClient instance
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  // React Query provider to manage the global state of queries
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      {/* MSAL provider for integration with Azure AD */}
      <MsalProvider instance={msalInstance}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MsalProvider>
    </React.StrictMode>
  </QueryClientProvider>
);
