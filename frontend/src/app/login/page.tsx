export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow">
        <h1 className="mb-6 text-center text-3xl font-bold">
          Plataforma de Lenguas Indígenas
        </h1>

        <form className="space-y-4">
          <div>
            <label className="mb-1 block">Correo electrónico</label>
            <input type="email" className="w-full rounded border p-2" />
          </div>

          <div>
            <label className="mb-1 block">Contraseña</label>
            <input type="password" className="w-full rounded border p-2" />
          </div>

          <button
            type="submit"
            className="w-full rounded bg-blue-600 p-2 text-white"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}
