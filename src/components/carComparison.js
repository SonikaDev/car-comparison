import React, { useState } from "react";
import Filters from "./filters";

import { cars } from "../constants/carData";
import ComparisonTable from "./comparisonTable";

const CarComparison = () => {
  const [selectedCars, setSelectedCars] = useState([]);
  const [filters, setFilters] = useState({ priceRange: [0, 100000], brand: "All", type: "All" });
  console.log({filters});

  const filteredCars = cars
    .filter((car) => car.price >= filters.priceRange[0] && car.price <= filters.priceRange[1])
    .filter((car) => (filters.brand === "All" ? true : car.brand === filters.brand))
    .filter((car) => (filters.type === "All" ? true : car.type === filters.type));
  const toggleSelection = (car) => {
    console.log({selectedCars})
    setSelectedCars((prev) =>
      prev.some((selected) => selected.id === car.id)
        ? prev.filter((selected) => selected.id !== car.id)
        : [...prev, car]

        
    );
  };

  return (
    <div className="flex">
      
      <Filters filters={filters} setFilters={setFilters} />

      <div className="flex-1 p-6 bg-green-50">
        <h1 className="text-2xl font-bold mb-4">Compare Cars</h1>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className={`p-4 border rounded shadow-md hover:shadow-lg transition ${
                selectedCars.some((selected) => selected.id === car.id) ? "border-blue-500" : ""
              }`}
              onClick={() => toggleSelection(car)}
            >
              <h2 className="text-lg font-bold">{car.brand} {car.model}</h2>
              <p><strong>Price:</strong> ${car.price.toLocaleString()}</p>
              <p><strong>Type:</strong> {car.type}</p>
              <p><strong>Weight:</strong> {car.weight} kg</p>
              <p><strong>User Ratings:</strong> {car.userRatings} / 5</p>
            </div>
          ))}
        </div>

        <ComparisonTable selectedCars={selectedCars}/>
      
      </div>
    </div>
  );
};

export default CarComparison;
