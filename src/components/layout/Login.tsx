"use client";

import Logo from "../../../public/Logo - GETMED (Fundo Claro - Verde com Azul).png";
import Image from "next/image";
import { useState } from "react";

interface LoginFormData {
  email: string;
  password: string;
}

interface ApiErrorResponse {
  error?: string;
  message?: string;
  errors?: string[];
  detail?: string;
}

interface ApiSuccessResponse {
  access_token: string;
  token_type: string;
  id: number;
}

interface LoginProps {
  onLoginSuccess: (userId: number) => void;
  onClose: () => void;
}

const Login = ({ onLoginSuccess, onClose }: LoginProps) => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | string[] | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("username", formData.email);
      formDataToSend.append("password", formData.password);

      const response = await fetch("http://127.0.0.1:8000/api/client/login", {
        cache: "no-store",
        method: "POST",
        body: formDataToSend,
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
          throw new Error("Erro desconhecido da API");
        }
        return;
      }
      const data: ApiSuccessResponse = await response.json();

      if (data.access_token && data.id) {
        localStorage.setItem("authToken", data.access_token);
        setSuccess("Login realizado com sucesso!");
        setFormData({ email: "", password: "" });
        onLoginSuccess(data.id);
        onClose();
      } else {
        throw new Error("Token ou ID não retornado pela API");
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Erro desconhecido ao conectar com a API"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-15 max-w-6xl flex flex-col items-center justify-centers">
      <Image
        src={Logo}
        alt="Logo GetMed"
        width={162.45}
        height={63.75}
        quality={100}
      />
      <h1 className="font-bold text-[50px] text-[#2E7042] py-10">Entrar</h1>
      <form
        onSubmit={handleSubmit}
        className="text-[#535353] text-[18px] flex flex-col justify-center items-start"
      >
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
        <p className="bg-[#2E7042] w-full max-w-md text-center py-2 rounded-[34.5px] text-white text-[18px] mt-4">
          {success} Redirecionando em 5 segundos...
        </p>
      )}
      {error && (
        <div className="bg-red-800 w-full max-w-md text-center py-2 rounded-[34.5px] text-white text-[18px] mt-4">
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
  );
};

export default Login;
