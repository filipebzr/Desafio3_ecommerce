import React from 'react';
import iconBag from '../../assets/images/Header/bag.svg';
import ModalButton from './ModalButton';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const items: CartItem[] = [
  {
    id: 1,
    name: 'Asgaard sofa',
    price: 250000,
    quantity: 1,
    image: 'link-para-imagem-do-sofa',
  },
  {
    id: 2,
    name: 'Casaliving Wood',
    price: 270000,
    quantity: 1,
    image: 'link-para-imagem-do-casaliving',
  },
];

const Modal: React.FC = () => {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleRemove = (id: number) => {
    console.log(`Remove item with id: ${id}`);
  };

  return (
    <div className="w-[417px] h-[746px] bg-white shadow-lg absolute top-0 right-0 p-4 z-20">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Shopping Cart</h1>
        <img src={iconBag} alt="Shopping Bag" className="w-6 h-6" />
      </div>
      <div className="divide-y">
        {items.map(item => (
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