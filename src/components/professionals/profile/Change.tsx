import {
  User,
  CalendarFold,
  Mail,
  Phone,
  LockKeyhole,
  GraduationCap,
  UserPen,
} from "lucide-react";

const ProfileChange = () => {
  return (
    <div className="flex flex-col gap-8 w-150">
      <div className="bg-white rounded-[20px] flex flex-col justify-center items-center gap-5 px-5 py-8">
        <h1 className="text-center text-[#2E7042] text-[32px] font-bold">
          Meu Perfil
        </h1>
      </div>
      <div className="bg-white rounded-[20px] flex flex-col justify-center items-center gap-5 px-5 py-8">
        <div className="relative flex items-center w-full">
          <User
            strokeWidth={0.5}
            color="white"
            className="fill-[#2E7042] absolute left-3 top-1/2 -translate-y-1/2"
          />
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Nome Completo"
            className="w-full pl-10 p-3 bg-transparent border-[2px] border-[#B3B3B3] rounded-[10px] text-[#535353] text-base placeholder:italic placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2E7042]"
          />
        </div>
        <div className="relative flex items-center w-full">
          <CalendarFold
            strokeWidth={2}
            color="#2E7042"
            className="absolute left-3 top-1/2 -translate-y-1/2"
          />
          <input
            type="text"
            name="birthDate"
            id="birthDate"
            placeholder="Data de Nacimento"
            className="w-full pl-10 p-3 bg-transparent border-[2px] border-[#B3B3B3] rounded-[10px] text-[#535353] text-base placeholder:italic placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2E7042]"
          />
        </div>
        <div className="relative flex items-center w-full">
          <Mail
            strokeWidth={0.5}
            color="white"
            className="fill-[#2E7042] absolute left-3 top-1/2 -translate-y-1/2"
          />
          <input
            type="text"
            name="Email"
            id="Email"
            placeholder="Email"
            className="w-full pl-10 p-3 bg-transparent border-[2px] border-[#B3B3B3] rounded-[10px] text-[#535353] text-base placeholder:italic placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2E7042]"
          />
        </div>
        <div className="relative flex items-center w-full">
          <Phone
            strokeWidth={0.5}
            color="white"
            className="fill-[#2E7042] absolute left-3 top-1/2 -translate-y-1/2"
          />
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Telefone"
            className="w-full pl-10 p-3 bg-transparent border-[2px] border-[#B3B3B3] rounded-[10px] text-[#535353] text-base placeholder:italic placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2E7042]"
          />
        </div>
        <div className="relative flex items-center w-full">
          <LockKeyhole
            strokeWidth={2}
            color="#2E7042"
            className="absolute left-3 top-1/2 -translate-y-1/2"
          />
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Senha"
            className="w-full pl-10 p-3 bg-transparent border-[2px] border-[#B3B3B3] rounded-[10px] text-[#535353] text-base placeholder:italic placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2E7042]"
          />
        </div>
        <div className="relative flex items-center w-full">
          <GraduationCap
            strokeWidth={2}
            color="#2E7042"
            className="absolute left-3 top-1/2 -translate-y-1/2"
          />
          <button className="w-full pl-10 p-3 bg-transparent border-[2px] border-[#B3B3B3] rounded-[10px] text-text-gray-400 flex">
            Formação Acadêmica
          </button>
        </div>
        <div className="relative flex items-center w-full">
          <UserPen
            strokeWidth={2}
            color="#2E7042"
            className="absolute left-3 top-1/2 -translate-y-1/2"
          />
          <button className="w-full pl-10 p-3 bg-transparent border-[2px] border-[#B3B3B3] rounded-[10px] text-text-gray-400 flex">
            Sobre mim
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileChange;
