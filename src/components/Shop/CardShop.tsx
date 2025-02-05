import AlertOff from "./AlertOff";
import iconShare from "../../../public/sectionShop/share.svg"
import iconCompare from "../../../public/sectionShop/compare.svg"
import iconLike from "../../../public/sectionShop/like.svg"

interface CardShopProps {
  title: string;
  description: string;
  value: string;
  valueOff: string;
  alertText: string;
  image: string;
}

const CardShop: React.FC<CardShopProps> = ({
  title,
  description,
  value,
  valueOff,
  alertText,
  image,
}) => {
  return (
    <div className="bg-[#F4F5F7] w-[285px] h-[480px] shadow-2xl relative">
      <div className="relative group">
        <img src={image} alt="" className="w-full h-[320px] object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="bg-white text-[#B88E2F] w-[202px] font-bold px-4 py-2 mb-2">
            Add to cart
          </button>
          <div className="flex justify-between space-x-2 text-white">
            <img src={iconShare} alt="" />
            <button>Share</button>
            <img src={iconCompare} alt="" />
            <button>Compare</button>
            <img src={iconLike} alt="" />
            <button>Like</button>
          </div>
        </div>
        <AlertOff text={alertText} />
        <div className="p-4">
          <h1 className="text-3xl font-bold pt-2">{title}</h1>
          <p className="text-2xl pt-2 text-[#898989] ">{description}</p>
          <div className="flex gap-2 items-end pt-2">
            <h2 className="font-bold text-2xl ">Rp {valueOff}</h2>
            <p className="text-gray-500 line-through">Rp {value}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardShop;
