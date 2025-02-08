import React from "react";
import SectionTitle from "../components/Section-Title/SectionTitle";
import SectionGarantie from "../components/Section-Garantie/SectionGarantie";
import FilterShop from "../components/Shop/FilterShop";
import ShopShopPage from "../components/Shop/ShopShopPage";

const Shop = () => {
  return (
    <>
      <SectionTitle title="Shop" />
      <FilterShop />
      <ShopShopPage lengthCards={12}/>
      <SectionGarantie />
    </>
  );
};

export default Shop;
