import Image from "next/image";

interface ProfessionalArea {
  id: number;
  area: string;
  svg: string;
}

const professionalAreas: ProfessionalArea[] = [
  {
    id: 1,
    area: "Psicólogo",
    svg: "prof1.png",
  },
  {
    id: 2,
    area: "Enfermeiro",
    svg: "prof2.png",
  },
  {
    id: 3,
    area: "Nutricionista",
    svg: "prof3.png",
  },
  {
    id: 4,
    area: "Fisioterapeuta",
    svg: "prof4.png",
  },
  {
    id: 5,
    area: "Esteticista",
    svg: "prof5.png",
  },
  {
    id: 6,
    area: "Técnico de enfermagem",
    svg: "prof6.png",
  },
];

export default async function Home() {
  return (
    <div className="bg-white rounded-[20px] px-1 pt-5 flex space-x-10">
      <>
        {professionalAreas.map((professional: ProfessionalArea) => (
          <div
            key={professional.id}
            className="w-25 mx-auto px-3 py-3 flex flex-col items-center text-center"
          >
            <Image
              src={`/${professional.svg}`}
              alt="Image professional area"
              width={53}
              height={53}
            ></Image>
            <p className="mt-2 max-w-40 font-kumbh-sans text-black">
              {professional.area}
            </p>
          </div>
        ))}
      </>
    </div>
  );
}
