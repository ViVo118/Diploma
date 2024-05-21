import type { Metadata } from "next";
import "./globalStyles/globals.css"

export const metadata: Metadata = {
  title: "Millor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}
