import { ChartNoAxesCombined } from "lucide-react";

const AdminMonitoring = () => {
  return (
    <div className="flex flex-col gap-8 w-150">
      <div className="bg-white rounded-[20px] flex flex-col justify-center items-center gap-5 px-5 py-8">
        <p className="py-2 px-5 text-center border-[2px] border-[#A1A1A1] w-50 rounded-[10px] flex gap-2 items-center justify-center text-[#2E7042] text-[18px]">
          <ChartNoAxesCombined strokeWidth={1.5} color="#2E7042" />
          Monitoramento
        </p>
        <p className="border-[2px] rounded-[10px] border-[#B3B3B3] w-5/6 text-center text-[#2E7042] text-[20px] font-bold px-3 py-5">
          Opçãoes Para o monitoramento
        </p>
        <div className="w-5/6 bg-[#D9D9D9] h-100 rounded-[10px]"></div>
      </div>
    </div>
  );
};

export default AdminMonitoring;
