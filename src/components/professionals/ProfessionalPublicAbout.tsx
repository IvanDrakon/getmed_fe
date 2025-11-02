import MarkdownRenderer from "../layout/MarkdownRenderer";
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
interface ProfessionalProfileProp {
  professional: ProfessionalDetailCardProps;
}

const markdownText = `
- **Graduação em Psicologia** – Universidade de São Paulo (USP, 2010) 
- **Especialização em Psicoterapia** Cognitivo-Comportamental – Instituto Albert Ellis (2013)
- **Pós-graduação em Neuropsicologia** – Pontifícia Universidade Católica de São Paulo (PUC-SP, 2015)
- **Mestrado em Psicologia Clínica** – Universidade de São Paulo (USP, 2018)
`;

const ProfessionalPublicAbout = ({ professional }: ProfessionalProfileProp) => {
  return (
    <div className="w-full py-10 flex flex-col gap-8">
      <div className="bg-white py-5 px-8 rounded-[20px]">
        <h1 className="font-bold text-[#2E7042] text-[25px]">
          {`Dr.${professional.name} - ${professional.profession}`}
        </h1>
        <p className="max-w-5/6 mt-5 text-[16px]">
          Psicólogo experiente, comprometido com a promoção da saúde mental e do
          bem-estar emocional. Com uma abordagem humanizada e baseada em
          evidências, atua no tratamento de ansiedade, depressão e transtornos
          emocionais, sempre buscando proporcionar um ambiente seguro e
          acolhedor para seus pacientes.
        </p>
      </div>
      <div className="bg-white py-5 px-8 rounded-[20px]">
        <h3 className="font-bold text-[#2E7042] text-[25px]">
          Formações Academicas
        </h3>
        <div className="max-w-5/6 mt-5 text-[16px]">
          <MarkdownRenderer content={markdownText} />
        </div>
      </div>
      <div className="flex gap-3 justify-between">
        <div className="bg-white w-1/2 px-8 py-5 rounded-[20px]">
          <div className="flex gap-5 items-center justify-start">
            <Image
              src={"/prof1.png"}
              alt="Imagem de perfil de cliente"
              width={60}
              height={60}
              quality={100}
            ></Image>
            <p className="text-[#2E7042] text-[25px] font-bold">
              Ricardo Oliveira
            </p>
          </div>
          <p className="max-w-5/6 mt-5 text-[16px]">
            {`"Dr. José Inácio me ajudou a encontrar equilíbrio emocional com sua escuta atenta e acolhedora."`}
          </p>
          <div className="flex flex-col justify-end mt-5">
            <ProfessionalRating rating={professional.rating} size={16} />
          </div>
        </div>
        <div className="bg-white w-1/2 px-8 py-5 rounded-[20px] ">
          <div className="flex gap-5 items-center justify-start">
            <Image
              src={"/prof2.png"}
              alt="Imagem de perfil de cliente"
              width={60}
              height={60}
              quality={100}
            ></Image>
            <p className="text-[#2E7042] text-[25px] font-bold">Ana Beatriz</p>
          </div>
          <p className="max-w-5/6 mt-5 text-[16px]">
            {`"Ótimo profissional! Seu atendimento humanizado e técnicas eficazes fizeram grande diferença na minha vida."`}
          </p>
          <div className="flex flex-col justify-end mt-5">
            <ProfessionalRating rating={professional.rating} size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalPublicAbout;
