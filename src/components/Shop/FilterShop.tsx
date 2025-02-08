import iconLike from "../../assets/shop.svg";
import { useState, useEffect } from "react";

const FilterShop = () => {
  const [setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // Inicialmente, sem filtro
      });
  }, []);

  // Função de filtro (descomentada se necessário)
  // const filterByQuantity = (minQuantity) => {
  //   const filtered = products.filter(product => product.quantity >= minQuantity);
  //   setFilteredProducts(filtered);
  // };

  return (
    <div className="w-full h-[100px] px-[150px] bg-[#FAF3EA] flex items-center justify-between">
      <div className="flex items-center border-[#CCC] border-r pr-4">
        <img src={iconLike} alt="" className="mr-2" />
        <h1 className="mr-2">Filter</h1>
        <img src={iconLike} alt="" className="mr-2" />
        <img src={iconLike} alt="" />
      </div>
      <div className="flex items-center -ml-[830px] px-4">
        <h1>Showing {filteredProducts.length} results</h1>
      </div>
      <div className="flex items-center gap-4">
        <h1>Show</h1>
        <input
          type="text"
          placeholder="16"
          className="h-8 w-8 text-center border"
        />
        <h1>Short by</h1>
        <input
          type="text"
          placeholder="Default"
          className="h-8 w-[150px] text-center border"
        />
      </div>
    </div>
  );
};

export default FilterShop;
