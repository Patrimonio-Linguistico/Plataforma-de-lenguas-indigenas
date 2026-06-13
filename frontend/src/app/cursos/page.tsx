export default function CursosPage() {
  const cursos = [
    {
      id: 1,
      nombre: "Lengua Inga",
      instructor: "María Gómez",
      nivel: "Básico",
    },
    {
      id: 2,
      nombre: "Lengua Kamëntsá",
      instructor: "Carlos López",
      nivel: "Intermedio",
    },
    {
      id: 3,
      nombre: "Lengua Nasa Yuwe",
      instructor: "Ana Ruiz",
      nivel: "Avanzado",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-6xl rounded-xl bg-white p-8 shadow-lg">

        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Gestión de Cursos
            </h1>

            <p className="text-slate-600">
              Administración de cursos de lenguas indígenas.
            </p>
          </div>

          <button className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
            + Nuevo Curso
          </button>
        </div>

        <table className="w-full">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Curso</th>
              <th className="p-3 text-left">Instructor</th>
              <th className="p-3 text-left">Nivel</th>
              <th className="p-3 text-center">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {cursos.map((curso) => (
              <tr
                key={curso.id}
                className="border-b hover:bg-slate-100"
              >
                <td className="p-3">{curso.id}</td>
                <td className="p-3">{curso.nombre}</td>
                <td className="p-3">{curso.instructor}</td>
                <td className="p-3">{curso.nivel}</td>

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