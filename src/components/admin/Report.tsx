import { StickyNote } from "lucide-react";
import Markdown from "react-markdown";
import Image from "next/image";

const markdownText = `
Data: 25/04/2025\n
Resumo:\n
Durante abril, focamos na expansão dos atendimentos domiciliares na região metropolitana de São Paulo. Recrutamos 28 novos profissionais, impactamos 12 mil pessoas em campanhas e realizamos 3 workshops de capacitação.\n
Resultados:
- **Aumento de 18% nos agendamentos.**
- **92% de satisfação dos pacientes.**
- **25% mais cadastros na plataforma.**
`;

const AdminReport = () => {
  return (
    <div className="flex flex-col gap-8 w-150">
      <div className="bg-white rounded-[20px] flex flex-col justify-center items-center gap-5 px-5 py-8">
        <p className="py-2 px-5 text-center border-[2px] border-[#A1A1A1] w-50 rounded-[10px] flex gap-2 items-center justify-center text-[#2E7042] text-[18px]">
          <StickyNote strokeWidth={1.5} color="#2E7042" />
          Relatórios
        </p>
        <div className="w-5/6 flex justify-center flex-col gap-2 px-5">
          <Markdown>{markdownText}</Markdown>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <Image
            src="/prof1.png"
            alt="relatório"
            width={150}
            height={150}
            quality={100}
          />
          <Image
            src="/prof2.png"
            alt="relatório"
            width={150}
            height={150}
            quality={100}
          />
          <Image
            src="/prof3.png"
            alt="relatório"
            width={150}
            height={150}
            quality={100}
          />
          <Image
            src="/prof4.png"
            alt="relatório"
            width={150}
            height={150}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminReport;
