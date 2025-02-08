import SectionShop from "../components/Shop/SectionShop";
import MenuSection from "../components/singleProduct/MenuSection";

const SingleProduct = () => {
  return (
    <>
    <div className="w-full">
      <MenuSection />
      <SectionShop lengthCards={4}/>
    </div>
    </>
  );
};

export default SingleProduct;
