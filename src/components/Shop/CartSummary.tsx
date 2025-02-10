import React from 'react';

interface CartSummaryProps {
  subtotal: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({ subtotal }) => {
  return (
    <div className="flex justify-between items-center mt-4">
      <span className="text-lg font-bold">Subtotal</span>
      <span className="text-lg font-bold text-yellow-500">Rs. {subtotal.toLocaleString()}</span>
    </div>
  );
};

export default CartSummary;