import Header from "@/components/layout/Header";
import ClientProfileWrapper from "@/components/client/ClientProfileWrapper";
import ClientAppointments from "@/components/client/ClientAppointments";
import {
  getProfessionalCards,
  getProfessionalModel,
} from "../../../../../lib/api";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const professionals = await getProfessionalCards();
  return professionals.map((professional) => ({
    id: professional.id.toString(),
  }));
}

const Profile = async ({ params }: PageProps) => {
  const { id } = await params;
  const professional = await getProfessionalModel(id);
  return (
    <main className="min-h-screen bg-[#f1f3f2] font-main">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <Header />
        <div className="flex">
          <ClientProfileWrapper clientId={id} />
          <ClientAppointments professional={professional} />
        </div>
      </div>
    </main>
  );
};

export default Profile;
