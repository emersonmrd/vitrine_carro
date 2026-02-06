"use client";

import Layout from "@/components/Layout";
import VehicleCard from "@/components/VehicleCard";
import VehicleFilters from "@/components/VehicleFilters";
import { Vehicle } from "@/types/showcase";
import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export default function VehiclesPage() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/vehicles`)
      .then((res) => res.json())
      .then((data) => {
        setVehicles(data);
        setFilteredVehicles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar veículos:", err);
        setLoading(false);
      });
  }, []);

  const handleFilterChange = (filters: {
    brand: string;
    minPrice: string;
    maxPrice: string;
  }) => {
    let filtered = [...vehicles];

    if (filters.brand) {
      filtered = filtered.filter((v) => v.brand === filters.brand);
    }

    if (filters.minPrice) {
      filtered = filtered.filter((v) => v.price >= parseInt(filters.minPrice));
    }

    if (filters.maxPrice) {
      filtered = filtered.filter((v) => v.price <= parseInt(filters.maxPrice));
    }

    setFilteredVehicles(filtered);
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-2xl text-gray-600">Carregando veículos...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Nossos Veículos</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore nossa coleção completa de veículos premium
          </p>
        </div>
      </section>

      {/* Listagem */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filtros */}
            <div className="lg:col-span-1">
              <VehicleFilters onFilterChange={handleFilterChange} />
            </div>

            {/* Lista de veículos */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <p className="text-gray-600">
                  Mostrando {filteredVehicles.length} de {vehicles.length}{" "}
                  veículos
                </p>
              </div>

              {filteredVehicles.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-2xl text-gray-600">
                    Nenhum veículo encontrado
                  </p>
                  <p className="text-gray-500 mt-2">Tente ajustar os filtros</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {filteredVehicles.map((vehicle) => (
                    <VehicleCard key={vehicle.id} vehicle={vehicle} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
