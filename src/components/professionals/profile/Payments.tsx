const ProfilePayments = () => {
  const payments = [
    {
      id: 1,
      data: "25/05/2025",
      client: "José Alencar",
      tax: "1.3%",
      fee: "25%",
      value: "1500",
    },
    {
      id: 2,
      data: "25/05/2025",
      client: "José Alencar",
      tax: "1.3%",
      fee: "25%",
      value: "1500",
    },
    {
      id: 3,
      data: "25/05/2025",
      client: "José Alencar",
      tax: "1.3%",
      fee: "25%",
      value: "1500",
    },
    {
      id: 4,
      data: "25/05/2025",
      client: "José Alencar",
      tax: "1.3%",
      fee: "25%",
      value: "1500",
    },
    {
      id: 5,
      data: "25/05/2025",
      client: "José Alencar",
      tax: "1.3%",
      fee: "25%",
      value: "1500",
    },
  ];
  return (
    <div className="flex flex-col gap-50">
      <div className="flex justify-start items-center">
        <button className="w-50 rounded-[6px] border border-[#A1A1A1] text-[#2E7042] text-[18px] px-3 py-2">
          Sacar
        </button>
      </div>
      <div className="bg-white rounded-[20px] text-[18px] p-5">
        <table className="p-5 rounded-[5px]">
          <tr className="bg-[#AFFEC5] rounded-[5px]">
            <th className="text-[#2E7042] font-normal px-10 py-2">Data</th>
            <th className="text-[#2E7042] font-normal px-10">Cliente</th>
            <th className="text-[#2E7042] font-normal px-10">Taxa</th>
            <th className="text-[#2E7042] font-normal px-10">Comissão</th>
            <th className="text-[#2E7042] font-normal px-10">Saldo</th>
          </tr>
          {payments.map((payment) => (
            <tr className="text-[16px]" key={payment.id}>
              <td
                className={`text-center px-3 py-3 ${
                  payment.id % 2 ? "bg-[#f1f3f2]" : "bg-white"
                }`}
              >
                {payment.data}
              </td>
              <td
                className={`text-center px-3 py-3 ${
                  payment.id % 2 ? "bg-[#f1f3f2]" : "bg-white"
                }`}
              >
                {payment.client}
              </td>
              <td
                className={`text-center px-3 py-3 ${
                  payment.id % 2 ? "bg-[#f1f3f2]" : "bg-white"
                }`}
              >
                {payment.tax}
              </td>
              <td
                className={`text-center px-3 py-3 ${
                  payment.id % 2 ? "bg-[#f1f3f2]" : "bg-white"
                }`}
              >
                {payment.fee}
              </td>
              <td
                className={`text-center px-3 py-3 ${
                  payment.id % 2 ? "bg-[#f1f3f2]" : "bg-white"
                }`}
              >
                {payment.value}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ProfilePayments;
