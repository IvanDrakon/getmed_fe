"use client";

import { useState } from "react";
import Calendar from "@/components/calendar/Calendar";

const ProfileSchedule = () => {
  const [selectedChoice, setSelectedChoice] = useState<string>("");

  const numbers = { scheduled: 14, returns: 1, ended: 5, canceled: 0 };
  const handleChangeChoice = (choice: string) => {
    setSelectedChoice(choice);
    console.log("Data/hora selecionada:", choice);
  };

  return (
    <div className="flex flex-col gap-8 w-150">
      <div className="flex gap-15">
        <div className="flex flex-col gap-5">
          <ul className="mx-5 flex flex-col justify-center items-start gap-3 text-[#2E7042] [&_p]:font-bold [&_li]:flex [&_li]:gap-2 [&_li]:justify-center [&_li]:items-center [&_span]:bg-white [&_span]:px-3 [&_span]:py-2 [&_span]:rounded-[8px] [&_span]:w-10 [&_span]:text-center">
            <li className="flex gap-2 justify-center items-center">
              <span>{numbers.scheduled}</span>
              <p>Agendados</p>
            </li>
            <li>
              <span>{numbers.returns}</span>
              <p>Retornos</p>
            </li>
            <li>
              <span>{numbers.ended}</span>
              <p>Finalizados</p>
            </li>
            <li>
              <span>{numbers.canceled}</span>
              <p>Cancelados</p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col mx-5 gap-5">
          <button className="px-3 py-2 border border-[#B3B3B3] rounded-[10px]">
            Região de Atendimento
          </button>
          <button className="px-3 py-2 border border-[#B3B3B3] rounded-[10px]">
            Lista de Agendamentos
          </button>
          <button className="px-3 py-2 border border-[#B3B3B3] rounded-[10px]">
            Preço por Consulta
          </button>
        </div>
      </div>
      <div className="bg-white w-full px-5 py-8 rounded-[18px]">
        <Calendar
          sendChoice={selectedChoice}
          changeChoice={handleChangeChoice}
        />
      </div>
    </div>
  );
};

export default ProfileSchedule;
