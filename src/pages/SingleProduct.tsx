import SectionShop from "../components/Shop/SectionShop";
import DescriptionSection from "../components/singleProduct/DescriptionSection";
import MenuSection from "../components/singleProduct/MenuSection";
import ProductSection from "../components/singleProduct/ProductSection";


const SingleProduct = () => {
  return (
    <>
      <MenuSection />
      <ProductSection/>
      <DescriptionSection/>
      <SectionShop lengthCards={4} title="Related Products" />
    </>
  );
};

export default SingleProduct;
