"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface ProfessionalDetailCardProps {
  id: number;
  name: string;
  profession: string;
  description: string;
  rating: number;
  image: string;
  onSchedule?: () => void;
}

interface ProfessionalCarouselProps {
  professionalModels: ProfessionalDetailCardProps[];
}

const ProfessionalDetailCard: React.FC<ProfessionalCarouselProps> = ({
  professionalModels,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (professionalModels.length > 1 && !isTransitioning) {
      const interval = setInterval(() => {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) =>
          prevIndex === professionalModels.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [professionalModels.length, isTransitioning]);

  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
      }, 500); // Duração da transição (500ms)
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === professionalModels.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? professionalModels.length - 1 : prevIndex - 1
      );
    }
  };

  if (!professionalModels || professionalModels.length === 0) {
    return <div>Nenhum profissional encontrado</div>;
  }
  return (
    <div className="w-full mx-auto relative">
      <div
        className={`bg-white p-5 rounded-[19.95px] shadow-sm flex gap-4 w-full px-15 py-5 my-5 relative transition-opacity duration-200 ${
          isTransitioning ? "opacity-50" : "opacity-100"
        }`}
      >
        <div className="w-2/3 pt-10">
          <h3 className="text-[#2E7042] text-[23.94px] font-bold">
            {professionalModels[currentIndex].profession}
          </h3>
          <p className="text-[#535353] text-[13.96px] py-2 max-w-100">
            {professionalModels[currentIndex].description}
          </p>
          <button
            onClick={professionalModels[currentIndex].onSchedule}
            className="bg-[#AFFEC5] rounded-[20px] px-7 py-2 my-2 text-[13.89px] text-[#2E7042]"
          >
            <span>Agendar</span>
          </button>
        </div>
        <div className="mt-10 w-50 absolute left-150 top-15 z-10">
          <div className="bg-[#AFFEC5] rounded-[10px] border-l-10 border-l-[#2E7042] py-5 px-3">
            <h4 className="text-[16px] text-[#2E7042] font-bold">
              {`Dr.${professionalModels[currentIndex].name}`}
            </h4>
            <span className="flex gap-1">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={`${
                      i < professionalModels[currentIndex].rating
                        ? "text-[#2E7042] fill-[#2E7042]"
                        : "text-[#A1A1A1] fill-[#A1A1A1]"
                    }`}
                  />
                ))}
            </span>
          </div>
        </div>
        <div className="text-black">
          <Image
            className="rounded-[20px]"
            src={`/${professionalModels[currentIndex].image.replace(
              "public/",
              ""
            )}`}
            alt="Imagem do professional da saúde"
            width={250}
            height={250}
            quality={100}
          ></Image>
        </div>
        {professionalModels.length > 1 && (
          <>
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#2E7042] text-white p-2  rounded-full hover:bg-[#AFFEC5] hover:text-[#2E7042] transition-colors"
              onClick={handlePrev}
              aria-label="Profissional anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#2E7042] text-white p-2 rounded-full hover:bg-[#AFFEC5] hover:text-[#2E7042] transition-colors"
              onClick={handleNext}
              aria-label="Próximo profissional"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
        {professionalModels.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {professionalModels.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-[#2E7042]" : "bg-[#A1A1A1]"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir para o profissional ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfessionalDetailCard;
