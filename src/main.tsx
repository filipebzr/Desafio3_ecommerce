import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Header from "./components/Header.tsx";
import HeaderIA from "./components/HeaderIA.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <header>
      <Header />
      <HeaderIA />
    </header>
    <section>
      <App />
    </section>
  </StrictMode>
);
