import  { useState } from "react";
import iconName from "../../assets/images/Header/iconName.png";
import iconProfile from "../../assets/profile.svg";
import iconShop from "../../assets/shop.svg";
import Modal from "./Modal";
import { useSelector } from "react-redux";
import { RootState } from "../../store"; // Ajuste o caminho conforme necessário

const Header = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  
  // Calcula a quantidade total de itens no carrinho
  const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleMouseEnter = () => {
    setModalVisible(true);
  };

  const handleMouseLeave = () => {
    setModalVisible(false);
  };

  return (
    <div className="fixed z-50 h-[90px] w-full bg-white  px-8 flex items-center justify-between">
      <img src={iconName} alt="Furniro icon" className="w-auto h-10" />

      <nav className="flex gap-10 font-bold">
        <a href="/" className="hover:border-b border-black hover:shadow-lg">
          Home
        </a>
        <a href="/shop" className="hover:border-b border-black hover:shadow-lg">
          Shop
        </a>
        <a
          href="/about"
          className="hover:border-b border-black hover:shadow-lg">
          About
        </a>
        <a
          href="/contact"
          className="hover:border-b border-black hover:shadow-lg">
          Contact
        </a>
      </nav>

      <div className="flex items-center gap-4">
        <div className="flex h-[24px] w-[24px] rounded-full shadow-lg justify-center items-center bg-white hover:text-gray-500">
          <a href="/profile">
            <img src={iconProfile} alt="" />
          </a>
        </div>

        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Badge com a quantidade de itens */}
          {cartQuantity > 0 && (
            <div className="absolute -top-3 -right-3 bg-[#B88E2F] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
              {cartQuantity}
            </div>
          )}
          
          <img src={iconShop} alt="Shop Icon" className="cursor-pointer" />
          {isModalVisible && (
            <>
              <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-40" />
              <div className="absolute top-0 right-0 w-[400px] h-[748px] bg-white z-50">
                <Modal />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;