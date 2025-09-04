import "./globals.css";
import { geist } from "./fonts";

export const metadata = {
  title: "Next.js Geist Font Optimization",
  description: "Projeto Next.js com otimização da fonte Geist",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}
