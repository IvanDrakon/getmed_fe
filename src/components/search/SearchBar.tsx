import React from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative  mx-auto my-6">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Procurar por profissionais"
        className="bg-white w-full pl-10 pr-4 py-3 rounded-[25px] focus:outline-none text-[#2E7042] text-bold focus:ring-2 focus:ring-[#2E7042] focus:border-[#2E7042] focus:text-black"
      />
    </div>
  );
};

export default SearchBar;
