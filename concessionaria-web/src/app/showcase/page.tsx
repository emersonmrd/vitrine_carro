import Layout from "@/components/Layout";
import VehicleCard from "@/components/VehicleCard";
import { api } from "@/services/api";
import { Showcase } from "@/types/showcase";
import Link from "next/link";

export default async function ShowcasePage() {
  const data: Showcase = await api.showcase.getHome();

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Veículos em Destaque</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore nossa coleção completa de veículos premium
          </p>
        </div>
      </section>

      {/* Lista */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </Layout>
  );
}
