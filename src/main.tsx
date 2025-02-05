import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer/Footer.tsx"; 
import SectionTitle from "./components/Section-Title/SectionTitle.tsx";
import SectionGarantie from "./components/Section-Garantie/SectionGarantie.tsx";
import SectionShop from "./components/Shop/SectionShop.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <SectionTitle title="Cart" />
    <SectionGarantie />
    <SectionShop/>
    <Footer />
  </StrictMode>
);
