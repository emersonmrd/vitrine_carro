import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
  companyName?: string;
}

export default function Layout({
  children,
  companyName = "Motor Show",
}: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header companyName={companyName} />
      <main className="flex-grow">{children}</main>
      <Footer companyName={companyName} />
    </div>
  );
}
