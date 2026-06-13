export default function AsistenciasPage() {
  const asistencias = [
    {
      id: 1,
      estudiante: "Juan Pérez",
      curso: "Lengua Inga",
      fecha: "15/06/2026",
      estado: "Presente",
    },
    {
      id: 2,
      estudiante: "María Gómez",
      curso: "Lengua Kamëntsá",
      fecha: "15/06/2026",
      estado: "Ausente",
    },
    {
      id: 3,
      estudiante: "Carlos López",
      curso: "Lengua Nasa Yuwe",
      fecha: "15/06/2026",
      estado: "Presente",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-6xl rounded-xl bg-white p-8 shadow-lg">

        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Control de Asistencias
            </h1>

            <p className="text-slate-600">
              Registro de asistencia de los estudiantes.
            </p>
          </div>

          <button className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
            + Registrar Asistencia
          </button>
        </div>

        <table className="w-full">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Estudiante</th>
              <th className="p-3 text-left">Curso</th>
              <th className="p-3 text-left">Fecha</th>
              <th className="p-3 text-left">Estado</th>
              <th className="p-3 text-center">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {asistencias.map((asistencia) => (
              <tr key={asistencia.id} className="border-b hover:bg-slate-100">
                <td className="p-3">{asistencia.id}</td>
                <td className="p-3">{asistencia.estudiante}</td>
                <td className="p-3">{asistencia.curso}</td>
                <td className="p-3">{asistencia.fecha}</td>

                <td className="p-3">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold text-white ${
                      asistencia.estado === "Presente"
                        ? "bg-green-600"
                        : "bg-red-600"
                    }`}
                  >
                    {asistencia.estado}
                  </span>
                </td>

                <td className="space-x-2 p-3 text-center">
                  <button className="rounded bg-green-600 px-3 py-1 text-white">
                    Editar
                  </button>

                  <button className="rounded bg-red-600 px-3 py-1 text-white">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}