"use client";

import Logo from "../../../../public/Logo - GETMED (Fundo Claro - Verde com Azul).png";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface RegisterFormData {
  name: string;
  email: string;
  phone: string;
  password: string;
}

interface ApiErrorResponse {
  error?: string;
  message?: string;
  errors?: string[];
  detail?: string;
}

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<RegisterFormData>({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | string[] | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        router.push("/");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const hanfleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const validatePassword = (password: string): string | null => {
    if (password.length < 8) {
      return "A senha deve ter pelo menos 8 caracteres";
    }
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharRegex.test(password)) {
      return "A senha deve conter pelo menos um caractere especial (ex: !, @, #, $)";
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    if (formData.password !== confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/client", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const errorData: ApiErrorResponse = await response.json();
        if (errorData.errors) {
          setError(errorData.errors);
        } else if (errorData.error) {
          setError(errorData.error);
        } else if (errorData.message) {
          setError(errorData.message);
        } else if (errorData.detail) {
          setError(errorData.detail);
        } else {
          throw new Error(errorData.error || "Erro ao enviar os dados");
        }
        return;
      }
      setSuccess("Cadastro realizado com sucesso!");
      setFormData({ name: "", email: "", phone: "", password: "" });
      setConfirmPassword("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-[#f1f3f2] min-h-screen font-main">
      <div className="container mx-auto px-4 py-15 max-w-6xl flex flex-col items-center justify-centers">
        <Image
          src={Logo}
          alt="Logo GetMed"
          width={162.45}
          height={63.75}
          quality={100}
        />
        <h1 className="font-bold text-[50px] text-[#2E7042] py-10">
          Criar sua Conta
        </h1>
        <form
          onSubmit={handleSubmit}
          className="text-[#535353] text-[18px] flex flex-col justify-center items-start"
        >
          <label className="flex flex-col">
            <span className="form-span">Nome completo</span>
            <input
              className="form-input"
              required
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
            />
          </label>
          <label className="flex flex-col">
            <span className="form-span">Email</span>
            <input
              className="form-input"
              required
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
          </label>
          <label className="flex flex-col">
            <span className="form-span">Telefone</span>
            <input
              className="form-input"
              required
              type="tel"
              name="phone"
              onChange={handleChange}
              value={formData.phone}
            />
          </label>
          <label className="flex flex-col">
            <span className="form-span">Senha</span>
            <input
              className="form-input"
              required
              type="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
            />
          </label>
          <label className="flex flex-col">
            <span className="form-span">Confirmar senha</span>
            <input
              className="form-input"
              required
              type="password"
              onChange={hanfleConfirmPasswordChange}
              value={confirmPassword}
            />
          </label>
          <button
            className="bg-[#2E7042] px-30 py-3 m-10 rounded-[34.5] hover:opacity-90 hover:cursor-pointer"
            type="submit"
            disabled={isLoading}
          >
            <p className="text-white text-[24px]">
              {isLoading ? "Enviando..." : "Enviar"}
            </p>
          </button>
        </form>
        {success && (
          <p className="bg-[#2E7042] w-2/6 text-center py-2 rounded-[34.5] text-[18px]">
            {`${success}\n Redirecionado em 5 segundos...`}
          </p>
        )}
        {error && (
          <div className="bg-red-800 w-2/6 text-center py-2 rounded-[34.5] text-[18px]">
            {Array.isArray(error) ? (
              <ul className="list-disc pl-5">
                {error.map((err, index) => (
                  <li key={index}>{err}</li>
                ))}
              </ul>
            ) : (
              <p>{error}</p>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default Register;
