export default function Login() {
  return (
    <>
      <h1 className="text-center pb-8 font-bold text-xl text-blue-400">
        Login
      </h1>

      <form className="flex flex-col gap-4">
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
        <a href="/cadastro" className="text-sm text-blue-400 hover:underline">
          Não tem uma conta? Cadastre-se
        </a>
        <button type="submit" className="bg-blue-400 text-white rounded-xl p-3">
          Login
        </button>
      </form>
    </>
  );
}
