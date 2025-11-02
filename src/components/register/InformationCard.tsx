const InformationCard = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-5 mx-15 w-4/6 h-130">
      <div className="bg-white p-3 flex flex-col justify-start items-center w-full rounded-[10px] min-h-1/3">
        <p className="text-[18px] font-bold text-[#2E7042]">Como funciona?</p>
      </div>
      <div className="bg-white p-3 flex flex-col justify-start items-center w-full rounded-[10px] min-h-1/3">
        <p className="text-[18px] font-bold text-[#2E7042]">Beneficios</p>
      </div>
      <div className="bg-white p-3 flex flex-col justify-start items-center w-full rounded-[10px] min-h-1/3">
        <p className="text-[18px] font-bold text-[#2E7042]">Sobre nós</p>
      </div>
    </div>
  );
};

export default InformationCard;
