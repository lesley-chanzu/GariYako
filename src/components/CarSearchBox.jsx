import React, { useState } from "react";
import {
  Search,
  X as CloseIcon,
  ChevronDown,
  CheckCircle2,
  ArrowLeft,
  AlertCircle,
} from "lucide-react";

//Craeting the valuation engine
//FLOW:
//1. User enters their car's registration number and clicks "Get valuation"(e.g KDD 399F)
//2. The system validates the input and fetches the car's details from the database
// -> "look it up" via mock NTSA database(MY OWN)
//    => I will replace the MOC DATABASE with an actual API call to NTSA's database once I have access to it
//3. Show a confirmation message "Is this your car? Make, model, year, mileage, etc."
//4. If the user confirms, show them the estimated value of their car based on market data and similar listings
//5. Ask two quick questions: "condition + location" to refine the valuation
//6. Show them the final valuation and offer to connect them with potential buyers or give them an option to list their car for sale on the platform
// ===============================================================

// -- Thus is the MOC NTSA database, I will replace this with an actual API call to NTSA's database once I have access to it --
// Each entry mimica what a real NTSA record might look like, with registration number as the key and details as the value

const MOCK_NTSA_DATABASE = {
  "KDY 123R": {
    make: "Toyota",
    model: "Corolla",
    year: 2015,
    mileage: 75000,
    color: "Silver",
    owners: 1,
  },
  "KDW 726U": {
    make: "Honda",
    model: "Civic",
    year: 2017,
    mileage: 50000,
    color: "Blue",
    owners: 2,
  },
  "KDA 229T": {
    make: "Nissan",
    model: "Sentra",
    year: 2016,
    mileage: 60000,
    color: "White",
    owners: 1,
  },
  "KDF 674P": {
    make: "Mazda",
    model: "Atenza",
    year: 2018,
    mileage: 30000,
    color: "Black",
    owners: 1,
  },
  "KDC 987L": {
    make: "Subaru",
    model: "Impreza",
    year: 2014,
    mileage: 90000,
    color: "Red",
    owners: 1,
  },
  "KDD 399F": {
    make: "Toyota",
    model: "Auris",
    year: 2014,
    mileage: 36057,
    color: "Gray",
    owners: 1,
  },
  "KAX 673D": {
    make: "Nissan",
    model: "Sunny",
    year: 2000,
    mileage: 330000,
    color: "Green",
    owners: 1,
  },
  "KBG 853W": {
    make: "Subaru",
    model: "Forester",
    year: 2010,
    mileage: 150000,
    color: "Silver",
    owners: 1,
  },
  "KBY 324X": {
    make: "Toyota",
    model: "Prado",
    year: 2012,
    mileage: 234032,
    color: "White",
    owners: 1,
  },
  "KDZ 753R": {
    make: "Tesla",
    model: "Model 3",
    year: 2020,
    mileage: 20000,
    color: "Black",
    owners: 1,
  },
  "KDJ 376J": {
    make: "Mazda",
    model: "CX-5",
    year: 2019,
    mileage: 45000,
    color: "Blue",
    owners: 1,
  },
};

//Simulating an API call to fetch car details based on registration number with a short delay to mimic network latency
async function mockNTSALookup(regNumber) {
  await new Promise((r) => setTimeout(r, 5200)); // simulate latency delay of 5.2 secs
  const clean = regNumber.trim().toUpperCase();
  return MOCK_NTSA_DATABASE[clean] ?? null;
}

//Valuation engine data - this is where the actual valuation logic will go, for now it's just a placeholder that returns a random value based on the car's make and model
//rule 1. => base price on make,model and year
const CarDatabase = {
  Toyota: {
    Harrier: {
      2020: 4200000,
      2019: 3800000,
      2018: 3200000,
      2017: 2800000,
      2016: 2400000,
      2015: 2100000,
    },
    "Corolla (Axio)": {
      2020: 1600000,
      2019: 1400000,
      2018: 1250000,
      2017: 1100000,
      2016: 980000,
      2015: 860000,
    },
    Noah: {
      2020: 2600000,
      2019: 2300000,
      2018: 2000000,
      2017: 1750000,
      2016: 1500000,
      2015: 1300000,
    },
    Fielder: {
      2020: 1700000,
      2019: 1500000,
      2018: 1300000,
      2017: 1150000,
      2016: 1000000,
      2015: 880000,
    },
    Prado: {
      2020: 7500000,
      2019: 6800000,
      2018: 6000000,
      2017: 5400000,
      2016: 4800000,
      2012: 2800000,
    },
    Vitz: {
      2020: 900000,
      2019: 800000,
      2018: 720000,
      2017: 650000,
      2016: 580000,
      2015: 520000,
    },
    Auris: {
      2020: 2800000,
      2019: 1600000,
      2018: 1400000,
      2017: 1200000,
      2016: 1000000,
      2015: 1300000,
      2014: 1150000,
    },
  },
  Mazda: {
    Demio: {
      2020: 1100000,
      2019: 980000,
      2018: 860000,
      2017: 750000,
      2016: 660000,
      2015: 580000,
    },
    "CX-5": {
      2020: 3200000,
      2019: 2900000,
      2018: 2600000,
      2017: 2300000,
      2016: 2000000,
      2015: 1800000,
    },
    Atenza: {
      2020: 1800000,
      2019: 1600000,
      2018: 1400000,
      2017: 1250000,
      2016: 1100000,
      2015: 980000,
    },
  },
  Subaru: {
    Forester: {
      2020: 2400000,
      2019: 2100000,
      2018: 1900000,
      2017: 1650000,
      2016: 1450000,
      2010: 1250000,
    },
    Outback: {
      2020: 2200000,
      2019: 1950000,
      2018: 1750000,
      2017: 1550000,
      2016: 1380000,
      2015: 1200000,
    },
    Impreza: {
      2020: 1600000,
      2019: 1400000,
      2018: 1250000,
      2017: 1100000,
      2016: 980000,
      2014: 860000,
    },
  },
  Nissan: {
    "X-Trail": {
      2020: 2800000,
      2019: 2500000,
      2018: 2200000,
      2017: 1950000,
      2016: 1700000,
      2015: 1500000,
    },
    Note: {
      2020: 950000,
      2019: 850000,
      2018: 760000,
      2017: 680000,
      2016: 600000,
      2015: 530000,
    },
    Sunny: {
      2020: 900000,
      2019: 800000,
      2018: 720000,
      2017: 650000,
      2016: 580000,
      2000: 450000,
    },
  },
  Honda: {
    Vezel: {
      2020: 2600000,
      2019: 2300000,
      2018: 2050000,
      2017: 1800000,
      2016: 1600000,
      2015: 1400000,
    },
    "Fit (Jazz)": {
      2020: 1100000,
      2019: 980000,
      2018: 860000,
      2017: 760000,
      2016: 670000,
      2015: 590000,
    },
    Civic: {
      2020: 3200000,
      2019: 2900000,
      2018: 2600000,
      2017: 2300000,
      2016: 2000000,
      2015: 1800000,
    },
  },
  Tesla: {
    "Model 3": {
      2020: 4500000,
      2019: 4200000,
      2018: 3800000,
      2017: 3500000,
      2016: 3200000,
      2015: 3000000,
    },
    "Model S": {
      2020: 7500000,
      2019: 7000000,
      2018: 6500000,
      2017: 6000000,
      2016: 5500000,
      2015: 5000000,
      2014: 4500000,
    },
  },
};

//rule 2. => The Mileage Penalty - For every 10,000km above 50,000km, reduce the value by 5%
//==========================================
function getMileeageFactor(mileageKm, ageYears) {
  const expected = ageYears * 12000; // driver expected to drive 15000km per year (estimate)
  const difference = mileageKm - expected;
  const penaltyUnits = difference / 10000;
  //if mileage is above expected, apply a penalty of 2.5% per unit, up to a max of 30%
  if (difference > 0) return Math.max(-0.20, penaltyUnits * -0.015);
  //if mileage is below expected, apply a bonus of 1.5% per unit, up to a max of 10% (+0.015 per km, but never more than +0.10 total)
  return Math.min(0.10, Math.abs(penaltyUnits) * 0.01);
}

//rule 3. => Age depreciation - For every year of age, reduce the value by 15%(1) => 4, then 5% for each additional year after that
//============================================
function getAgeDepreciationFactor(ageYears) {
  let total = 0;
  //loop throughout the car's age, applying the appropriate depreciation for each year
  for (let i = 1; i <= ageYears; i++) {
    if (i === 1)
      total += 0.10; // 10% depreciation for the first year
    else if (i === 2)
      total += 0.08; // 6% for the second year
    else if (i <= 4)
      total += 0.07; // 7% for the third and fourth year
    else if (i <= 7)
      total += 0.05; // 5% for the fifth to seventh year
    else total += 0.03; // 3% for each year after the fourth
  }
  //return total but never more than 60%
  return Math.min(0.60, total);
}

//rule 5. => Base Kenyan Market Multiplier - Cars in Kenya are typically 20-40% more expensive than international market
//============================================
function getKenyaMarketMultiplier() {
  // Cars in Kenya are typically 20-40% more expensive than international market
  return 1.3; // 30% premium for Kenyan market
}

//The car/brand model factor also affects the price, for example, a Toyota is 
// generally more valuable than a less popular brand, and within Toyota, 
// a Prado is more valuable than a Vitz. This is already built into our CarDatabase base prices, 
// but we could also add an additional multiplier here if we wanted to further differentiate between models 
// or brands based on demand and popularity in the Kenyan market.
const brandMultiplier = {
  toyota: 1.15,    // Toyota holds value best
  honda: 1.10,
  nissan: 1.05,
  mazda: 1.05,
  subaru: 1.12,
  mitsubishi: 1.05,
  mercedes: 0.95,  // Expensive maintenance in Kenya
  bmw: 0.90,
  audi: 0.88,
  volkswagen: 1.02,
  other: 0.98
};

//Import status factor is another factor. fresh imports from japan/uk commands premium in Kenya, 
// while older imports or locally assembled cars may be worth less. 
// This could be another multiplier we apply based on the car's history and import status, if that data is available.
const importStatusMultiplier = {
  "locally_used": 1.0,    // Already in Kenya
  "fresh_import": 1.15,    // Fresh import from Japan/UK commands premium
  "rebuilt": 0.85          // Rebuilt status reduces value
};

//rule 5. => Condition multiplier
const conditionsMultiplier = [
  {
    id: "excellent",
    label: "Excellent",
    emoji: "🌟",
    multiplier: 1.05,
    desc: "Like new. No scratches, full service history.",
  },
  {
    id: "good",
    label: "Good",
    emoji: "✅",
    multiplier: 1.0,
    desc: "Minor wear only. Well maintained.",
  },
  {
    id: "fair",
    label: "Fair",
    emoji: "🔶",
    multiplier: 0.88,
    desc: "Visible wear, may need minor repairs.",
  },
  {
    id: "poor",
    label: "Poor",
    emoji: "⚠️",
    multiplier: 0.72,
    desc: "Significant wear or mechanical issues.",
  },
];

//rule 6. => Location multiplier - cars in high-demand areas may fetch a higher price, while those in less desirable locations may be worth less
const locationsMultiplier = [
  { id: "nairobi", label: "Nairobi", emoji: "🏙️", multiplier: 1.0 },
  { id: "mombasa", label: "Mombasa", emoji: "🌊", multiplier: 0.97 },
  { id: "kisumu", label: "Kisumu", emoji: "🐟", multiplier: 0.94 },
  { id: "eldoret", label: "Eldoret", emoji: "🌾", multiplier: 0.95 },
  { id: "nakuru", label: "Nakuru", emoji: "🦩", multiplier: 0.96 },
  { id: "thika", label: "Thika/Kiambu", emoji: "🏭", multiplier: 0.98 },
  { id: "other", label: "Other", emoji: "📍", multiplier: 0.91 },
];

//rule 7. => build +-12% flexibility into the final valuation to account for market fluctuations and buyer/seller negotiation room
//Not to show the exact figures of the car's value, but rather a range that gives the user an idea of what to expect when selling their car,
// while also allowing for some flexibility in the market and negotiations with buyers.
function buildRange(mid) {
  return {
    low: Math.round((mid * 0.88) / 10000) * 10000,
    mid: Math.round(mid / 10000) * 10000,
    high: Math.round((mid * 1.12) / 10000) * 10000,
  };
}

//The MASTER calculation function that takes all the factors into account to produce a final valuation range for the user's car
function calculateValuation({
  make,
  model,
  year,
  mileage,  
  condition,
  location,
  importStatus,
}) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - parseInt(year);
  const basePrice = CarDatabase[make]?.[model]?.[year];
  if (!basePrice) return null; // if we don't have data for this car, return null//currently disable cause it may be controversial , interfere with the base price and make the valuation less accurate,

  let price = basePrice;

  // let price = basePrice * (1 - getAgeDepreciationFactor(age)); // apply age depreciation
  price = price * (1 + getMileeageFactor(parseInt(mileage), age)); // apply mileage factor
  price = price * getKenyaMarketMultiplier(); // apply Kenya market premium
  const brandMult = brandMultiplier[make.toLowerCase()] || brandMultiplier.other;
  price = price * brandMult;
  const importMult = importStatusMultiplier[importStatus] || importStatusMultiplier.locally_used;
  price = price * importMult; // apply import status multiplier

  price =
    price * conditionsMultiplier.find((c) => c.id === condition)?.multiplier; // apply condition multiplier
  price =
    price * locationsMultiplier.find((l) => l.id === location)?.multiplier; // apply location multiplier

//Adding a minimum value protection that will make the car not go below a certain threshold
  const minimumValue = basePrice * 0.25; // Never go below 25% of base
  price = Math.max(minimumValue, price);

  return buildRange(price); // return the final valuation range
}

//Format KSH
function formatCurrency(num) {
  if (num === null) return "N/A";
  if (num >= 1000000) return `KSH ${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `KSH ${Math.round(num / 1000)}K`;
  return `KSH ${num.toLocaleString()}`;
}

//===================================
//Step components
//===================================

//step.1 => COnfirm car details returned from lookup and ask for confirmation "Is this your car? Make, model, year, mileage, etc."

function ConfirmCard({ carData, regNumber, onConfirm, onNotMyCar }) {
  return (
    <div className="mt-6 animate-fade-in">
      <div className="bg-emerald-100 border border-emerald-300 rounded-2xl p-5">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-emerald-300 rounded-xl flex items-center justify-center shrink-0 text-2xl">
            🚗
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-800 text-sm font-semibold">
                Vehicle Found
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              {carData.year} {carData.make} {carData.model}
            </h3>
            <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-500">
              <span>🎨 {carData.color}</span>
              <span>🛣️ {carData.mileage.toLocaleString()} km</span>
              <span>👤 {carData.owners} owner(s)</span>
              <span>📍 Registered as: {regNumber}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-5">
          <button
            className="flex-1 bg-teal-500 hover:bg-teal-700 text-white font-semibold py-3 rounded-xl transition-colors text-sm"
            onClick={onConfirm}
          >
            Yes, that's my car
          </button>
          <button
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-xl transition-colors text-sm"
            onClick={onNotMyCar}
          >
            No, that's not my car
          </button>
        </div>
      </div>
    </div>
  );
}

//============================
// step.2 => Condition picker
//============================
function ConditionPicker({ value, onChange }) {
  return (
    <div className="mt-6 animate-fade-in">
      <h3 className="text-lg font-bold text-gray-900 mb-1">
        What's the condition of your car?
      </h3>
      <p className="text-gray-500 text-sm mb-4">
        Be honest about your car's condition to get an accurate valuation.
        Dealers will inspect before buyin{" "}
      </p>
      <div className="grid grid-cols-2 gap-3">
        {conditionsMultiplier.map((c) => (
          <button
            key={c.id}
            onClick={() => onChange(c.id)}
            className={`p-4 rounded-2xl border-2 text-left transition-all duration-200 hover:scale-[1.02]
              ${value === c.id ? "border-teal-500 bg-teal-50 shadow-md" : "border-gray-200 bg-white hover:border-gray-400"}
              `}
          >
            <div className="text-2xl mb-2">{c.emoji}</div>
            <div className="font-bold text-gray-900 text-sm">{c.label}</div>
            <div className="text-gray-400 text-xs mt-1.5 leading-tight">
              {c.desc}
            </div>
            <div
              className={`text-xs font-bold mt-2 ${c.multiplier >= 1 ? "text-emerald-600" : "text-red-500"}`}
            >
              {c.multiplier >= 1
                ? `+${((c.multiplier - 1) * 100).toFixed(0)}%`
                : `${((c.multiplier - 1) * 100).toFixed(0)}%`}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

//==============================
//step.3 => Location Picker
//==============================
function LocationPicker({ value, onChange }) {
  return (
    <div className="mt-6 animate-fade-in">
      <h3 className="text-lg font-bold text-gray-900 mb-1">
        Where is the car Located
      </h3>
      <p className="text-gray-500 text-sm mb-4">
        Location affects demand across Kenya
      </p>
      <div className="grid grid-cols-2 gap-3">
        {locationsMultiplier.map((l) => (
          <button
            key={l.id}
            onClick={() => onChange(l.id)}
            className={`p-3 rounded-xl border-2 text-left transition-all duration-200
              ${value === l.id ? `border-teal-500 bg-teal-50 shadow-sm` : `border-gray-200 bg-white hover:border-gray-300`}
              `}
          >
            <div className="text-xl mb-1">{l.emoji}</div>
            <div className="font-semibold text-gray-800 text-sm">{l.label}</div>
            <div className="text-sm text-gray-400">
              {l.multiplier === 1 ? `top demand` : `${(l.multiplier - 1) * 100}% demand`}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

//==============================
//step.4 => Import Status Picker
//==============================
function ImportStatusPicker({ value, onChange }) {
  const importStatusOptions = [
    {
      id: "locally_used",
      label: "Locally Used",
      emoji: "🇰🇪",
      desc: "Already in Kenya",
      multiplier: 1.0,
    },
    {
      id: "fresh_import",
      label: "Fresh Import",
      emoji: "✈️",
      desc: "Fresh import from Japan/UK",
      multiplier: 1.15,
    },
    {
      id: "rebuilt",
      label: "Rebuilt",
      emoji: "🔧",
      desc: "Rebuilt status",
      multiplier: 0.85,
    },
  ];

  return (
    <div className="mt-6 animate-fade-in">
      <h3 className="text-lg font-bold text-gray-900 mb-1">
        What's the import status?
      </h3>
      <p className="text-gray-500 text-sm mb-4">
        Fresh imports command a premium; rebuilt cars are valued lower
      </p>
      <div className="grid grid-cols-2 gap-3">
        {importStatusOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => onChange(option.id)}
            className={`p-3 rounded-xl border-2 text-left transition-all duration-200
              ${value === option.id ? `border-teal-500 bg-teal-50 shadow-sm` : `border-gray-200 bg-white hover:border-gray-300`}
              `}
          >
            <div className="text-xl mb-1">{option.emoji}</div>
            <div className="font-semibold text-gray-800 text-sm">{option.label}</div>
            <div className="text-xs text-gray-400 mt-1">{option.desc}</div>
            <div className={`text-xs font-bold mt-2 ${option.multiplier > 1 ? "text-emerald-600" : option.multiplier < 1 ? "text-red-500" : "text-gray-600"}`}>
              {option.multiplier > 1
                ? `+${((option.multiplier - 1) * 100).toFixed(0)}%`
                : option.multiplier < 1
                ? `${((option.multiplier - 1) * 100).toFixed(0)}%`
                : "Base"}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

//================================
//step.5 => Valuation Result
//================================
function ValuationResult({ onReset, condition, location, carData, result }) {
  const conditionObj = conditionsMultiplier.find((c) => c.id === condition);
  const locationObj = locationsMultiplier.find((l) => l.id === location);

  return (
    <div className="mt-6 animate-fade-in">
      {/* Result banner  */}
      <div className="bg-gray-900 rounded-2xl p-6 text-white mb-4">
        <div className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-3">
          GariYako Estimate - {carData.year} {carData.make} {carData.model}
        </div>

        {/* Three Value range */}
        <div className="flex justify-between items-end mb-3">
          <div>
            <div className="text-gray-500 text-xs mb-0.5">Low</div>
            <div className="text-white font-bold text-lg">
              {formatCurrency(result.low)}
            </div>
          </div>
          <div>
            <div className="text-gray-400 text-xs mb-0.5">Best Estimate</div>
            <div className="text-teal-400 font-black text-4xl leading-none">
              {formatCurrency(result.mid)}
            </div>
          </div>
          <div>
            <div className="text-gray-500 text-xs mb-0.5">High</div>
            <div className="text-emerald-500 font-bold text-lg">
              {formatCurrency(result.high)}
            </div>
          </div>
        </div>

        {/* Visual Bar  */}
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full w-full bg-linear-to-r from-yellow-400 via-teal-400 to-emerald-500 rounded-full" />
        </div>
        <p className="text-gray-500 text-xs text-center mt-2">
          Based on current Kenyan market data
        </p>
      </div>

      {/* How we calculated it and got to that number(show to customer)  */}

      <div className="bg-gray-50 rounded-2xl p-4 mb-4 border border-gray-100">
        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
          How we got your car's price:
        </div>
        {[
          {
            label: `Base price — ${carData.make} ${carData.model} ${carData.year}`,
            value: formatCurrency(
              CarDatabase[carData.make]?.[carData.model]?.[carData.year] ?? 0,
            ),
            color: "text-gray-700",
          },
          {
            label: `Age depreciation (${new Date().getFullYear() - carData.year} yrs)`,
            value: `−${(getAgeDepreciationFactor(new Date().getFullYear() - carData.year) * 100).toFixed(0)}%`,
            color: "text-red-500",
          },
          {
            label: `Mileage (${carData.mileage.toLocaleString()} km)`,
            value:
              getMileeageFactor(
                carData.mileage,
                new Date().getFullYear() - carData.year,
              ) >= 0
                ? `+${(getMileeageFactor(carData.mileage, new Date().getFullYear() - carData.year) * 100).toFixed(1)}% bonus`
                : `${(getMileeageFactor(carData.mileage, new Date().getFullYear() - carData.year) * 100).toFixed(1)}% penalty`,
            color:
              getMileeageFactor(
                carData.mileage,
                new Date().getFullYear() - carData.year,
              ) >= 0
                ? "text-emerald-600"
                : "text-red-500",
          },
          {
            label: `Condition: ${conditionObj?.label}`,
            value: `×${conditionObj?.multiplier}`,
            color:
              conditionObj?.multiplier >= 1
                ? "text-emerald-600"
                : "text-red-500",
          },
          {
            label: `Location: ${locationObj?.label}`,
            value: `×${locationObj?.multiplier}`,
            color:
              locationObj?.multiplier < 1 ? "text-red-500" : "text-gray-700",
          },
        ].map((row) => (
          <div
            key={row.label}
            className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
          >
            <span className="text-sm text-gray-500">{row.label}</span>
            <span className={`text-sm font-bold ${row.color}`}>
              {row.value}
            </span>
          </div>
        ))}
      </div>

      {/* //the reset button/CTAs  */}
      <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 rounded-2xl text-base transition-colors shadow-lg shadow-teal-100 mb-3">
        List My Car &amp; Get Real Bids
      </button>
      <button
        onClick={onReset}
        className="w-full border-2 border-gray-200 text-gray-500 font-medium py-3 rounded-2xl text-sm hover:border-gray-300 transition-colors flex items-center justify-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Value another car
      </button>
    </div>
  );
}

// LOading spinner component to show while looking up the car details
const LoadingSpinner = () => (
  <div className="mt-6 flex flex-col items-center gap-3 py-4">
    <div className="flex gap-1.5">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-2.5 h-2.5 bg-teal-500 rounded-full animate-bounce "
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
    <p className="text-gray-400 text-sm">Looking up car details...</p>
  </div>
);

//not found component to show if the registration number doesn't match any records in our mock database
const NotFound = ({ regNumber, onReset, onTryAgain }) => (
  <div className="mt-6 amber-50 border border-amber-200 rounded-2xl p-5">
    <div className="flex items-start gap-3">
      <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.6" />
      <div>
        <div className="font-semibold text-amber-600 mb-1">
          Not Found
          <span className="font-black">{regNumber.trim().toUpperCase()}</span>
        </div>
        <p>
          This plate is not in our Database yet. Please check for typos or try
          another registration number.You can still get a valuation by entering
          the car details manually when listing your car for sale.
        </p>
        <div className="flex gap-3">
          <button
            onClick={onTryAgain}
            className="flex-1 bg-white border border-amber-200 text-amber-700 font-medium py-2.5 rounded-xl text-sm hover:bg-amber-50 transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Try Again
          </button>
          <button
            onClick={onReset}
            className="flex flex-1 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors"
          >
            Enter Details Manually →
          </button>
        </div>
      </div>
    </div>
  </div>
);

//This is the main component of this work

const CarSearchBox = () => {
  const [regNumber, setRegNumber] = useState("");
  const [uiState, setUiState] = useState("idle");
  const [carData, setCarData] = useState(null);
  const [condition, setCarCondition] = useState("");
  const [location, setLocation] = useState("");
  const [importStatus, setImportStatus] = useState("");
  const [result, setResult] = useState(null);

  const formatRegNumber = (value) => {
    const cleaned = value.replace(/\s/g, "").toUpperCase();
    if (cleaned.length <= 3) return cleaned;
    return cleaned.slice(0, 3) + " " + cleaned.slice(3);
  };

  //This is the reset function that clears everything and takes the user back to the beginning of the flow.
  const handleReset = () => {
    setRegNumber("");
    setUiState("idle");
    setCarData(null);
    setCarCondition("");
    setLocation("");
    setImportStatus("");
    setResult(null);
  };

  // step.1 => handling submitted registration number -> trigger lookup
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!regNumber.trim()) return;

    setUiState("looking up");
    const found = await mockNTSALookup(regNumber);

    if (found) {
      setCarData(found);
      setUiState("confirm");
    } else {
      setUiState("Not Found!");
    }
  };

  //step.2 => User Confirmation -> when user agrees "Yes".
  const handleConfirm = () => {
    setUiState("condition");
  };

  //step.3 => the condition is selected -> move to location selection/confirmation
  const handleConditionSelect = (val) => {
    setCarCondition(val);
    //small delay/latency
    setTimeout(() => setUiState("location"), 500);
  };

  //step.4 => location has been selected -> move to import status selection
  const handleLocationSelect = (val) => {
    setLocation(val);
    setTimeout(() => setUiState("import-status"), 500);
  };

  //step.5 => import status has been selected -> run the valuation calculations
  const handleImportStatusSelect = (val) => {
    setImportStatus(val);
    setTimeout(() => {
      const res = calculateValuation({
        make: carData.make,
        model: carData.model,
        year: carData.year,
        mileage: carData.mileage,
        condition: condition,
        location: location,
        importStatus: val, //use val directly instead of state to avoid async update issues
      });
      setResult(res);
      setUiState("result");
    }, 500);
  };



  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-0">
      {/* Top navigation tabs + actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-6">
        <div className="flex items-center gap-6 md:gap-8">
          <button className="text-shadow-gray-400 hover:text-teal-600 font-medium text-lg transition-colors">
            Find a car
          </button>
          <button className="text-shadow-gray-400 font-semibold text-lg transition-colors border-b-2 border-teal-600 pb-1">
            Sell my car
          </button>
          <button className="text-shadow-gray-400 hover:text-teal-600 font-medium text-lg transition-colors">
            Read reviews
          </button>
        </div>

        {/* Optional secondary action. Might remove later if there is no use for it*/}
        <button className="px-5 py-2.5 bg-gray-100 text-gray-800 rounded-lg font-medium hover:bg-gray-200 transition flex items-center gap-2 whitespace-nowrap">
          Sell my car
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Main valuation card to get the car's true price(maybe) / like the main hero?? */}
      <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-10 leading-tight">
          {uiState === "result"
            ? "Your Car's Estimated Value"
            : "Find out how much your car is worth in seconds"}
        </h1>

        {/* registration input form. should always be visible unless we have a result to show or we are in the middle of looking up the car details, in which case we show the loading spinner instead */}

        {uiState !== "result" && (
          <form onSubmit={handleSubmit} className="relative">
            <div
              className={`flex flex-col sm:flex-row items-stretch bg-white rounded-2xl shadow-lg border overflow-hidden transition-all ${uiState === "loading" ? "opacity-50 pointer-events-none border-teal-300" : "border-gray-200 focus-within:ring-teal-500 focus-within:border-transparent"}
            `}
            >
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={regNumber}
                  onChange={(e) => {
                    setRegNumber(formatRegNumber(e.target.value));
                    //If user edits registration number after entering, RESET TO IDLE state
                    if (uiState !== "idle") handleReset();
                  }}
                  placeholder="Enter registration"
                  className="w-full px-6 py-6 text-lg md:text-xl font-medium outline-none text-gray-900 placeholder:text-gray-400"
                  maxLength={10}
                  aria-label="Vehicle registration number"
                  autoCapitalize="characters"
                />
                {regNumber && uiState === "idle" && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition p-1"
                    aria-label="Clear registration"
                  >
                    <CloseIcon className="w-6 h-6" />
                  </button>
                )}
              </div>

              <button
                type="submit"
                className="px-8 py-6 bg-teal-500 hover:bg-teal-600 text-white font-semibold text-lg transition-colors flex items-center justify-center gap-3 min-w-40 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!regNumber.trim() || uiState === "loading"}
              >
                <Search className="w-6 h-6" />
                Get valuation
                {uiState === "loading" ? "looking up..." : "Get Valuation"}
              </button>
            </div>
          </form>
        )}

        {/* popular examples for the customer */}
        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-gray-600">
          <span>Popular examples:</span>
          <button
            type="button"
            onClick={() => setRegNumber("KDY 123R")}
            className="hover:text-teal-600 transition"
          >
            KDY 123R
          </button>
          <span className="w-1 h-1 bg-gray-300 rounded-full" />
          <button
            type="button"
            onClick={() => setRegNumber("KDW 726U")}
            className="hover:text-teal-600 transition"
          >
            KDW 726U
          </button>
        </div>

        {/* Dynamic area content that changes based on the current step in the flow (confirmation, condition selection, location selection, result) */}
        {uiState === "loading" && <LoadingSpinner />}
        {uiState === "Not Found!" && (
          <NotFound
            regNumber={regNumber}
            onReset={handleReset}
            onTryAgain={() => setUiState("idle")}
          />
        )}
        {uiState === "confirm" && carData && (
          <ConfirmCard
            carData={carData}
            regNumber={regNumber.trim().toUpperCase()}
            onConfirm={handleConfirm}
            onNotMyCar={() => setUiState("not_my_car")}
          />
        )}
        {uiState === "not_my_car" && (
          <div className="mt-6 bg-blue-200 border border-blue-400 rounded-2xl p-5 text-center">
            <p className="text-blue-600 font-medium mb-3">
              No problem - If details are incorrect, double-check the plate and
              try again.
            </p>
            <button
              onClick={() => {
                setUiState("idle");
                setRegNumber("");
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
            >
              Try a different reg
            </button>
          </div>
        )}

        {uiState === "condition" && (
          <ConditionPicker value={condition} onChange={handleConditionSelect} />
        )}

        {uiState === "location" && (
          <LocationPicker value={location} onChange={handleLocationSelect} />
        )}

        {uiState === "import-status" && (
          <ImportStatusPicker value={importStatus} onChange={handleImportStatusSelect} />
        )}

        {uiState === "result" && result && (
          <ValuationResult
            result={result}
            carData={carData}
            condition={condition}
            location={location}
            onReset={handleReset}
          />
        )}

        {/* Brand expectations/ customer trust*/}
        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
            Free instant valuation
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-teal-500 rounded-full" />
            No obligation to sell
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-purple-500 rounded-full" />
            4.8 ★ on Trustpilot
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSearchBox;
