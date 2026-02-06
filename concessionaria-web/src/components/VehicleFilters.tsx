"use client";

interface VehicleFiltersProps {
  onFilterChange: (filters: {
    brand: string;
    minPrice: string;
    maxPrice: string;
  }) => void;
}

export default function VehicleFilters({
  onFilterChange,
}: VehicleFiltersProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onFilterChange({
      brand: formData.get("brand") as string,
      minPrice: formData.get("minPrice") as string,
      maxPrice: formData.get("maxPrice") as string,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-4">Filtros</h3>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="brand"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Marca
          </label>
          <select
            id="brand"
            name="brand"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
          >
            <option value="">Todas as marcas</option>
            <option value="BMW">BMW</option>
            <option value="Mercedes-Benz">Mercedes-Benz</option>
            <option value="Audi">Audi</option>
            <option value="Porsche">Porsche</option>
            <option value="Range Rover">Range Rover</option>
            <option value="Volvo">Volvo</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="minPrice"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Preço Mínimo
          </label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="R$ 0"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label
            htmlFor="maxPrice"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Preço Máximo
          </label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="R$ 1.000.000"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Aplicar Filtros
        </button>
      </div>
    </form>
  );
}
