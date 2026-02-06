import Link from "next/link";

interface HeroProps {
  title: string;
  description: string;
}

export default function Hero({ title, description }: HeroProps) {
  return (
    <section className="relative h-[600px] bg-gradient-to-r from-gray-900 to-gray-700 flex items-center">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container mx-auto px-4 relative z-10 text-white">
        <h1 className="text-6xl font-bold mb-4">{title}</h1>
        <p className="text-xl mb-8 max-w-2xl">{description}</p>
        <div className="flex gap-4">
          <Link
            href="/vehicles"
            className="bg-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Ver Veículos
          </Link>
          <Link
            href="/contact"
            className="bg-white text-gray-800 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            Entre em Contato
          </Link>
        </div>
      </div>
    </section>
  );
}
