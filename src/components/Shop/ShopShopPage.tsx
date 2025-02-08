import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardShop from "./CardShop";

interface Product {
  title: string;
  description: string;
  valueOff: string;
  value: string;
  alertText: string;
  image: string;
}
interface SectionShopProps {
  lengthCards: number; 
}

const ShopShopPage: React.FC<SectionShopProps> = ({ lengthCards }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleCount, setVisibleCount] = useState(lengthCards);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/db.json");
        const data: Product[] = await response.json();

        const updatedProducts = data.map((product) => ({
          ...product,
          valueOff: product.valueOff === "" ? product.value : product.valueOff,
          value: product.valueOff === "" ? product.value : product.value,
        }));

        setProducts(updatedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleShowMore = () => {
    if (visibleCount + 4 >= products.length) {
      navigate("/shop");
    } else {
      setVisibleCount(visibleCount + 4);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-5xl pt-8">Our Products</h1>
      <div className="gap-20 grid grid-cols-4 mt-6 p-8">
        {products.slice(0, visibleCount).map((product, index) => (
          <CardShop
            key={index}
            title={product.title}
            description={product.description}
            valueOff={product.valueOff}
            value={product.value}
            alertText={product.alertText}
            image={product.image}
          />
        ))}
      </div>
      <div className="h-[100px] items-center flex justify-center ">
        <button
          onClick={handleShowMore}
          className="border-[#B88E2F] font-bold text-[#B88E2F] border h-[48px] w-[245px]"
        >
          MUDAR ESSA AQUI
        </button>
      </div>
    </div>
  );
};
export default ShopShopPage