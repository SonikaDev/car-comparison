
import React from "react";

const Filters = ({ filters, setFilters }) => {
  const handlePriceChange = (min, max) => {
    setFilters((prev) => ({ ...prev, priceRange: [min || 0, max || 100000] }));
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };
  const clearFilters = () => {
    setFilters({
      priceRange: [0, 100000],
      brand: "All",
      type: "All",
    });
  };
  return (
    <div className="p-4 bg-blue-100 rounded-lg shadow-md w-64">
      <h2 className="text-lg font-bold mb-4">Filters</h2>
      {/* Price Range */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Price Range:</label>
        <div className="flex space-x-2">
          <input
            type="number"
            placeholder="Min"
            value={filters.priceRange[0]}
            onChange={(e) => handlePriceChange(parseInt(e.target.value), filters.priceRange[1])}
            className="w-1/2 p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            placeholder="Max"
            value={filters.priceRange[1]}
            onChange={(e) => handlePriceChange(filters.priceRange[0], parseInt(e.target.value))}
            className="w-1/2 p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      {/* Brand and Type */}
      <div className="flex flex-col gap-4">
        {/* Brand */}
        <div>
          <label className="block text-sm font-medium mb-1">Brand:</label>
          <select
            value={filters.brand}
            onChange={(e) => handleFilterChange("brand", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="All">All</option>
            <option value="Tesla">Tesla</option>
            <option value="Ford">Ford</option>
            <option value="BMW">BMW</option>
            <option value="Audi">Audi</option>
            <option value="Toyota">Toyota</option>
          </select>
        </div>
        {/* Type */}
        <div>
          <label className="block text-sm font-medium mb-1">Type:</label>
          <select
            value={filters.type}
            onChange={(e) => handleFilterChange("type", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="All">All</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Hatchback">Hatchback</option>
          </select>
        </div>
        <div className="items-center mt-4">
        <button
          onClick={clearFilters}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Clear Filters
        </button>
      </div>
      </div>
    </div>
  );
};

export default Filters;

