"use client";

import Modal from "../modals/Modal";
import { useState } from "react";
import ClientAppointmentsDates from "../client/ClientAppointmentsDates";
import ProfilePicture from "../layout/ProfilePicture";
import ProfessionalRating from "./ProfessionalRating";

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
interface ProfessionalProfileProp {
  professional: ProfessionalDetailCardProps;
}

const ProfessionalPublicProfile = ({
  professional,
}: ProfessionalProfileProp) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (): void => setIsModalOpen(true);
  const closeModal = (): void => setIsModalOpen(false);

  return (
    <div className="text-[#2E7042] min-w-100 flex flex-col items-center font-main">
      <ProfilePicture image={professional.image} name={professional.name} />
      <div className="flex flex-col gap-5">
        <button
          className="text-white bg-[#2E7042] py-2 px-5 rounded-[20px] text-[18px] hover:opacity-90 hover:cursor-pointer"
          onClick={openModal}
        >
          Solicitar Atendimento
        </button>
        <ul className="bg-white w-full p-5 text-[16px] text-[#535353] rounded-[20px]">
          <li className="mb-3">
            <p>Preço pro Consulta:</p>
            <span className="text-[#B3B3B3]">R$ 220,00</span>
          </li>
          <li className="mb-3">
            <p>Numero de Atendimentos:</p>
            <span className="text-[#B3B3B3]">130</span>
          </li>
          <li className="mb-3">
            <p>Região de Atendimento:</p>
            <span className="text-[#B3B3B3]">{professional.address}</span>
          </li>
          <li className="mb-3">
            <ProfessionalRating rating={professional.rating} size={14} />
          </li>
        </ul>
        <div className="bg-white w-full p-5 text-[16px] text-[#535353] rounded-[20px] flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <input
              type="radio"
              id="inPerson"
              value="Presencial"
              placeholder="Presencial"
              name="whereToGo"
              defaultChecked
              className="appearance-none h-4 w-4 border-1 border-[#2E7042] rounded-[6px] checked:bg-[#2E7042] cursor-pointer"
            />
            <label htmlFor="inPerson">Presencial</label>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="radio"
              id="home"
              value="Domicilio"
              placeholder="Domicilio"
              name="whereToGo"
              className="appearance-none h-4 w-4 border-1 border-[#2E7042] rounded-[6px] checked:bg-[#2E7042] cursor-pointer"
            />
            <label htmlFor="home">Domicilio</label>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="radio"
              id="online"
              value="Online"
              placeholder="Online"
              name="whereToGo"
              className="appearance-none h-4 w-4 border-1 border-[#2E7042] rounded-[6px] checked:bg-[#2E7042] cursor-pointer"
            />
            <label htmlFor="online">Online</label>
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ClientAppointmentsDates />
        </Modal>
      </div>
    </div>
  );
};

export default ProfessionalPublicProfile;
