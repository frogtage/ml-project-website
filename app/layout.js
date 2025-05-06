import Header from "@/components/Header";
import "./globals.css";
import SideBar from "@/components/Sidebar";

export const metadata = {
  title: "یادگیری ماشین",
  description: "محمد حسین دوخائی",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header />
        <SideBar />
        {children}
      </body>
    </html>
  );
}
