import Sidebar from "./Sidebar";

interface Props {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
