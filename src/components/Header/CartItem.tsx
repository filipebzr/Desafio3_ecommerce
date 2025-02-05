import React from 'react';

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ id, name, price, quantity, image, onRemove }) => {
  return (
    <div className="flex items-center py-4">
      <img src={image} alt={name} className="w-16 h-16 object-cover mr-4" />
      <div className="flex-1">
        <h3 className="text-lg">{name} {quantity}</h3>
        <p className="text-sm">1 x Rs. {price.toLocaleString()}</p>
      </div>
      <button onClick={() => onRemove(id)} className="text-gray-500 hover:text-gray-700">
        &times;
      </button>
    </div>
  );
};

export default CartItem;