"use client";
import { useState } from "react";
import ProfessionalProfileButtons from "../layout/ProfessionalProfileButtons";
import ProfileSchedule from "./profile/Schedule";
import ProfilePayments from "./profile/Payments";
import ProfileQuestionnaire from "./profile/Questionnaire";
import ProfileChange from "./profile/Change";

interface ClientDetailCardProps {
  id: number;
  name: string;
  email: string;
  password: string;
  image: string;
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

interface Props {
  clients: ClientDetailCardProps[];
  professional: ProfessionalDetailCardProps;
}

interface Button {
  id: number;
  name: string;
  label: string;
}

const ProfessionalPrivateProfile = ({ clients, professional }: Props) => {
  const [selectedButton, setSelectedButton] = useState<string>("");
  const handleButtonClick = (name: string) => {
    setSelectedButton(name);
    console.log(`Botão clicado: ${name}`);
  };

  const buttons: Button[] = [
    { id: 1, name: "schedule", label: "Agenda" },
    { id: 2, name: "questionnaire", label: "Questionario" },
    { id: 3, name: "payments", label: "Pagamentos" },
    { id: 4, name: "config", label: "Configurações" },
    { id: 5, name: "profile", label: "Perfil" },
  ];
  return (
    <div className="flex gap-25 py-5 justify-start">
      <ProfessionalProfileButtons
        onButtonClick={handleButtonClick}
        professional={professional}
        buttons={buttons}
      />
      {selectedButton === "schedule" ? (
        <ProfileSchedule />
      ) : selectedButton === "payments" ? (
        <ProfilePayments />
      ) : selectedButton === "questionnaire" ? (
        <ProfileQuestionnaire clients={clients} />
      ) : selectedButton === "profile" ? (
        <ProfileChange />
      ) : null}
    </div>
  );
};

export default ProfessionalPrivateProfile;
