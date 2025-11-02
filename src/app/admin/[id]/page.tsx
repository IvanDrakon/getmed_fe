import Header from "@/components/layout/Header";
import AdminButtons from "@/components/admin/AdminButtons";
import { getProfessionalCards } from "../../../../lib/api";

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

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const professionals = await getProfessionalCards();
  return professionals.map((professional) => ({
    id: professional.id.toString(), // Converte id (number) para string
  }));
}

const Admin = async ({ params }: PageProps) => {
  const { id } = await params;
  const professionals: ProfessionalDetailCardProps[] =
    await getProfessionalCards();
  // Buscar admin com base no id, ou usar um valor padrão
  const admin: ProfessionalDetailCardProps = professionals.find(
    (p) => p.id.toString() === id
  ) || {
    id: 1,
    name: "Carol Getmed",
    profession: "admin",
    description: "Admin",
    rating: 5,
    date: "1",
    address: "1",
    image: "public/placeholder-doctor.png",
  };
  return (
    <main className="min-h-screen bg-[#f1f3f2] font-main text-black">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <Header />
        <AdminButtons professionals={professionals} admin={admin} />
      </div>
    </main>
  );
};

export default Admin;
