export default function ActividadesPage() {
  const actividades = [
    {
      id: 1,
      titulo: "Saludos en Inga",
      curso: "Lengua Inga",
      tipo: "Taller",
      fecha: "15/06/2026",
    },
    {
      id: 2,
      titulo: "Pronunciación Kamëntsá",
      curso: "Lengua Kamëntsá",
      tipo: "Práctica",
      fecha: "18/06/2026",
    },
    {
      id: 3,
      titulo: "Vocabulario Básico",
      curso: "Lengua Nasa Yuwe",
      tipo: "Evaluación",
      fecha: "20/06/2026",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-6xl rounded-xl bg-white p-8 shadow-lg">

        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Gestión de Actividades
            </h1>

            <p className="text-slate-600">
              Administración de actividades académicas.
            </p>
          </div>

          <button className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
            + Nueva Actividad
          </button>
        </div>

        <table className="w-full">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Actividad</th>
              <th className="p-3 text-left">Curso</th>
              <th className="p-3 text-left">Tipo</th>
              <th className="p-3 text-left">Fecha</th>
              <th className="p-3 text-center">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {actividades.map((actividad) => (
              <tr key={actividad.id} className="border-b hover:bg-slate-100">
                <td className="p-3">{actividad.id}</td>
                <td className="p-3">{actividad.titulo}</td>
                <td className="p-3">{actividad.curso}</td>
                <td className="p-3">{actividad.tipo}</td>
                <td className="p-3">{actividad.fecha}</td>

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