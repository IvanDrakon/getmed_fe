"use client";

import { CalendarCheck, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Modal from "../modals/Modal";

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

interface ClientAppointmentsProps {
  professional: ProfessionalDetailCardProps;
}

const ClientAppointments = ({ professional }: ClientAppointmentsProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (): void => setIsModalOpen(true);
  const closeModal = (): void => setIsModalOpen(false);

  return (
    <div className=" flex flex-col  items-center font-main text-black w-full ml-5 p-25 justify-center">
      <div className="bg-white w-full flex flex-col items-center justify-center p-10 rounded-[10px] gap-5">
        <button className="border rounded-[10px] py-3 min-w-65 flex gap-2 text-[#2E7042] text-[18px] items-center justify-center">
          <CalendarCheck />
          <p className="text-[#535353]">Meus Atendimentos</p>
        </button>
        <div className="flex items-start mx-3 justify-center">
          <Image
            src={`public/placeholder-doctor.png`}
            alt="Imagem do Doutor"
            width={80}
            height={80}
            quality={100}
            className="m-5 rounded-[50%]"
          ></Image>
          <div className=" flex flex-col justify-center py-10">
            <h3 className="text-[24px] text-[#2E7042] font-semibold">{`Dr.${professional.name}`}</h3>
            <span className="text-[18px] text-[#535353] ">
              {professional.profession}
            </span>
            <p className="flex gap-2 text-[18px] mt-2">
              <Calendar />
              {professional.date}
            </p>
            <p className="flex gap-2 text-[18px] mt-2">
              <MapPin /> {professional.address}
            </p>
          </div>
        </div>
        <button className="min-w-65 border-[2px] border-[#2E7042] rounded-[10px] py-3 flex gap-2 text-[#2E7042] text-[18px] font-bold items-center justify-center">
          Reagendar
        </button>

        <button
          className="min-w-65 border rounded-[10px] py-3 flex gap-2 text-[#2E7042] text-[18px] items-center justify-center"
          onClick={openModal}
        >
          Cancelar
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h1 className="text-[30px] text-[#2E7042] font-bold p-5 flex justify-center items-center">
            Cancelamento
          </h1>

          <div className="flex flex-col gap-3 items-center justify-center">
            <button className="border border-[#2E7042] rounded-[20px] py-2 min-w-80 text-[18px] underline hover:bg-[#2E7042] hover:text-white hover:cursor-pointer">
              Regras de cancelamento
            </button>
            <p className="flex items-center justify-center border border-[#2E7042] rounded-[20px] py-2 min-w-80 text-[18px] underline">
              Motivo do Cancelamento
            </p>
            <textarea
              name="cancelation-reason"
              id="cancelation-reason"
              placeholder="Descreva o motivo do cancelamento"
              className="peer min-h-30 bg-white min-w-75 px-5 py-2 rounded-[10px] text-[14px]"
            ></textarea>
            <div className="flex items-center justify-between gap-25">
              <button
                className="border border-[#2E7042] min-w-25 py-2 rounded-[10px] text-[18px] text-[#2E7042] hover:bg-[#2E7042] hover:text-white hover:cursor-pointer"
                onClick={closeModal}
              >
                Cancelar
              </button>
              <button className="border border-[#2E7042] min-w-25 py-2 rounded-[10px] text-[18px] text-[#2E7042] hover:bg-red-800 hover:text-white hover:cursor-pointer hover:border-black">
                Confirmar
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ClientAppointments;
