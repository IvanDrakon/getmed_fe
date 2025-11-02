import Header from "@/components/layout/Header";
import {
  getProfessionalModel,
  getProfessionalCards,
} from "../../../../../lib/api";
import { ParsedUrlQuery } from "querystring";
import { NextPage } from "next";
import ProfessionalPublicProfile from "@/components/professionals/ProfessionalPublicProfile";
import ProfessionalPublicAbout from "@/components/professionals/ProfessionalPublicAbout";

interface Params extends ParsedUrlQuery {
  id: string;
}

interface ProfileProps {
  params: Promise<Params>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
  const professionals = await getProfessionalCards();
  return professionals.map((professional) => ({
    id: professional.id.toString(),
  }));
}

export async function generateMetadata({
  params,
}: ProfileProps): Promise<{ title: string }> {
  const { id } = await params;
  const professional = await getProfessionalModel(id);
  return {
    title: `Perfil de ${professional.name || "Profissional"}`,
  };
}

const AppointmentProfile: NextPage<ProfileProps> = async ({ params }) => {
  const { id } = await params;
  const professional = await getProfessionalModel(id);
  return (
    <main className="min-h-screen bg-[#f1f3f2] font-main text-black">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <Header />
        <div className="flex justify-between gap-10">
          <ProfessionalPublicProfile professional={professional} />
          <ProfessionalPublicAbout professional={professional} />
        </div>
      </div>
    </main>
  );
};

export default AppointmentProfile;
