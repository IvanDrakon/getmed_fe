import { StickyNote } from "lucide-react";
import Image from "next/image";

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
  professionals: ProfessionalDetailCardProps[];
}

const AdminCandidates = ({ professionals }: Props) => {
  return (
    <div className="flex flex-col gap-8 w-150">
      <div className="bg-white rounded-[20px] flex flex-col justify-center items-center gap-5 px-5 py-8">
        <p className="py-2 px-5 text-center border-[2px] border-[#A1A1A1] w-50 rounded-[10px] flex gap-2 items-center justify-center text-[#2E7042] text-[18px]">
          <StickyNote strokeWidth={1.5} color="#2E7042" />
          Relatórios
        </p>
        <div className="flex flex-col gap-8">
          {professionals.map((professional) => (
            <div
              key={professional.id}
              className="flex gap-5 bg-[#F1F3F2] justify-center items-center rounded-[10px] py-5 px-8"
            >
              <div className="flex flex-col gap-3 items-center">
                <Image
                  src={`/${professional.image.replace("public/", "")}`}
                  alt="Imagem do Cliente"
                  width={100}
                  height={100}
                  quality={100}
                  className="rounded-[50%] "
                ></Image>
                <h2 className="font-bold text-[18px] text-[#2E7042] text-center">
                  {professional.name}
                </h2>
              </div>
              <div className="ml-5 w-55">
                <button className="border-[2px] border-[#B3B3B3] px-3 py-1 rounded-[5px] m-1">
                  Especialização
                </button>
                <button className="border-[2px] border-[#B3B3B3] px-3 py-1 rounded-[5px] m-1">
                  Diplomas
                </button>
                <button className="border-[2px] border-[#B3B3B3] px-3 py-1 rounded-[5px] m-1">
                  Carreira
                </button>
                <button className="border-[2px] border-[#B3B3B3] px-3 py-1 rounded-[5px] m-1">
                  Experiencias
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminCandidates;
