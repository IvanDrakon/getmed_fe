interface ProfessionalDetailCardProps {
  id: number;
  name: string;
  profession: string;
  description: string;
  rating: number;
  date: string;
  address: string;
  image: string;
  onSchedule?: () => void;
}

interface ClientDetailCardProps {
  id: number;
  name: string;
  email: string;
  password: string;
  image: string;
}

interface ClientProfileData {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface ClientAppointmentsData {
  id: number;
  client_id: number;
  professional_id: number;
  schedule_at: string;
  status: string;
  confirmation_code: string;
}

export async function getProfessionalModel(
  id: string
): Promise<ProfessionalDetailCardProps> {
  const res = await fetch("http://localhost:4000/professional-models", {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error("Falha ao buscar profissionais");
  }
  const data: ProfessionalDetailCardProps[] = await res.json();
  const index = Number(id) - 1;
  return data[index];
}

export async function getProfessionalCards(): Promise<
  ProfessionalDetailCardProps[]
> {
  const res = await fetch("http://localhost:4000/professional-models", {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error("Falha ao buscar profissionais");
  }
  return res.json();
}

export async function getClients(): Promise<ClientDetailCardProps[]> {
  const res = await fetch("http://localhost:4000/clients", {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error("Falha ao buscar clientes");
  }
  return res.json();
}

export async function getClientProfile(id: string): Promise<ClientProfileData> {
  const token = localStorage.getItem("authToken");
  if (!token) {
    throw new Error("Usuário não autenticado");
  }
  const res = await fetch(`http://localhost:8000/api/client/${id}`, {
    cache: "force-cache",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error("Erro ao buscar o perfil do cliente");
  }
  const data: ClientProfileData = await res.json();
  return data;
}

export async function getClientAppointments(
  id: string
): Promise<ClientAppointmentsData[]> {
  const token = localStorage.getItem("authToken");
  if (!token) {
    throw new Error("Usuário não autenticado");
  }
  const res = await fetch(
    `http://localhost:8000/api/client-${id}/appointment`,
    {
      cache: "force-cache",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data: ClientAppointmentsData[] = await res.json();
  return data;
}

export async function getProfessional() {
  const token = localStorage.getItem("authToken");
  if (!token) {
    throw new Error("Usuário não autenticado");
  }
  const res = await fetch(``, {
    cache: "force-cache",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
}
