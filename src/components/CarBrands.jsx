import React from "react";

import astonMartin from "../assets/logos/aston-martin.png";
import audi from "../assets/logos/audi.png";
import beiben from "../assets/logos/beiben.png";
import bentley from "../assets/logos/bentley.png";
import bmwM from "../assets/logos/bmw-m.png";
import bmw from "../assets/logos/bmw.png";
import brabus from "../assets/logos/brabus.png";
import byd from "../assets/logos/byd.png";
import cadillac from "../assets/logos/cadillac.png";
import chery from "../assets/logos/chery.png";
import chevroletCorvette from "../assets/logos/chevrolet-corvette.png";
import chevrolet from "../assets/logos/chevrolet.png";
import citroen from "../assets/logos/citroen.png";
import cupra from "../assets/logos/cupra.png";
import daf from "../assets/logos/daf.png";
import daihatsu from "../assets/logos/daihatsu.png";
import dodgeViper from "../assets/logos/dodge-viper.png";
import fawJiefang from "../assets/logos/faw-jiefang.png";
import ferrari from "../assets/logos/ferrari.png";
import fiat from "../assets/logos/fiat.png";
import fordMustang from "../assets/logos/ford-mustang.png";
import ford from "../assets/logos/ford.png";
import hino from "../assets/logos/hino.png";
import honda from "../assets/logos/honda.png";
import hyundai from "../assets/logos/hyundai.png";
import isuzu from "../assets/logos/isuzu.png";
import iveco from "../assets/logos/iveco.png";
import jeep from "../assets/logos/jeep.png";
import kia from "../assets/logos/kia.png";
import lamborghini from "../assets/logos/lamborghini.png";
import landRover from "../assets/logos/land-rover.png";
import lucid from "../assets/logos/lucid.png";
import mahindra from "../assets/logos/mahindra.png";
import man from "../assets/logos/man.png";
import maserati from "../assets/logos/maserati.png";
import maybach from "../assets/logos/maybach.png";
import mazda from "../assets/logos/mazda.png";
import mercedesAmg from "../assets/logos/mercedes-amg.png";
import mercedesBenz from "../assets/logos/mercedes-benz.png";
import mini from "../assets/logos/mini.png";
import mitsubishi from "../assets/logos/mitsubishi.png";
import morgan from "../assets/logos/morgan.png";
import nissanGtR from "../assets/logos/nissan-gt-r.png";
import nissanNismo from "../assets/logos/nissan-nismo.png";
import nissan from "../assets/logos/nissan.png";
import opel from "../assets/logos/opel.png";
import peugeot from "../assets/logos/peugeot.png";
import porsche from "../assets/logos/porsche.png";
import renault from "../assets/logos/renault.png";
import rivian from "../assets/logos/rivian.png";
import rollsRoyce from "../assets/logos/rolls-royce.png";
import seat from "../assets/logos/seat.png";
import skoda from "../assets/logos/skoda.png";
import subaru from "../assets/logos/subaru.png";
import suzuki from "../assets/logos/suzuki.png";
import tata from "../assets/logos/tata.png";
import tesla from "../assets/logos/tesla.png";
import toyotaAlphard from "../assets/logos/toyota-alphard.png";
import toyotaCrown from "../assets/logos/toyota-crown.png";
import toyota from "../assets/logos/toyota.png";
import volvo from "../assets/logos/volvo.png";
import xpeng from "../assets/logos/xpeng.png";

const logos = [
  { name: "Aston Martin", src: astonMartin },
  { name: "Audi", src: audi },
  { name: "Beiben", src: beiben },
  { name: "Bentley", src: bentley },
  { name: "BMW M", src: bmwM },
  { name: "BMW", src: bmw },
  { name: "Brabus", src: brabus },
  { name: "BYD", src: byd },
  { name: "Cadillac", src: cadillac },
  { name: "Chery", src: chery },
  { name: "Chevrolet Corvette", src: chevroletCorvette },
  { name: "Chevrolet", src: chevrolet },
  { name: "Citroën", src: citroen },
  { name: "Cupra", src: cupra },
  { name: "DAF", src: daf },
  { name: "Daihatsu", src: daihatsu },
  { name: "Dodge Viper", src: dodgeViper },
  { name: "FAW Jiefang", src: fawJiefang },
  { name: "Ferrari", src: ferrari },
  { name: "Fiat", src: fiat },
  { name: "Ford Mustang", src: fordMustang },
  { name: "Ford", src: ford },
  { name: "Hino", src: hino },
  { name: "Honda", src: honda },
  { name: "Hyundai", src: hyundai },
  { name: "Isuzu", src: isuzu },
  { name: "Iveco", src: iveco },
  { name: "Jeep", src: jeep },
  { name: "Kia", src: kia },
  { name: "Lamborghini", src: lamborghini },
  { name: "Land Rover", src: landRover },
  { name: "Lucid", src: lucid },
  { name: "Mahindra", src: mahindra },
  { name: "MAN", src: man },
  { name: "Maserati", src: maserati },
  { name: "Maybach", src: maybach },
  { name: "Mazda", src: mazda },
  { name: "Mercedes‑AMG", src: mercedesAmg },
  { name: "Mercedes‑Benz", src: mercedesBenz },
  { name: "Mini", src: mini },
  { name: "Mitsubishi", src: mitsubishi },
  { name: "Morgan", src: morgan },
  { name: "Nissan GT‑R", src: nissanGtR },
  { name: "Nissan NISMO", src: nissanNismo },
  { name: "Nissan", src: nissan },
  { name: "Opel", src: opel },
  { name: "Peugeot", src: peugeot },
  { name: "Porsche", src: porsche },
  { name: "Renault", src: renault },
  { name: "Rivian", src: rivian },
  { name: "Rolls‑Royce", src: rollsRoyce },
  { name: "SEAT", src: seat },
  { name: "Škoda", src: skoda },
  { name: "Subaru", src: subaru },
  { name: "Suzuki", src: suzuki },
  { name: "Tata", src: tata },
  { name: "Tesla", src: tesla },
  { name: "Toyota Alphard", src: toyotaAlphard },
  { name: "Toyota Crown", src: toyotaCrown },
  { name: "Toyota", src: toyota },
  { name: "Volvo", src: volvo },
  { name: "XPeng", src: xpeng },
];

//trying to split the Logos into 3 rows
const splitIntoRows = (arr, numRows) => {
  const rows = Array.from({ length: numRows }, () => []);
  arr.forEach((item, i) => rows[i % numRows].push(item));
  return rows;
};

const rows = splitIntoRows(logos, 3);

const BrandRows = ({ brands: rowBrands, duration, reverse = false }) => {
  const doubled = [...rowBrands, ...rowBrands, ...rowBrands];

  return (
    <div className="relative overflow-hidden w-full">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

      <div
        className="flex gap-4"
        style={{
          animation: `marquee-${reverse ? "reverse" : "forward"} ${duration}s linear infinite`,
          width: "max-content",
        }}
      >
        {doubled.map((brand, i) => (
          <div
            key={`${brand.name}-${i}`}
            className="flex flex-col items-center justify-center gap-2 w-28 h-20 bg-white rounded-xl border border-gray-200 flex-shrink-0 select-none"
            draggable={false}
          >
            <img
              src={brand.src}
              alt={brand.name}
              draggable={false}
              className="h-10 w-20 object-contain filter brightness-90 select-none"
              style={{ pointerEvents: "none", userSelect: "none" }}
            />
            <span className="text-black text-[10px] font-medium tracking-wide uppercase select-none">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

function CarBrands() {
  return (
    <section className="bg-white py-14">
      <style>{`
        @keyframes marquee-forward {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-reverse {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="container mx-auto px-4 mb-10">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-[#FF6B00] rounded-full" />
          <div>
            <h2 className="text-black text-2xl md:text-3xl font-extrabold tracking-tight uppercase">
              With Partners we TRUST
            </h2>
            <p className="text-[#888] text-sm mt-0.5">
              We collaborate with leading car brands to bring you a diverse
              selection of vehicles, ensuring quality and reliability in every
              choice you make.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <BrandRows brands={rows[0]} duration={22} reverse={false} />
        <BrandRows brands={rows[1]} duration={28} reverse={true} />
        <BrandRows brands={rows[2]} duration={25} reverse={false} />
      </div>
    </section>
  );
}

export default CarBrands;
