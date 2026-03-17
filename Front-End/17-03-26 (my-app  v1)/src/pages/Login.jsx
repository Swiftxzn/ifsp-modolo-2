import { Link } from "react-router";
export default function Login() {
  return (
    <>
      <h1 className="text-center pb-8 font-bold text-xl text-blue-400 font-lexend-deca">
        Login
      </h1>

      <form className="flex flex-col gap-4 font-iosevka-charon-mono">
        <input
          type="email"
          placeholder="E-mail"
          className="border border-dashed border-blue-700 rounded-xl px-4 py-6 "
        />
        <input
          type="password"
          placeholder="Senha"
          className="border border-dashed border-blue-700 rounded-xl px-4 py-6"
        />
        <Link to="/cadastro" className="text-sm text-blue-400">
          Não tem uma conta? Registre-se.
        </Link>
        <button type="submit" className="bg-blue-400 text-white rounded-xl p-3 font-lexend-deca">
          Login
        </button>
      </form>
    </>
  );
}
