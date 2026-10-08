import "./globals.css";
export const metadata = { title: "Soni Jewellers Panipat - 22KT Gold" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}