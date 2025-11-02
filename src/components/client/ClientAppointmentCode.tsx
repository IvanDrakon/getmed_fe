const ClientAppointmentCode = () => {
  const appointmentCode = "GFFLLHT";
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h1 className="font-bold text-[26px]">Agentdamento Feito!</h1>
      <p className="w-3/6 text-[14px] text-[#535353] text-center">
        Nosso Profissional vai entrar em contato com você em até 24h
      </p>
      <p className="w-3/6 text-[18px] text-black text-center">
        <code className="border border-[#535353 ] px-10 py-1 rounded-[10px]">
          {appointmentCode}
        </code>
      </p>
      <p className="w-3/6 text-[16px] text-[#535353] text-center">
        Esse é seu código de atendimento
      </p>
      <button className="bg-[#2E7042] text-white flex justify-center items-center w-3/6 rounded-[20px] py-2 hover:opacity-90 hover:cursor-pointer">
        Ok
      </button>
    </div>
  );
};

export default ClientAppointmentCode;
