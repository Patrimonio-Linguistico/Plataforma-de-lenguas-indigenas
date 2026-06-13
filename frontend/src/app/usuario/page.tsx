export default function UsuariosPage() {
  const usuarios = [
    {
      id: 1,
      nombre: "Juan Pérez",
      correo: "juan@ejemplo.com",
      rol: "Estudiante",
    },
    {
      id: 2,
      nombre: "María Gómez",
      correo: "maria@ejemplo.com",
      rol: "Docente",
    },
    {
      id: 3,
      nombre: "Carlos López",
      correo: "carlos@ejemplo.com",
      rol: "Administrador",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-6xl rounded-xl bg-white p-8 shadow-lg">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Gestión de Usuarios
            </h1>
            <p className="text-slate-600">
              Administración de usuarios registrados en la plataforma.
            </p>
          </div>

          <button className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
            + Nuevo Usuario
          </button>
        </div>

        <table className="w-full overflow-hidden rounded-lg">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Nombre</th>
              <th className="p-3 text-left">Correo</th>
              <th className="p-3 text-left">Rol</th>
              <th className="p-3 text-center">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {usuarios.map((usuario) => (
              <tr
                key={usuario.id}
                className="border-b hover:bg-slate-100"
              >
                <td className="p-3">{usuario.id}</td>
                <td className="p-3">{usuario.nombre}</td>
                <td className="p-3">{usuario.correo}</td>
                <td className="p-3">{usuario.rol}</td>
                <td className="p-3 text-center space-x-2">
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