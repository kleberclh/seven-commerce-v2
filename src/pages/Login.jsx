import React, { useState } from "react";
import Input from "../components/ui/input";
import Button from "../components/ui/button";
import { userHook } from "../hooks/userHook";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = userHook();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/meu-perfil");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-[500px] bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>

        <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Digite seu E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <Input
            type="password"
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <Button type="submit" className="w-full">
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
}
