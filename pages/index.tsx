import React from "react";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";

const Pill: React.FC<{ label: string }> = ({ label }) => (
  <span className="px-3 py-1 border rounded-full text-sm cursor-pointer hover:bg-blue-500 hover:text-white">{label}</span>
);

const HomePage: React.FC = () => {
  const filters = ["Top Villa", "Self Checkin", "Pet Friendly", "Pool"];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-80 bg-gray-200 flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Find your favorite place here!</h1>
          <p className="text-lg">The best prices for over 2 million properties worldwide.</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="p-4 flex gap-2 flex-wrap">
        {filters.map((filter) => (
          <Pill key={filter} label={filter} />
        ))}
      </section>

      {/* Property Listing */}
      <section className="p-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {PROPERTYLISTINGSAMPLE.map((property: PropertyProps, index) => (
          <div key={index} className="border rounded shadow hover:shadow-lg overflow-hidden">
            <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="font-bold text-lg">{property.name}</h2>
              <p className="text-gray-500">{property.address.city}, {property.address.country}</p>
              <p className="mt-2 font-semibold">${property.price} / night</p>
              <p className="text-yellow-500">Rating: {property.rating}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomePage;

