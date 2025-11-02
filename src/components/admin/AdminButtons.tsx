"use client";
import { useState } from "react";
import ProfessionalProfileButtons from "../layout/ProfessionalProfileButtons";
import AdminCandidates from "./Candidates";
import AdminConfig from "./Config";
import AdminReport from "./Report";
import AdminCommission from "./Commission";
import AdminMonitoring from "./Monitoring";

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

interface AdminProps {
  id: number;
  name: string;
  profession: string;
  description: string;
  rating: number;
  date: string;
  address: string;
  image: string;
}

interface Props {
  professionals: ProfessionalDetailCardProps[];
  admin: AdminProps;
}

interface Button {
  id: number;
  name: string;
  label: string;
}

const AdminButtons = ({ professionals, admin }: Props) => {
  const [selectedButton, setSelectedButton] = useState<string>("");
  const handleButtonClick = (name: string) => {
    setSelectedButton(name);
    console.log(`Botão clicado: ${name}`);
  };

  const buttons: Button[] = [
    { id: 1, name: "candidates", label: `Candidatos` },
    { id: 2, name: "report", label: "Relatórios" },
    { id: 3, name: "monitoring", label: "Monitoramento" },
    { id: 4, name: "commissions", label: "Comissões" },
    { id: 5, name: "config", label: "Configurações" },
  ];

  return (
    <div className="flex gap-25 py-5 justify-start">
      <ProfessionalProfileButtons
        onButtonClick={handleButtonClick}
        professional={admin}
        buttons={buttons}
      />
      {selectedButton === "candidates" ? (
        <AdminCandidates professionals={professionals} />
      ) : selectedButton === "config" ? (
        <AdminConfig />
      ) : selectedButton == "report" ? (
        <AdminReport />
      ) : selectedButton == "commissions" ? (
        <AdminCommission />
      ) : selectedButton == "monitoring" ? (
        <AdminMonitoring />
      ) : null}
    </div>
  );
};

export default AdminButtons;
