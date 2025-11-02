import { Map } from "lucide-react";
import { getProfessionalCards } from "../../../lib/api";
import Image from "next/image";
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

const ProfessionalCard = async () => {
  const professionals = await getProfessionalCards();
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-5">
        <select
          name="order"
          id="order"
          title="order"
          className="bg-white rounded-[20px] py-2 px-2 text-[#2E7042] "
        >
          <option value="">Ordenar</option>
          <option value="distance">Distancia</option>
          <option value="name">Nome</option>
          <option value="rating">Avaliação</option>
        </select>
        <button className="flex gap-1 bg-white rounded-[20px] py-2 px-2 text-[#2E7042]">
          Minha região
          <Map />
        </button>
      </div>
      <>
        {professionals.map((professional: ProfessionalDetailCardProps) => (
          <div
            key={professional.id}
            className="bg-white p-5 flex gap-5 w-150 rounded-[20px]"
          >
            <div className="flex flex-col gap-2 justify-center items-center min-w-40 ">
              <Image
                src={`/${professional.image.replace("public/", "")}`}
                width={80}
                height={80}
                quality={100}
                alt="Foto do Doutor"
                className="rounded-[50%]"
              ></Image>
              <p className="text-[#2E7042] font-semibold">
                {professional.name}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <div className="text-[#535353]">
                  <h3>{professional.address}</h3>
                  <span className="text-[14px]">2km de voce</span>
                </div>
                <button className="text-[#2E7042] text-[14px] rounded-[20px] underline flex px-3 hover:bg-[#2E7042] hover:text-white justify-center items-center">
                  Mostrar no mapa
                </button>
              </div>
              <p className="text-[14px] text-[#535353]">
                {professional.description}
              </p>
              <div className="flex justify-between items-center">
                <ProfessionalRating rating={professional.rating} size={16} />
                <button className="bg-[#2E7042] text-white rounded-[23px] py-1 px-3 text-[14px] hover:opacity-60">
                  Agende Agora!
                </button>
              </div>
            </div>
          </div>
        ))}
      </>
    </div>
  );
};

export default ProfessionalCard;
