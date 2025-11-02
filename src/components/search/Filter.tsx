const Filter = () => {
  return (
    <div className="flex flex-col gap-2 border border-[#2E7042] p-5 pr-10 rounded-[20px]">
      <p className="font-bold text-[18px] text-[#2E7042]">Filtrar por:</p>
      <div className="flex gap-2">
        <input
          type="checkbox"
          id="closeToMe"
          value="Perto de mim"
          placeholder="Perto de mim"
        />
        <label htmlFor="closeToMe">Perto de mim</label>
      </div>
      <div className="flex gap-2">
        <input
          type="checkbox"
          id="rating"
          value="Avaliação"
          placeholder="Avaliação"
        />
        <label htmlFor="rating">Avaliação</label>
      </div>
      <div className="flex gap-2">
        <input
          type="checkbox"
          id="timeOfService"
          value="Tempo de serviço"
          placeholder="Tempo de serviço"
        />
        <label htmlFor="timeOfService">Tempo de serviço</label>
      </div>
      <div className="flex gap-2">
        <input
          type="checkbox"
          id="irl"
          value="Consulta presencial"
          placeholder="Consulta presencial"
        />
        <label htmlFor="irl">Consulta presencial</label>
      </div>
      <div className="flex gap-2">
        <input
          type="checkbox"
          id="online"
          value="Consulta presencial"
          placeholder="Consulta presencial"
        />
        <label htmlFor="online">Consulta por video</label>
      </div>
      <button className="text-[#2E7042] underline p-2 flex">
        Aplicas filtros
      </button>
    </div>
  );
};

export default Filter;
