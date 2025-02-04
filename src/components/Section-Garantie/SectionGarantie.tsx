import TagGarantie from "./TagGarantie";
import iconTrophy from "/sectionGarantee/trophy.svg";
import iconGuarantee from "/sectionGarantee/guarantee.svg";
import iconShipping from "/sectionGarantee/shipping.svg";
import iconCS from "/sectionGarantee/customer-support.svg";

const SectionGarantie = () => {
  return (
    <div className="w-auto h-[270px] py-[90px] px-9 bg-[#FAF3EA] justify-between flex items-center">
     <TagGarantie title="High Quality" icon={iconTrophy} paragrafy="crafted from top materials" />
     <TagGarantie title="Warranty Protection" icon={iconGuarantee} paragrafy="Over 2 years" />
     <TagGarantie title="Free Shipping" icon={iconShipping} paragrafy="Order over 150 $" />
     <TagGarantie title="24 / 7 Support" icon={iconCS} paragrafy="Dedicated support" />
    </div>
  );
};

export default SectionGarantie;