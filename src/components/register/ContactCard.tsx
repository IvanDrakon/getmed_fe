import { Mail, Phone } from "lucide-react";
import Link from "next/link";

const ContactCard = () => {
  return (
    <div className="flex flex-col gap-3 w-1/6">
      <button className="flex gap-2 border-[2px] rounded-[10px] px-3 py-2 border-[#B3B3B3] hover:bg-[#2E7042] hover:text-white hover:cursor-pointer">
        <Mail className="fill-[#2E7042]" strokeWidth={0.5} color="white" />
        Email
      </button>
      <button className="flex gap-2 border-[2px] rounded-[10px] px-3 py-2 border-[#B3B3B3] hover:bg-[#2E7042] hover:text-white hover:cursor-pointer">
        <Phone className="fill-[#2E7042]" strokeWidth={0.5} color="white" />{" "}
        Telefone
      </button>
      <Link
        href={"/professional/register"}
        className="flex justify-center items-center text-[#2E7042] bg-[#affec5] rounded-[40px] px-3 py-2 mt-3 hover:bg-[#2E7042] hover:text-white hover:cursor-pointer"
      >
        <button className="hover:cursor-pointer">Cadastrar</button>
      </Link>
    </div>
  );
};

export default ContactCard;
