import {
  User,
  CalendarFold,
  Mail,
  Phone,
  LockKeyhole,
  Lock,
} from "lucide-react";

const ProfessionalInformation = () => {
  return (
    <div className="flex flex-col justify-end gap-8 items-center">
      <div className="bg-white p-5 rounded-[20px] flex flex-col justify-center items-center text-[#2E7042] w-100">
        <h1 className="text-[30px] font-bold">Falta Pouco!</h1>
        <p className="text-[18px] font-semibold text-center w-4/6">
          Preencha os espaços para finalizar o seu perfil.
        </p>
      </div>
      <div className="bg-white px-5 py-10 rounded-[20px] flex flex-col justify-center items-center w-100 gap-5">
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
          <Lock
            strokeWidth={2}
            color="#2E7042"
            className="absolute left-3 top-1/2 -translate-y-1/2"
          />
          <input
            type="text"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirme sua senha"
            className="w-full pl-10 p-3 bg-transparent border-[2px] border-[#B3B3B3] rounded-[10px] text-[#535353] text-base placeholder:italic placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2E7042]"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfessionalInformation;
