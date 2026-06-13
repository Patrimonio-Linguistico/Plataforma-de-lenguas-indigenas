export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-800">Dashboard</h1>

        <p className="mt-2 text-slate-600">
          Plataforma de Gestión y Preservación de Lenguas Indígenas.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-lg font-semibold">Usuarios Registrados</h2>

          <p className="mt-3 text-3xl font-bold text-blue-600">150</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-lg font-semibold">Cursos Disponibles</h2>

          <p className="mt-3 text-3xl font-bold text-green-600">12</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-lg font-semibold">Actividades Académicas</h2>

          <p className="mt-3 text-3xl font-bold text-purple-600">48</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-lg font-semibold">Registros de Asistencia</h2>

          <p className="mt-3 text-3xl font-bold text-orange-600">320</p>
        </div>
      </div>

      <div className="mt-8 rounded-xl bg-white p-6 shadow">
        <h2 className="mb-4 text-2xl font-semibold">
          Descripción del Proyecto
        </h2>

        <p className="text-slate-700">
          Esta plataforma tiene como objetivo apoyar la conservación, enseñanza
          y difusión de las lenguas indígenas mediante la gestión de usuarios,
          cursos, actividades, asistencias y recursos educativos digitales.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="mb-3 text-xl font-semibold">
            Funcionalidades Planeadas
          </h3>

          <ul className="list-disc space-y-2 pl-5">
            <li>Gestión de usuarios y roles.</li>
            <li>Administración de cursos.</li>
            <li>Registro de actividades académicas.</li>
            <li>Control de asistencia.</li>
            <li>Generación de reportes.</li>
          </ul>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="mb-3 text-xl font-semibold">Tecnologías Utilizadas</h3>

          <ul className="list-disc space-y-2 pl-5">
            <li>Next.js 16</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>Rust + Tauri</li>
            <li>SQLite</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
