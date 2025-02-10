const CartTotal = () => {
  return (
    <div className="w-1/3 bg-[#F9F1E7] p-4 ml-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>Rs. 250,000.00</span>
      </div>
      <div className="flex justify-between font-semibold text-lg">
        <span>Total</span>
        <span className="text-orange-500">Rs. 250,000.00</span>
      </div>
      <a href="/checkout">
        <button className="w-full mt-4 py-2 font-bold text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white bg-white border border-[#B88E2F] rounded-lg">
          Check Out
        </button>
      </a>
    </div>
  );
};

export default CartTotal;
