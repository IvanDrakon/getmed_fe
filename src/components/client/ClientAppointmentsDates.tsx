"use client";
import { useState } from "react";
import Calendar from "../calendar/Calendar";
import ProfessionalQuestionnaire from "../professionals/ProfessionalQuestionnaire";
import ClientAppointmentCode from "./ClientAppointmentCode";
import Rating from "../layout/Rating";

const ClientAppointmentsDates = () => {
  const [dateChoice, setDateChoice] = useState<string>("");
  const handleChoice = (choice: string) => {
    setDateChoice(choice);
  };

  const selectModal = "calendar";

  return (
    <div className="flex flex-col justify-center items-center max-w-350 font-main">
      {selectModal === "calendar" ? (
        <>
          <h1 className="text-[#2E7042] text-[26px] font-bold">
            Agendar Atendimento
          </h1>
          <div className="mt-4 flex flex-col justify-center items-center max-w-1/2">
            <Calendar sendChoice={dateChoice} changeChoice={handleChoice} />
          </div>
        </>
      ) : selectModal === "questionnaire" ? (
        <ProfessionalQuestionnaire />
      ) : selectModal === "code" ? (
        <ClientAppointmentCode />
      ) : selectModal === "rating" ? (
        <Rating />
      ) : null}
    </div>
  );
};

export default ClientAppointmentsDates;
