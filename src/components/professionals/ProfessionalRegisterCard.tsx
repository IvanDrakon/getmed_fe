import ProfilePicture from "../layout/ProfilePicture";

const ProfessionalRegisterCard = () => {
  return (
    <div className="text-[#2E7042] min-w-100 flex flex-col items-center font-main">
      <ProfilePicture image={"public/prof1.png"} name={"José Inácio"} />
      <div className="bg-white w-5/6 flex flex-col justify-between items-center p-5 rounded-[20px] gap-5">
        <p className="font-semibold text-[#535353]">Resumo sobre você:</p>
        <textarea
          name="about"
          id="about"
          placeholder="Escreva aqui:"
          className="text-[#535353] border border-[#B3B3B3] rounded-[10px] p-3 h-50"
        ></textarea>
        <button className="w-5/6 bg-[#B3B3B3] rounded-[40px] px-3 py-2 text-white hover:cursor-pointer hover:opacity-90">
          Definir área de atendimento
        </button>
        <button className="w-5/6 bg-[#AFFEC5] rounded-[40px] px-3 py-2 text-[#2E7042] hover:cursor-pointer hover:opacity-60">
          Enviar
        </button>
      </div>
    </div>
  );
};

export default ProfessionalRegisterCard;
