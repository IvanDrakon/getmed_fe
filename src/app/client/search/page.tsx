import Header from "@/components/layout/Header";
import SearchBar from "@/components/search/SearchBar";
import Maps from "@/components/maps/Maps";
import Filter from "@/components/search/Filter";
import ProfessionalCard from "@/components/professionals/ProfessionalCard";

const Search = () => {
  return (
    <main className="min-h-screen bg-[#f1f3f2] font-main text-black">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <Header />
        <SearchBar />
        <div className="flex items-start gap-20">
          <div className="flex flex-col items-start gap-8">
            <Maps />
            <Filter />
          </div>
          <ProfessionalCard />
        </div>
      </div>
    </main>
  );
};

export default Search;
