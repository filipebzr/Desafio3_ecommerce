import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import SectionTitle from "./components/Section-Title/SectionTitle.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <SectionTitle title="Cart" />
    <App />
    <SectionTitle title="Shop" />
    <Footer />
  </StrictMode>
);
