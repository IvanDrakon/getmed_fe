import Logo from "../../../public/Logo - GETMED (Fundo Claro - Verde com Azul).png";
import Image from "next/image";

const ProfessionalQuestionnaire = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <Image
        src={Logo}
        alt="Logo Getmed"
        width={150}
        height={150}
        quality={100}
      ></Image>
      <div className="flex flex-col w-5/6 gap-3">
        <h3 className="text-[#2E7042] font-bold text-[30px] mb-5 flex justify-center items-center">
          Responda as perguntas
        </h3>
        <div className="flex flex-col gap-3 items-start">
          <p className="text-[#535353] text-[18px]">
            É a sua primeira vez em consulta com um psicólogo?
          </p>
          <div className="flex gap-3">
            <button className="px-3 py-1 bg-white rounded-[20px] hover:bg-[#2E7042] hover:text-white hover:cursor-pointer">
              Sim
            </button>
            <button className="px-3 py-1 bg-white rounded-[20px] hover:bg-[#2E7042] hover:text-white hover:cursor-pointer">
              Não
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-start">
          <p className="text-[#535353] text-[18px]">
            O que te motivou a buscar atendimento psicológico?
          </p>
          <div className="flex gap-3 w-full">
            <input
              type="text"
              placeholder="Resposta aberta"
              className="bg-white w-5/6 rounded-[20px] py-1 px-3 text-black "
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 items-start">
          <p className="text-[#535353] text-[18px]">
            Você já teve acompanhamento psicológico ou psiquiátrico antes?
          </p>
          <div className="flex gap-3 w-full">
            <button className="px-3 py-1 bg-white rounded-[20px] hover:bg-[#2E7042] hover:text-white hover:cursor-pointer">
              Sim
            </button>
            <button className="px-3 py-1 bg-white rounded-[20px] hover:bg-[#2E7042] hover:text-white hover:cursor-pointer">
              Não
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-start">
          <p className="text-[#535353] text-[18px]">
            Como está seu nível de estresse e ansiedade no momento?
          </p>
          <div className="flex gap-3 w-full">
            <button className="px-3 py-1 bg-white rounded-[20px] hover:bg-[#2E7042] hover:text-white hover:cursor-pointer">
              Baixo
            </button>
            <button className="px-3 py-1 bg-white rounded-[20px] hover:bg-[#2E7042] hover:text-white hover:cursor-pointer">
              Moderado
            </button>
            <button className="px-3 py-1 bg-white rounded-[20px] hover:bg-[#2E7042] hover:text-white hover:cursor-pointer">
              Alto
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-start">
          <p className="text-[#535353] text-[18px]">
            Existe algum diagnóstico médico ou psiquiátrico prévio?
          </p>
          <div className="flex gap-3 w-full">
            <button className="px-3 py-1 bg-white rounded-[20px] hover:bg-[#2E7042] hover:text-white hover:cursor-pointer">
              Não
            </button>
            <p className="flex justify-center items-center text-[#535353]">
              Se sim, Qual?
            </p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Digite aqui"
              className="text-black bg-white rounded-[20px] px-3 py-1"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 items-start">
          <p className="text-[#535353] text-[18px]">
            Quais são suas expectativas em relação à terapia?
          </p>
          <div className="flex gap-3 w-full">
            <input
              type="text"
              name=""
              id=""
              placeholder="Resposta aberta"
              className="text-black bg-white rounded-[20px] px-3 py-1 w-5/6"
            />
          </div>
        </div>
      </div>
      <button className="bg-[#2E7042] text-white flex justify-center items-center w-5/6 rounded-[20px] py-2 hover:opacity-90 hover:cursor-pointer">
        Enviar
      </button>
    </div>
  );
};

export default ProfessionalQuestionnaire;
