import { Vehicle } from "@/types/showcase";
import Link from "next/link";

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img
          src={vehicle.image}
          alt={`${vehicle.brand} ${vehicle.model}`}
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {vehicle.year}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-semibold text-blue-600 uppercase">
            {vehicle.brand}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-3">
          {vehicle.model}
        </h3>

        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-3xl font-bold text-blue-600">
            R$ {(vehicle.price / 1000).toFixed(0)}k
          </span>
          <span className="text-gray-500 text-sm">à vista</span>
        </div>

        <Link
          href={`/vehicles/${vehicle.id}`}
          className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Ver Detalhes
        </Link>
      </div>
    </div>
  );
}
