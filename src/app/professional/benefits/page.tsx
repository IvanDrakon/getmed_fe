import Header from "@/components/layout/Header";
import ContactCard from "@/components/register/ContactCard";
import InformationCard from "@/components/register/InformationCard";

const ProfessionalBenefits = () => {
  return (
    <main className="min-h-screen bg-[#f1f3f2] font-main text-black">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <Header />
        <div className="flex flex-col justify-center items-start text-[#2E7042] text-[30px] font-bold pb-5">
          <h1>É profissional na área?</h1>
          <h2>Faça parte de nossa equipe!</h2>
        </div>
        <div className="flex gap-5 py-5 justify-between">
          <ContactCard />
          <InformationCard />
        </div>
      </div>
    </main>
  );
};

export default ProfessionalBenefits;
