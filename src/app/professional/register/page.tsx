import Header from "@/components/layout/Header";
import ProfessionalRegisterCard from "@/components/professionals/ProfessionalRegisterCard";
import ProfessionalInformation from "@/components/register/ProfessionalInformation";

const ProfessionalRegister = () => {
  return (
    <main className="min-h-screen bg-[#f1f3f2] font-main text-black">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <Header />
        <div className="flex gap-25 py-5 justify-start">
          <ProfessionalRegisterCard />
          <ProfessionalInformation />
        </div>
      </div>
    </main>
  );
};

export default ProfessionalRegister;
