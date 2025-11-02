"use client";
import Image from "next/image";
import MapsPlaceholder from "../../../public/mapsPlaceholder.png";

const Maps = () => {
  return (
    <div className="flex flex-col rounded-[20px] text-black items-center justify-end">
      <Image
        src={MapsPlaceholder}
        alt="Localização no Google Maps"
        width={500}
        height={80}
        quality={100}
        className="max-w-80 min-h-70 rounded-[20px] border border-[#2E7042]"
      ></Image>
      <button className="absolute border rounded-[20px] border-[#2E7042] bg-white text-[#2E7042] py-2 flex justify-center items-center min-w-75  hover:bg-[#2E7042] hover:text-white hover:cursor-pointer hover:opacity-50 my-2">
        View no maps
      </button>
    </div>
  );
};

export default Maps;
