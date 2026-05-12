import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PizzaMenuApp } from "./app/PizzaMenuApp";
import "./scss/main.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <PizzaMenuApp />
    </BrowserRouter>
  </StrictMode>,
);
