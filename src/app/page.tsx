import Header from "@/components/layout/Header";
import ProfessionalCategories from "@/components/professionals/ProfessionalCategories";
import ProfessionalDetailCard from "@/components/professionals/ProfessionalDetailCard";
import SearchBar from "@/components/search/SearchBar";
import HeroBanner from "@/components/ui/HeroBanner";
import { getProfessionalCards } from "../../lib/api";

export default async function Home() {
  const professionalModels = await getProfessionalCards();
  return (
    <main className="min-h-screen bg-[#f1f3f2] font-main">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <Header />

        <ProfessionalCategories />

        <SearchBar />

        <HeroBanner />

        <div className="mt-8">
          <ProfessionalDetailCard professionalModels={professionalModels} />
        </div>
      </div>
    </main>
  );
}
