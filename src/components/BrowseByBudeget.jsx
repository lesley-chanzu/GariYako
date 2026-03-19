import React, { useState } from "react";
import toyotaCamry from "../assets/Lights/Toyota-Camry.jpg";
import toyotaYaris from "../assets/Lights/Toyota-Yaris.jpg";
import mazda from "../assets/Lights/Mazda.jpg";
import gti from "../assets/Lights/Gti.jpg";
import mercedesamg from "../assets/Lights/mercedes-amg.jpg";
import bmwx6 from "../assets/Lights/Bmw-x6.jpg";

const budgetRanges = [
  {
    id: 1,
    range: "Under 1 Million KES",
    count: "10,500 + Cars",
    image: toyotaYaris,
  },
  {
    id: 2,
    range: "1 Million - 2 Million KES",
    count: "32,300 + Cars",
    image: mazda,
  },
  {
    id: 3,
    range: "2 Million - 3 Million KES",
    count: "9,200 + Cars",
    image: toyotaCamry,
  },
  {
    id: 4,
    range: "3 Million - 5 Million KES",
    count: "7,800 + Cars",
    image: gti,
  },
  {
    id: 5,
    range: "5 Million - 10 Million KES",
    count: "5,500 + Cars",
    image: bmwx6,
  },
  {
    id: 6,
    range: "Open Budget",
    count: "15,000 + Cars",
    image: mercedesamg,
  },
];

function BrowseByBudeget() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="mb-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-bold text-3xl md:text-4xl tracking-tight text-[#111]">
            BROWSE BY BUDGET
          </h2>
          <p className="mt-3 text-[#666] text-sm md:text-base max-w-xl mx-auto">
            Find the perfect car within your budget. Explore our wide range of
            vehicles categorized by price to discover great deals and options
            that fit your financial plan.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {budgetRanges.map((budget) => (
            <div
              key={budget.id}
              onMouseEnter={() => setHoveredId(budget.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`
                bg-[#e8e4de] rounded-2xl overflow-hidden cursor-pointer
                transition-all duration-300
                ${hoveredId === budget.id
                  ? 'bg-white shadow-xl -translate-y-1 scale-[1.02] border-2 border-[#002855]'
                  : 'shadow-sm border-2 border-transparent'
                }
                `}
            >
              <div className="h-28 w-full overflow-hidden bg-transparent ">
                <img
                  src={budget.image}
                  alt={budget.range}
                  className="w-full h-full object-cover drop-shadow-md"
                />
              </div>

              {/* LABEL  */}
              <div className="px-3 pb-4 pt-2">
                <p className='font-bold text-[#111] text-sm leading-tight'>
                  {budget.range}
                </p>
                <p className='text-[#002855] text-xs font-medium mt-1'>
                  {budget.count}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrowseByBudeget;
