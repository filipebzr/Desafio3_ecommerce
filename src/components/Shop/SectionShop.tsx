import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardShop from "./CardShop";
import { useDispatch } from 'react-redux';
import { addItem } from './Redux/CartSlice';

interface Product {
  title: string;
  description: string;
  valueOff: string;
  value: string;
  alertText: string;
  image: string;
  id: number;
}

interface SectionShopProps {
  lengthCards: number; 
  title: string;
}

const SectionShop: React.FC<SectionShopProps> = ({ lengthCards, title }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleCount, setVisibleCount] = useState(lengthCards);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/db.json");
        const data: Product[] = await response.json();
        setProducts(data.map(product => ({
          ...product,
          valueOff: product.valueOff || product.value
        })));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleShowMore = () => {
    visibleCount + 4 >= products.length 
      ? navigate("/shop") 
      : setVisibleCount(prev => prev + 4);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-5xl pt-8">{title}</h1>
      <div className={`gap-6 grid grid-cols-${Math.min(4, lengthCards)} mt-6 p-8`}>
        {products.slice(0, visibleCount).map((product) => (
          <CardShop
            key={product.id}
            {...product}
            onAddToCart={() => dispatch(addItem({
              id: product.id,
              name: product.title,
              price: parseFloat(product.value.replace(/\./g, '')),
              image: product.image 
            }))}
          />
        ))}
      </div>
      <div className="h-[100px] items-center flex justify-center ">
        <button
          onClick={handleShowMore}
          className="border-[#B88E2F] font-bold text-[#B88E2F] border h-[48px] w-[245px]"
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default SectionShop;