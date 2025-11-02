import { UserPen } from "lucide-react";

const AdminConfig = () => {
  return (
    <div className="flex flex-col gap-8 w-150">
      <div className="bg-white rounded-[20px] flex flex-col justify-center items-center gap-5 px-5 py-8">
        <p className="flex border border-[#A1A1A1] w-50 px-3 py-2 rounded-[10px] text-[#2E7042] text-[18px] items-center justify-center">
          <UserPen color="#2E7042" strokeWidth={1} className="fill-[#2E7042]" />
          Perfil
        </p>
        <div className="bg-[#F9F9F9] grid grid-cols-2 gap-5 px-5 py-5 rounded-[20px]">
          <input
            type="text"
            placeholder="Nome"
            className="px-3 py-2 border border-[#A1A1A1] rounded-[10px] text-[18px] placeholder:italic"
          />
          <input
            type="text"
            placeholder="Email"
            className="px-3 py-2 border border-[#A1A1A1] rounded-[10px] text-[18px] placeholder:italic"
          />
          <input
            type="text"
            placeholder="Telefone"
            className="px-3 py-2 border border-[#A1A1A1] rounded-[10px] text-[18px] placeholder:italic"
          />
          <input
            type="text"
            placeholder="Senha"
            className="px-3 py-2 border border-[#A1A1A1] rounded-[10px] text-[18px] placeholder:italic"
          />
        </div>
        <p className="flex border border-[#A1A1A1] w-80 px-3 py-2 rounded-[10px] text-[#2E7042] text-[18px] items-center justify-center">
          <UserPen color="#2E7042" strokeWidth={1} className="fill-[#2E7042]" />
          Configurações Gerais
        </p>
        <div className="bg-[#F9F9F9] grid grid-cols-2 gap-5 px-5 py-5 rounded-[20px]">
          <button className="w-50 px-3 py-2 border border-[#A1A1A1] rounded-[10px] text-[18px]">
            PlaceHolder
          </button>
          <button className="w-50 px-3 py-2 border border-[#A1A1A1] rounded-[10px] text-[18px]">
            PlaceHolder
          </button>
          <button className="w-50 px-3 py-2 border border-[#A1A1A1] rounded-[10px] text-[18px]">
            PlaceHolder
          </button>
          <button className="w-50 px-3 py-2 border border-[#A1A1A1] rounded-[10px] text-[18px]">
            PlaceHolder
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminConfig;
