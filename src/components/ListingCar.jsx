import React from "react";

const ListingCar = ({ carData, result, condition, location, importStatus, listingData, setListingData, onSubmit, onBack}) => {
    const handleChange = (field, value) => {
        setListingData(prev => ({ ...prev, [field]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (listingData.name && listingData.email && listingData.phone) {
            onSubmit(listingData);
        }
    };


    return (
        <div className="mt-6 bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">List your car for BIDS</h2>

            <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Car Details</h3>
                <p className="text-sm text-gray-600">
                    <strong>Make:</strong> {carData.make} <br />
                    <strong>Model:</strong> {carData.model} <br />
                    <strong>Year:</strong> {carData.year} <br />
                    <strong>Mileage:</strong> {carData.mileage.toLocaleString()} km <br />meworks (3 weeks)

Now combine everything with your React skills.

Focus options (do both if possible):

    Next.js App Router (full-stack) → Easiest leap from React. Server Actions, Route Handlers, server components. Many Kenyan/remote jobs love th
                    <strong>Condition:</strong> {condition} <br />
                    <strong>Location:</strong> {location} <br />
                    <strong>Estimated Value:</strong> {result ? `Ksh ${result.toLocaleString()}` : "N/A"} <br />
                    <strong>Import Status:</strong> {importStatus}
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-black">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                        type="text"
                        value={listingData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Enter your Full Name"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                        type='email'
                        value={listingData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Enter your Email Address"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                        type="tel"
                        value={listingData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Enter your Phone Number e.g +254 ***"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Additional Details (Optional)</label>
                    <textarea 
                        value={listingData.description}
                        onChange={(e) => handleChange('description', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        placeholder="Any additional information about your car or listing preferences"
                        rows={3}
                    />
                </div>
                <div className="flex gap-3">
                    <button 
                        type="button"
                        onClick={onBack}
                        className="flex-1 border border-gray-300 text-gray-700 font-medium py-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        Back
                    </button>
                    <button
                        type="submit"
                        className="flex-1 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition-colors"
                    >
                        List my Car
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ListingCar;