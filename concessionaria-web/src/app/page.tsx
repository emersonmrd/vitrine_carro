import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import VehicleCard from "@/components/VehicleCard";
import { api } from "@/services/api";
import { Showcase } from "@/types/showcase";
import Link from "next/link";

export default async function Home() {
  const data: Showcase = await api.showcase.getHome();

  return (
    <Layout companyName={data.company}>
      <Hero title={data.slogan} description={data.description} />

      {/* Destaques */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Veículos em Destaque
            </h2>
            <p className="text-gray-600 text-lg">
              Confira nossa seleção premium de veículos
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {data.highlights.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/vehicles"
              className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
            >
              Ver Todos os Veículos →
            </Link>
          </div>
        </div>
      </section>

      <AboutSection companyName={data.company} />
    </Layout>
  );
}
