"use client";
import { useState } from "react";
import ProfilePicture from "./ProfilePicture";

interface Button {
  id: number;
  name: string;
  label: string;
}

interface ProfileButtonsProps {
  onButtonClick: (name: string) => void;
  professional: ProfessionalDetailCardProps;
  buttons: Button[];
}

interface ProfessionalDetailCardProps {
  id: number;
  name: string;
  profession: string;
  description: string;
  rating: number;
  date: string;
  address: string;
  image: string;
  onSchedule?: () => void;
}

const ProfessionalProfileButtons = ({
  onButtonClick,
  professional,
  buttons,
}: ProfileButtonsProps) => {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleClick = (id: number, name: string): void => {
    setActiveButton(id);
    onButtonClick(name);
  };

  return (
    <div className="text-[#2E7042] min-w-100 flex flex-col items-center font-main">
      <ProfilePicture image={professional.image} name={professional.name} />
      <div className="bg-white w-5/6 flex flex-col justify-between items-center px-5 py-10 rounded-[20px] gap-5">
        {buttons.map((button) => (
          <button
            key={button.id}
            onClick={() => handleClick(button.id, button.name)}
            className={`text-[18px] w-5/6 px-3 py-3 rounded-[5px] text-[#2E7042] hover:cursor-pointer hover: opacity-90 hover:bg-[#AFFEC5] ${
              activeButton === button.id ? "bg-[#AFFEC5]" : "bg-[#F1F3F2]"
            }`}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalProfileButtons;
