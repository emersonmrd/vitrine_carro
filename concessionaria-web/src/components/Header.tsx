import Link from "next/link";

interface HeaderProps {
  companyName: string;
}

export default function Header({ companyName }: HeaderProps) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">MS</span>
          </div>
          <span className="text-2xl font-bold text-gray-800">
            {companyName}
          </span>
        </Link>

        <div className="hidden md:flex gap-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </Link>
          <Link
            href="/vehicles"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Veículos
          </Link>
          <Link
            href="/showcase"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Showcase
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Contato
          </Link>
        </div>

        <Link
          href="/contact"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Fale Conosco
        </Link>
      </nav>
    </header>
  );
}
