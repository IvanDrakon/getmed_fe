interface ClientProfile {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface propsType {
  client: ClientProfile;
  option: string | null;
}

const ClientUpdate = ({ client, option }: propsType) => {
  return (
    <>
      <div className="flex flex-col gap-3 items-center justify-center">
        <h1 className="text-[18px] flex gap-1 justify-center items-center">
          Seu email atual é:
          <p className="text-[20px] font-bold">{client.email}</p>
        </h1>
        <input
          className="items-center justify-center text-center"
          type="text"
          name="newEmail"
          id="newEmail"
          placeholder="Digite seu novo Email"
        />
        <button className="bg-[#2E7042] text-white rounded-[6px] py-1 px-3">
          Alterar {option}
        </button>
      </div>
    </>
  );
};

export default ClientUpdate;
