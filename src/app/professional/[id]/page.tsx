import Header from "@/components/layout/Header";
import ProfessionalPrivateProfile from "@/components/professionals/ProfessionalPrivateProfile";
import {
  getClients,
  getProfessionalModel,
  getProfessionalCards,
} from "../../../../lib/api";
import { ParsedUrlQuery } from "querystring";
import { NextPage } from "next";

interface ClientDetailCardProps {
  id: number;
  name: string;
  email: string;
  password: string;
  image: string;
}

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

interface Params extends ParsedUrlQuery {
  id: string;
}

interface ProfileProps {
  params: Promise<Params>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
  try {
    const professionals = await getProfessionalCards();
    if (!professionals || !Array.isArray(professionals)) {
      console.error(
        "gerProfessionalCards retornou dados inválidos:",
        professionals
      );
      return [];
    }
    return professionals.map((professionals) => ({
      id: professionals.id.toString(),
    }));
  } catch (error) {
    console.error("Erro em generateStaticParams:", error);
    return [];
  }
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

const ProfessionalRegister: NextPage<ProfileProps> = async ({ params }) => {
  const { id } = await params;
  const clients: ClientDetailCardProps[] = await getClients();
  const professional: ProfessionalDetailCardProps = await getProfessionalModel(
    id
  );
  return (
    <main className="min-h-screen bg-[#f1f3f2] font-main text-black">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <Header />
        <ProfessionalPrivateProfile
          clients={clients}
          professional={professional}
        />
      </div>
    </main>
  );
};

export default ProfessionalRegister;
