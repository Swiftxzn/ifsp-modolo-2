import { Link } from "react-router";

export default function Register() {
  return (
    <>
      <h1 className="text-center pb-8 font-bold text-xl text-purple-400">Registrar</h1>

      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="E-mail"
          className="border border-dashed border-purple-700 rounded-xl px-4 py-6"
        />
        <input
          type="email"
          placeholder="Confirme seu E-mail"
          className="border border-dashed border-purple-700 rounded-xl px-4 py-6"
        />
        <input
          type="password"
          placeholder="Senha"
          className="border border-dashed border-purple-700 rounded-xl px-4 py-6"
        />
        <input
          type="password"
          placeholder="Confirme sua senha"
          className="border border-dashed border-purple-700 rounded-xl px-4 py-6"
        />
        <Link to="/login" className="text-sm text-purple-400">
          Já tem uma conta? Faça login.
        </Link>
        <button type="submit" className="bg-purple-400 text-white rounded-xl p-3">
          Cadastrar
        </button>
      </form>
    </>
  );
}
