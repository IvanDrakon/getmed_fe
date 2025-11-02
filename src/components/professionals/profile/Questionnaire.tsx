import SearchQuestionnaire from "@/components/search/SearchQuestionnaire";

interface ClientDetailCardProps {
  id: number;
  name: string;
  email: string;
  password: string;
  image: string;
}

interface Props {
  clients: ClientDetailCardProps[];
}

const ProfileQuestionnaire = ({ clients }: Props) => {
  return (
    <div className="flex flex-col gap-8 w-150">
      <div className="bg-white rounded-[20px] flex flex-col justify-center items-center gap-5 px-5 py-8">
        <h1 className="text-[#2E7042] font-bold text-[26px]">
          Lista de questionário
        </h1>
        <div className="flex justify-between items-start">
          <SearchQuestionnaire />
        </div>
        <div className="flex flex-col gap-3">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex justify-between items-center gap-10"
            >
              <button className="border border-[#B3B3B3] px-3 py-2 rounded-[8px] text-[#2E7042] w-50 max-w-50">
                {client.name}
              </button>
              <button className="border border-[#B3B3B3] px-5 py-2 rounded-[8px] text-[#2E7042]">
                Ver Respostas do Questionário
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-[20px] flex flex-col justify-center items-center gap-5 px-5 py-8">
        <button className="border border-[#B3B3B3] px-5 py-2 rounded-[8px] text-[#2E7042]">
          Ver meu Questionário
        </button>
        <button className="border border-[#B3B3B3] px-5 py-2 rounded-[8px] bg-[#2E7042] text-white">
          Importar Questionário
        </button>
      </div>
    </div>
  );
};

export default ProfileQuestionnaire;
