"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/Logo - GETMED (Fundo Claro - Verde com Azul).png";
import Login from "./Login";
import Modal from "../modals/Modal";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  sub: string;
  client_id: number | null;
  role: string;
  exp?: number;
}

const Navbar = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [logged, setLogged] = useState<boolean>(false);
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        const decodedToken: JwtPayload = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000);
        if (decodedToken.exp && decodedToken.exp < currentTime) {
          localStorage.removeItem("authToken");
          return;
        }
        if (decodedToken.client_id && decodedToken.role === "client") {
          setLogged(true);
          setUserId(decodedToken.client_id);
        }
      } catch (err) {
        console.error("Erro ao decodificar roken:", err);
        localStorage.removeItem("authToken");
      }
    }
  }, []);

  const openModal = (): void => setIsModalOpen(true);
  const closeModal = (): void => setIsModalOpen(false);

  const handleLoginSuccess = (userId: number) => {
    setLogged(true);
    setUserId(userId);
    closeModal();
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setLogged(false);
    setUserId(null);
    setUserId(null);
    router.push("/");
  };

  return (
    <nav className="mx-auto px-4 py-10 flex items-center justify-between">
      <div className="logo">
        <Link href="/">
          <Image
            src={Logo}
            alt="GetMed Logo (fundo claro - verde com azul)"
            width={162.45}
            height={63.75}
            quality={100}
          ></Image>
        </Link>
      </div>

      <div className="register flex space-x-2">
        {!logged ? (
          <>
            <Link
              href="/professional/register"
              className="border rounded-[23px] border-[#2E7042] bg-[#2E7042] text-white px-5 py-1 hover:opacity-90"
            >
              Torne-se um Professional
            </Link>
            <Link
              href="/client/register"
              className="border rounded-[23px] border-[#2E7042] text-[#2E7042] px-5 py-1 hover:opacity-90 hover:bg-[#2E7042] hover:text-white"
            >
              Cadastrar
            </Link>
            <button
              onClick={openModal}
              className="border rounded-[23px] border-[#2E7042] text-[#2E7042] px-5 py-1 hover:opacity-90 hover:bg-[#2E7042] hover:text-white"
            >
              Entrar
            </button>
          </>
        ) : (
          <>
            <Link
              href={`/client/perfil/${userId}`}
              className="border rounded-[23px] border-[#2E7042] text-[#2E7042] px-5 py-1 hover:opacity-90 hover:bg-[#2E7042] hover:text-white"
            >
              Perfil
            </Link>
            <button
              onClick={handleLogout}
              className="border rounded-[23px] border-[#2E7042] text-[#2E7042] px-5 py-1 hover:opacity-90 hover:bg-[#2E7042] hover:text-white hover:cursor-pointer"
            >
              Sair
            </button>
          </>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Login onLoginSuccess={handleLoginSuccess} onClose={closeModal} />
      </Modal>
    </nav>
  );
};

export default Navbar;
