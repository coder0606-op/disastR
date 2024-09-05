import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import UserContextProvider from "./context/UserContextProvider.jsx";

const PUBLISHABLE_KEY =
  import.meta.env.VITE_CLERK_PUBLISHABLE_KEY ||
  "pk_test_cmVuZXdpbmctamVubmV0LTg3LmNsZXJrLmFjY291bnRzLmRldiQ";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl={"/"}>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </ClerkProvider>
  </StrictMode>
);
