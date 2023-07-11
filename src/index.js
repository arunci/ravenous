import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app/app";

const appElement = document.getElementById("app");

if (!appElement) {
  console.error(
    "Could not find the element with id 'app'. Make sure the element exists in the HTML."
  );
} else {
  const root = createRoot(appElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
