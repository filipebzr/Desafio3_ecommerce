import React from "react";

const FooterIA = () => {
  return (
    <footer className="bg-white w-full text-black px-20 py-10 border-t">
      <div className="flex justify-between items-start">
        {/* Logo e Endereço */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Funiro.</h1>
          <p className="text-sm w-60">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
          {/* Ícones sociais */}
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-gray-500 hover:text-black">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-black">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-black">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-black">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-20">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold">Links</h2>
            <nav className="flex flex-col gap-1 text-sm">
              <a href="/" className="hover:underline">
                Home
              </a>
              <a href="/shop" className="hover:underline">
                Shop
              </a>
              <a href="/about" className="hover:underline">
                About
              </a>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </nav>
          </div>

          {/* Help */}
          <div className="flex flex-col gap-2">
            <h2 className="font-bold">Help</h2>
            <div className="flex flex-col gap-1 text-sm">
              <a href="/payment" className="hover:underline">
                Payment Options
              </a>
              <a href="/returns" className="hover:underline">
                Returns
              </a>
              <a href="/privacy" className="hover:underline">
                Privacy Policies
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-2">
            <h2 className="font-bold">Newsletter</h2>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="border px-2 py-1 text-sm w-52"
              />
              <button className="bg-black text-white text-sm px-4 py-1 hover:bg-gray-800">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Direitos Autorais */}
      <div className="text-center text-sm mt-8 text-gray-500">
        2023 funiro. All rights reserved
      </div>
    </footer>
  );
};

export default FooterIA;
