const ComparisonTable = ({selectedCars}) =>{
    if (selectedCars.length <= 1) return null
    return(
       
            <div className="mt-6">
              <h2 className="text-xl font-bold mb-2">Comparison</h2>
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">Feature</th>
                    {selectedCars.map((car) => (
                      <th key={car.id} className="border border-gray-300 px-4 py-2">{car.brand} {car.model}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Price</td>
                    {selectedCars.map((car) => (
                      <td key={`price-${car.id}`} className="border border-gray-300 px-4 py-2">${car.price.toLocaleString()}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Type</td>
                    {selectedCars.map((car) => (
                      <td key={`type-${car.id}`} className="border border-gray-300 px-4 py-2">{car.type}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Weight</td>
                    {selectedCars.map((car) => (
                      <td key={`weight-${car.id}`} className="border border-gray-300 px-4 py-2">{car.weight} kg</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">User Ratings</td>
                    {selectedCars.map((car) => (
                      <td key={`ratings-${car.id}`} className="border border-gray-300 px-4 py-2">{car.userRatings} / 5</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
       
    )
}

export default ComparisonTable