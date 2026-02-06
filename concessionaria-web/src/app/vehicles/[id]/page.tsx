import Layout from "@/components/Layout";
import { Vehicle } from "@/types/showcase";
import Link from "next/link";

async function getVehicle(id: string): Promise<Vehicle | null> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vehicles/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  return res.json();
}

export default async function VehicleDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const vehicle = await getVehicle(id);

  if (!vehicle) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-2xl text-gray-600">Veículo não encontrado</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <Link
            href="/vehicles"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
          >
            ← Voltar para veículos
          </Link>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Imagem */}
              <div className="relative h-96 md:h-full">
                <img
                  src={vehicle.image}
                  alt={`${vehicle.brand} ${vehicle.model}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Informações */}
              <div className="p-8">
                <div className="mb-4">
                  <span className="text-sm font-semibold text-blue-600 uppercase">
                    {vehicle.brand}
                  </span>
                </div>

                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                  {vehicle.model}
                </h1>

                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-bold text-blue-600">
                    R$ {vehicle.price.toLocaleString("pt-BR")}
                  </span>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-700">
                    <span className="font-semibold">Ano:</span>
                    <span>{vehicle.year}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <span className="font-semibold">Marca:</span>
                    <span>{vehicle.brand}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <span className="font-semibold">Modelo:</span>
                    <span>{vehicle.model}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-lg"
                  >
                    Tenho Interesse
                  </Link>
                  <button className="w-full border-2 border-blue-600 text-blue-600 py-4 rounded-lg font-semibold hover:bg-blue-50 transition text-lg">
                    Agendar Test Drive
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Características */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Características</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <p className="font-semibold">Procedência</p>
                  <p className="text-gray-600">Garantida</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <p className="font-semibold">Garantia</p>
                  <p className="text-gray-600">12 meses</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <p className="font-semibold">Financiamento</p>
                  <p className="text-gray-600">Disponível</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
