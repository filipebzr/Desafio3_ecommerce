import React from "react";
import CartTotal from "./CartTotal";
import trash from "../../assets/trash.svg"

const thumbnail =
  "https://bzr-furniro.s3.us-east-2.amazonaws.com/Annibale+Colombo+Bed/thumbnail+Annibale+Colombo+Bed.png";

const CartSection = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 flex">
      <div className="flex-1">
        <div className="bg-[#F9F1E7] p-4 rounded-t-lg">
          <div className="flex justify-between text-gray-700 font-semibold">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
          </div>
        </div>
        <div className="flex items-center justify-between bg-white p-4 border-b">
          <img
            src={thumbnail}
            alt="Product"
            className="w-20 h-20 rounded"
          />
          <span className="flex-1 ml-4">Asgaard sofa</span>
          <span className="flex-1 text-center">Rs. 250,000.00</span>
          <div className="flex items-center justify-center">
            <button className="px-2 py-1 border">-</button>
            <input
              type="text"
              value="1"
              className="w-12 text-center border mx-1"
              readOnly
            />
            <button className="px-2 py-1 border">+</button>
          </div>
          <span className="flex-1 text-center">Rs. 250,000.00</span>
          <button className="text-yellow-500">
           <img src={trash} alt="trash" className="h-[20px] w-[20px]"/>
          </button>
        </div>
      </div>
      <CartTotal />
    </div>
  );
};

export default CartSection;