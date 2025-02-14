// src/components/Shop/Modal.tsx
import React from "react";
import iconBag from "../../assets/images/Header/bag.svg";
import ModalButton from "../Header/ModalButton";
import CartItem from "../Shop/CartItem";
import CartSummary from "../Shop/CartSummary";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Shop/Redux/Store";
import { removeItem, closeModal } from "../Shop/Redux/CartSlice";

const Modal: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);
  const subtotal = useSelector((state: RootState) => state.cart.total);

  const handleRemove = (id: number) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="w-[417px] h-[746px] bg-white shadow-lg absolute top-0 right-0 p-4 z-20">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Shopping Cart</h1>
        <button onClick={() => dispatch(closeModal())}>
          <img
            src={iconBag}
            alt="Shopping Bag"
            className="w-6 h-6 hover:opacity-70"
          />
        </button>
      </div>
      <div className="divide-y">
        {items.map((item) => (
          <CartItem key={item.id} {...item} onRemove={handleRemove} />
        ))}
      </div>
      <CartSummary subtotal={subtotal} />
      <div className="flex gap-4 justify-center mt-4">
        <ModalButton title="Cart" />
        <ModalButton title="Checkout" />
        <ModalButton title="Comparison" />
      </div>
    </div>
  );
};

export default Modal;
