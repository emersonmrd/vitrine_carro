import Link from "next/link";

interface FooterProps {
  companyName: string;
}

export default function Footer({ companyName }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">{companyName}</h4>
            <p className="text-gray-400">
              Transformando sonhos em realidade desde 2024.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/vehicles" className="hover:text-white transition">
                  Veículos
                </Link>
              </li>
              <li>
                <Link href="/showcase" className="hover:text-white transition">
                  Showcase
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Horário de Atendimento</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Seg - Sex: 9h - 18h</li>
              <li>Sábado: 9h - 14h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <button
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer"
                aria-label="Facebook"
              >
                F
              </button>
              <button
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer"
                aria-label="Instagram"
              >
                I
              </button>
              <button
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer"
                aria-label="WhatsApp"
              >
                W
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 {companyName}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
