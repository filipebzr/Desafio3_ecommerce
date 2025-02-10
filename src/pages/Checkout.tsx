
import SectionTitle from "../components/Section-Title/SectionTitle";
import SectionGarantie from "../components/Section-Garantie/SectionGarantie";
import SectionBilling from "../components/CheckOut/SectionBilling";

const Checkout = () => {
  return (
    <>
      <SectionTitle title="Checkout" />
      <SectionBilling />
      <SectionGarantie />
    </>
  );
};

export default Checkout;
