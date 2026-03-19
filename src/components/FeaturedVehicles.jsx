import React from "react";
import volvov40 from "../assets/Lights/Volvo-v40.jpg";
import toyotaPrado from "../assets/Lights/Toyota-Prado.jpg";
import mazda3 from "../assets/Lights/Mazda-3.jpg";
import VwArteon from "../assets/Lights/VW-Arteon.jpg";
import { FuelIcon, GaugeCircle, Heart, MapPin } from "lucide-react";

const vehicles = [
  {
    id: 1,
    name: "Mazda 3",
    price: "2,600,000 KES",
    location: "Nairobi",
    milage: "39,000km",
    image: mazda3,
    fuel: "Petrol",
    transmission: "Automatic",
    type: "Hatchback",
    featured: true,
  },
  {
    id: 2,
    name: "Volvo V40",
    price: "3,400,000 KES",
    location: "Nairobi",
    milage: "39,000km",
    image: volvov40,
    fuel: "Petrol",
    transmission: "Automatic",
    type: "Wagon",
    featured: true,
  },
  {
    id: 3,
    name: "Toyota Prado J150",
    price: "2,300,000 KES",
    location: "Nairobi",
    milage: "229,000km",
    image: toyotaPrado,
    fuel: "Diesel",
    transmission: "Automatic",
    type: "SUV",
    featured: true,
  },
  {
    id: 4,
    name: "Volkswagen Arteon R",
    price: "4,400,000 KES",
    location: "Nairobi",
    milage: "89,034km",
    image: VwArteon,
    fuel: "Petrol",
    transmission: "Automatic",
    type: "Sedan",
    featured: false,
  },
];

function FeaturedVehicles() {
  return (
    <section className="py-5 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Vehicles</h2>
          <p className="text-shadow-gray-400">
            Explore our handpicked selection of top-quality vehicles, showcasing
            the best in performance, style, and value. Whether you're looking
            for a sleek sedan, a rugged SUV, or a fuel-efficient hatchback, our
            featured vehicles are sure to impress.
          </p>
        </div>

        <div className="flex flex-row overflow-x-auto gap-6 md:flex md:flex-row md:flex-wrap lg:flex-nowrap ">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex-shrink-0 min-w-[150px]"
            >
              <div className="relative overflow-hidden rounded-t-xl group">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {vehicle.featured && (
                  <div className="absolute top-3 left-3 bg-[#FF6B35] text-white text-xs font-bold rounded-full px-2 py-1">
                    Featured
                  </div>
                )}
                <button className="absolute top-3 right-3 bg-white/90 p-2 rounded-full hover:bg-[#FF6B35] hover:text-white transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-[#002855]">{vehicle.name}</h3>
                <div className="text-xl font-bold text-[#FF6B35] mb-2">
                  {vehicle.price}
                </div>

                <div className="flex items-center gap-2 text-sm mb-2">
                  <MapPin className="w-4 h-4 text-[#FF6B35]"/>
                  <span>{vehicle.location}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm mb-1">
                  <div className="flex items-center gap-1">
                    <GaugeCircle className="w-4 h-4"/>
                    <span className="text-sm text-gray-500">{vehicle.milage}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FuelIcon className="w-4 h-4"/>
                    <span className="text-sm text-gray-500">{vehicle.fuel}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-lg">
                  <div className="flex items-center gap-25">
                    <span>{vehicle.transmission}</span>
                    <span className="text-sm text-gray-500">{vehicle.type}</span>
                  </div>
                </div>

                <button className="w-full bg-[#002855] text-white py-2 mt-4 rounded-lg hover:bg-[#002855]/50 transition-colors  text-sm">
                  View Details
                </button>

              </div>
            </div>
          ))}
        </div>
          
        <div className="text-center mt-15">
          <button className="px-8 py-2 border-2 border-[#FF6B35] text-[#FF6B35] rounded-lg hover:bg-[#FF6B35] hover:text-white transition-colors">
            View All Vehicles
          </button>
        </div>

      </div>
    </section>
  );
}

export default FeaturedVehicles;
