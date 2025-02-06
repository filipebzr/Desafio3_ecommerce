import { useEffect, useState } from "react";
import CardShop from "./CardShop";

interface Product {
  title: string;
  description: string;
  valueOff: string;
  value: string;
  alertText: string;
  image: string;
}

const SectionShop: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/db.json"); 
        const data: Product[] = await response.json();

        // Lógica para substituir valueOff se estiver vazio
        const updatedProducts = data.map(product => ({
          ...product,
          valueOff: product.valueOff === "" ? product.value : product.valueOff,
          value: product.valueOff === "" ? product.value : product.value
        }));

        setProducts(updatedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-5xl pt-8">Our Products</h1>
      <div className="gap-20 grid grid-cols-4 mt-6 p-8">
        {products.map((product, index) => (
          <CardShop
            key={index}
            title={product.title}
            description={product.description}
            valueOff={product.valueOff }
            value={product.value}
            alertText={product.alertText}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionShop;