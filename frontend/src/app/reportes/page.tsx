export default function ReportesPage() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="mb-2 text-4xl font-bold text-slate-800">
        Reportes y Estadísticas
      </h1>

      <p className="mb-8 text-slate-600">
        Visualización y análisis de la información generada por la Plataforma de
        Lenguas Indígenas.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-lg font-semibold">Usuarios Registrados</h2>

          <p className="mt-4 text-4xl font-bold text-blue-600">150</p>

          <p className="mt-2 text-sm text-slate-500">
            Total de usuarios registrados en la plataforma.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-lg font-semibold">Cursos Activos</h2>

          <p className="mt-4 text-4xl font-bold text-green-600">12</p>

          <p className="mt-2 text-sm text-slate-500">
            Cursos disponibles para el aprendizaje de lenguas indígenas.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-lg font-semibold">Actividades Registradas</h2>

          <p className="mt-4 text-4xl font-bold text-purple-600">48</p>

          <p className="mt-2 text-sm text-slate-500">
            Actividades académicas registradas en el sistema.
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-xl bg-white p-6 shadow">
        <h2 className="mb-4 text-2xl font-semibold">Reportes Disponibles</h2>

        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>Reporte de usuarios registrados.</li>
          <li>Reporte de cursos y contenidos académicos.</li>
          <li>Reporte de asistencia por curso.</li>
          <li>Reporte de actividades desarrolladas.</li>
          <li>Estadísticas de participación estudiantil.</li>
          <li>Indicadores de uso de la plataforma.</li>
        </ul>
      </div>

      <div className="mt-8 rounded-xl bg-white p-6 shadow">
        <h2 className="mb-3 text-2xl font-semibold">Estado del Módulo</h2>

        <p className="text-slate-700">
          Este módulo permitirá generar reportes dinámicos y estadísticas que
          apoyen la toma de decisiones y el seguimiento de los procesos de
          enseñanza y preservación de las lenguas indígenas.
        </p>
      </div>
    </div>
  );
}
