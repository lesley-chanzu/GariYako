import React, { useState } from 'react';
import { Search, X as CloseIcon, ChevronDown } from 'lucide-react';

const CarSearchBox = () => {
  const [regNumber, setRegNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!regNumber.trim()) return;
    // Handle valuation here
    console.log('Valuation search for reg:', regNumber.trim().toUpperCase());
  };

  const handleClear = () => {
    setRegNumber('');
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

      {/* Main valuation card to get the car's true price(maybe)  */}
      <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-10 leading-tight">
          Sell your car for what it's really worth
        </h1>

        <form onSubmit={handleSubmit} className="relative">
          <div className="flex flex-col sm:flex-row items-stretch bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden focus-within:ring-2 focus-within:ring-teal-500 focus-within:border-transparent transition-all">
            <div className="flex-1 relative">
              <input
                type="text"
                value={regNumber}
                onChange={(e) => setRegNumber(e.target.value.trim().toUpperCase())}
                placeholder="Enter registration"
                className="w-full px-6 py-6 text-lg md:text-xl font-medium outline-none text-gray-900 placeholder:text-gray-400"
                maxLength={10}
                aria-label="Vehicle registration number"
                autoCapitalize="characters"
              />
              {regNumber && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition p-1"
                  aria-label="Clear registration"
                >
                  <CloseIcon className="w-6 h-6" />
                </button>
              )}
            </div>

            <button
              type="submit"
              className="px-8 py-6 bg-teal-500 hover:bg-teal-600 text-white font-semibold text-lg transition-colors flex items-center justify-center gap-3 min-w-[160px]"
              disabled={!regNumber.trim()}
            >
              <Search className="w-6 h-6" />
              Get valuation
            </button>
          </div>
        </form>

        {/* popular examples for the customer */}
        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-gray-600">
          <span>Popular examples:</span>
          <button
            type="button"
            onClick={() => setRegNumber('AB12CDE')}
            className="hover:text-teal-600 transition"
          >
            KDY 123R
          </button>
          <span className="w-1 h-1 bg-gray-300 rounded-full" />
          <button
            type="button"
            onClick={() => setRegNumber('XY78ZYX')}
            className="hover:text-teal-600 transition"
          >
            KDX 546U
          </button>
        </div>

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