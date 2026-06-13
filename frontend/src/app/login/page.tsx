export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-slate-800">
            Plataforma de Lenguas Indígenas
          </h1>

          <p className="mt-2 text-sm text-slate-600">
            Sistema de apoyo para la preservación, enseñanza y gestión de
            contenidos de lenguas indígenas.
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium">
              Correo electrónico
            </label>

            <input
              type="email"
              placeholder="usuario@ejemplo.com"
              className="w-full rounded-lg border border-slate-300 p-3"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Contraseña</label>

            <input
              type="password"
              placeholder="********"
              className="w-full rounded-lg border border-slate-300 p-3"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 p-3 font-semibold text-white"
          >
            Iniciar Sesión
          </button>
        </form>

        <div className="mt-6 rounded-lg bg-slate-50 p-4 text-sm text-slate-600">
          <p>
            <strong>Estado del proyecto:</strong> Prototipo inicial de la
            interfaz de autenticación.
          </p>
        </div>
      </div>
    </div>
  );
}
