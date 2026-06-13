export default function ConfiguracionPage() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="mb-2 text-4xl font-bold text-slate-800">
        Configuración del Sistema
      </h1>

      <p className="mb-8 text-slate-600">
        Administración de parámetros generales de la Plataforma de Lenguas
        Indígenas.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-3 text-xl font-semibold">
            Configuración Institucional
          </h2>

          <p className="text-slate-700">
            Permite administrar la información general de la organización,
            comunidades indígenas vinculadas y parámetros institucionales.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-3 text-xl font-semibold">
            Gestión de Roles y Permisos
          </h2>

          <p className="text-slate-700">
            Configuración de accesos para administradores, docentes, estudiantes
            y demás usuarios del sistema.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-3 text-xl font-semibold">Seguridad</h2>

          <p className="text-slate-700">
            Administración de credenciales, políticas de autenticación y
            protección de la información almacenada.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-3 text-xl font-semibold">Personalización</h2>

          <p className="text-slate-700">
            Configuración de apariencia, idioma y elementos visuales de la
            plataforma.
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-xl bg-white p-6 shadow">
        <h2 className="mb-3 text-2xl font-semibold">Estado del Módulo</h2>

        <p className="text-slate-700">
          Este módulo se encuentra en fase de diseño y planificación. Su
          objetivo es centralizar la administración y configuración general del
          sistema.
        </p>
      </div>
    </div>
  );
}
