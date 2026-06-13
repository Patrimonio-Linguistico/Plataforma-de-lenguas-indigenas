import "./globals.css";

export const metadata = {
  title: "Plataforma de Lenguas Indígenas",
  description: "Sistema de gestión",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
