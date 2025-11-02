import ProfilePicture from "../layout/ProfilePicture";
import { Mail, Lock, Smartphone, Map } from "lucide-react";
import Modal from "../modals/Modal";
import ClientUpdate from "./ClientUpdate";
import { useState } from "react";

interface ClientProfile {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface propsType {
  client: ClientProfile;
}

const ClientProfile = ({ client }: propsType) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [option, setOption] = useState<string | null>(null);
  const openModal = (newOption: string): void => {
    setOption(newOption);
    setIsModalOpen(true);
  };
  const closeModal = (): void => {
    setOption(null);
    setIsModalOpen(false);
  };

  const handleButton = (newOption: string) => {
    openModal(newOption);
  };
  return (
    <div className="text-[#2E7042] min-w-100 flex flex-col items-center font-main">
      <ProfilePicture
        image={"public/placeholder-doctor.png"}
        name={client.name}
      />
      <ul className="text-[20px] flex flex-col gap-2 min-w-63">
        <li className="py-3 px-8 border rounded-[10px] flex hover:cursor-pointer group">
          <button
            className="hover:cursor-pointer flex"
            onClick={() => handleButton("email")}
          >
            <Mail className="mr-2 mt-0.5" />
            <span className="group-hover:hidden">{client.email}</span>
            <span className="hidden group-hover:block">Editar Email</span>
          </button>
        </li>
        <li className="py-3 px-8 border rounded-[10px] flex hover:cursor-pointer group">
          <button className="hover:cursor-pointer flex">
            <Lock className="mr-2 mt-0.5" />
            <span className="group-hover:hidden">Senha</span>
            <span className="hidden group-hover:block">Editar Senha</span>
          </button>
        </li>
        <li className="py-3 px-8 border rounded-[10px] flex hover:cursor-pointer group">
          <button className="hover:cursor-pointer flex">
            <Smartphone className="mr-2 mt-0.5" />
            <span className="group-hover:hidden">{client.phone}</span>
            <span className="hidden group-hover:block">Editar Telefone</span>
          </button>
        </li>
        <li className="py-3 px-8 border rounded-[10px] flex hover:cursor-pointer group">
          <button className="hover:cursor-pointer flex">
            <Map className="mr-2 mt-0.5" />
            <span className="group-hover:hidden">Endereço</span>
            <span className="hidden group-hover:block">Editar Endereço</span>
          </button>
        </li>
      </ul>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ClientUpdate client={client} option={option} />
      </Modal>
    </div>
  );
};

export default ClientProfile;
