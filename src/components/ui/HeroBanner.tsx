import React from "react";
import Image from "next/image";
import Professioanals from "./professionals.png";

const HeroBanner = () => {
  return (
    <div className="bg-[#17968D] text-white rounded-[12.36px] px-10 py-10">
      <div className="mx-5 flex flex-col md:flex-row justify-between items-center">
        <div className="z-10 w-full md:w-2/3">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">
            Agende agora sua consulta!
          </h2>
          <p className="text-sm md:text-base mb-4">
            Mais de 50 especialidades estão prontos para te ajudar
          </p>

          <div className="bg-[#0E887F] p-2 flex flex-col md:flex-row gap-2 rounded w-160 container justify-center">
            <div className="w-full md:w-full">
              <select className="bg-white p-2 rounded text-[#2E7042] text-sm w-full">
                <option value="">Especialidade, doença ou nome</option>
                <option value="psicologia">Psicologia</option>
                <option value="nutrição">Nutrição</option>
                <option value="fisioterapia">Fisioterapia</option>
              </select>
            </div>

            <div className="w-full md:w-full">
              <select className="bg-white p-2 rounded text-[#2E7042] text-sm w-full">
                <option value="">Cidade ou região</option>
                <option value="sao-paulo">São Paulo</option>
                <option value="rio-janeiro">Rio de Janeiro</option>
                <option value="belo-horizonte">Belo Horizonte</option>
              </select>
            </div>

            <button className="bg-[#AFFEC5] px-4 py-1 rounded text-[#2E7042] hover:opacity-50 w-full md:w-auto">
              <span>Pesquisar</span>
            </button>
          </div>
        </div>

        <div className="flex w-1/3 m-auto pl-5">
          <Image
            src={Professioanals}
            alt="Varios profissionais da saude"
            width={200}
            height={200}
            quality={100}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
