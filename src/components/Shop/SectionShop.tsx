import CardShop from "./CardShop";

const SectionShop = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-5xl pt-8">Our Products</h1>
      <div className="gap-20 grid grid-cols-4 mt-6 p-8">
        <CardShop
          title="Syltherine"
          description="Stylish cafe chair"
          valueOff='2500000'
          value='3500000'
          alertText="New"
          image="/public/sectionShop/01.jpg"
        />
        <CardShop
          title="Syltherine"
          description="Stylish cafe chair"
          valueOff='2.500.000'
          value='3.500.000'
          alertText="-30%"
          image="/public/sectionShop/01.jpg"
        /><CardShop
        title="Syltherine"
        description="Stylish cafe chair"
        valueOff='2.500.000'
        value='3.500.000'
        alertText=""
        image="/public/sectionShop/01.jpg"
      />
      </div>
    </div>
  );
};

export default SectionShop;
