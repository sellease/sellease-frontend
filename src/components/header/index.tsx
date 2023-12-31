import React from "react";

import { SellEase } from "assets/icons";
import { useNavigate } from "react-router-dom";

export const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/seller/dashboard");
  };

  return (
    <div className="flex justify-between items-center flex-row  top-0 bg-white h-16 p-3 shadow-md fixed w-full">
      <SellEase height={30} width={150} />
      <div className="flex flex-row text-toryBlue items-center justify-center text-[15px] font-workSans">
        <div className="border border-blue-400 hover:bg-[#01859A] hover:text-white cursor-pointer rounded-lg py-[5px] px-3">
          Register as seller
        </div>
        <div
          onClick={handleLogin}
          className="border text-center hover:bg-[#01859A] hover:text-white cursor-pointer border-blue-400 rounded-lg py-[5px] px-3 ml-5 mr-3"
        >
          Login as Seller
        </div>
      </div>
    </div>
  );
};
