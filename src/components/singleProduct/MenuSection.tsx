import React from "react";

const MenuSection = () => {
  return (
    <div className="px-20 pt-[110px] bg-[#F7EFE7] ">
      <div className="h-9">
        <div className="flex items-center text-[#666] gap-3 text-sm">
          <a href="/" className="pl-8 font-bold text-[#666]">
            Home
          </a>
          <p className="mx-2 text-sm">&gt;</p>
          <a href="/shop" className="font-bold text-[#666]">Shop</a>
          <p className="mx-2">&gt;</p>
          <div className="border-l flex border-[#858585] items-center">
            <p className="pl-3">Asgaard sofa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
