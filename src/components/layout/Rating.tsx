const Rating = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <div className="flex flex-col justify-start items-start w-4/6">
        <h3 className="font-bold text-[32px] text-[#2E7042] text-start">
          Avaliar este App
        </h3>
        <span className="text-[14px] text-[#535353]">Dê sua opinião</span>
      </div>
      <div className="bg-white rounded-[16px] flex flex-col text-[#535353] p-5 justify-center items-center gap-5 w-4/6">
        <p className="text-[16px] text-center w-4/6">
          O aplicativo é fácil de usar e navegar?
        </p>
        <div className="flex gap-6 justify-between items-center">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={`easy${num}`} className="flex items-center">
              <input
                type="radio"
                id={`easy${num}`}
                value={`easy${num}`}
                name="easy"
                className="hidden"
              />
              <label
                htmlFor={`easy${num}`}
                className="flex items-center justify-center h-6 w-6 border border-[#2E7042] rounded-[6px] text-[#2E7042] cursor-pointer hover:bg-[#2E7042]/10 transition-colors duration-200 [&:has(input:checked)]:bg-[#2E7042] [&:has(input:checked)]:text-white"
              >
                {num}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="w-4/6 bg-white rounded-[16px] flex flex-col text-[#535353] p-5 justify-center items-center gap-5">
        <p className="text-[16px] text-center w-4/6">
          A experiência de agendamento de serviços foi satisfatória?
        </p>
        <div className="flex gap-6 justify-between items-center">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={`easy${num}`} className="flex items-center">
              <input
                type="radio"
                id={`easy${num}`}
                value={`easy${num}`}
                name="easy"
                className="hidden"
              />
              <label
                htmlFor={`easy${num}`}
                className="flex items-center justify-center h-6 w-6 border border-[#2E7042] rounded-[6px] text-[#2E7042] cursor-pointer hover:bg-[#2E7042]/10 transition-colors duration-200 [&:has(input:checked)]:bg-[#2E7042] [&:has(input:checked)]:text-white"
              >
                {num}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="w-4/6 bg-white rounded-[16px] flex flex-col text-[#535353] p-5 justify-center items-center gap-5">
        <p className="text-[16px] text-center w-4/6">
          Você recomentaria este aplicativo para outras pessoas?
        </p>
        <div className="flex gap-6 justify-between items-center">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={`easy${num}`} className="flex items-center">
              <input
                type="radio"
                id={`easy${num}`}
                value={`easy${num}`}
                name="easy"
                className="hidden"
              />
              <label
                htmlFor={`easy${num}`}
                className="flex items-center justify-center h-6 w-6 border border-[#2E7042] rounded-[6px] text-[#2E7042] cursor-pointer hover:bg-[#2E7042]/10 transition-colors duration-200 [&:has(input:checked)]:bg-[#2E7042] [&:has(input:checked)]:text-white"
              >
                {num}
              </label>
            </div>
          ))}
        </div>
      </div>
      <button className="bg-[#2E7042] text-white w-3/6 rounded-[18px] py-2 hover:cursor-pointer hover:opacity-90">
        Enviar
      </button>
    </div>
  );
};

export default Rating;
