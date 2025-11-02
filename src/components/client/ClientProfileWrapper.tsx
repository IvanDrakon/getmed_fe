"use client";

import { useState, useEffect } from "react";
import ClientProfile from "./ClientProfile";
import { getClientProfile } from "../../../lib/api";

interface ClientProfileData {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface propsType {
  clientId: string;
}

const ClientProfileWrapper = ({ clientId }: propsType) => {
  const [client, setClient] = useState<ClientProfileData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setClient(null);
    setError(null);
    async function fetchProfile() {
      try {
        const data = await getClientProfile(clientId);
        setClient(data);
      } catch (err) {
        setError(`Falha ao carregar o perfil do cliente: ${err}`);
      }
    }
    fetchProfile();
  }, [clientId]);

  if (error) return <div>{error}</div>;
  if (!client) return <div>Carregando...</div>;

  return (
    <>
      <ClientProfile client={client} />;
    </>
  );
};

export default ClientProfileWrapper;
