import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow">
      <nav className="p-4">
        <ul className="space-y-3">
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>

          <li>
            <Link href="/usuarios">Usuarios</Link>
          </li>

          <li>
            <Link href="/cursos">Cursos</Link>
          </li>

          <li>
            <Link href="/actividades">Actividades</Link>
          </li>

          <li>
            <Link href="/asistencias">Asistencias</Link>
          </li>

          <li>
            <Link href="/reportes">Reportes</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
