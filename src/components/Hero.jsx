import React from 'react'
import heroCar from '../assets/Lights/Hero-car.jpg'
import CarSearchBox from './CarSearchBox'

function  Hero() {
  return (
    <section 
    className='relative bg-gradient-to-r from-[#002855] to-[#002855]/50 text-white pt-32 pb-20 px-4 md:px-14 lg:px-28'>
        <div
        className='absolute inset-0 bg-cover bg-center opacity-50'
            style={{
        backgroundImage: `url(${heroCar})`,
    }}
        />

        {/* Floating CarSearchBox */}
        <div className='relative z-20 mb-12'>
            <CarSearchBox />
        </div>

        <div className='container mx-auto px-4 relative z-10'>
            <div className='max-w-3xl mx-auto text-center mb-12'>
                <h1 className='text-4xl md:text-5xl font-bold mb-6 text-white'>
                    Find Your Perfect Ride with GariYako - Your Trusted Car Marketplace
                </h1>
                <p className='text-xl md:text-2xl opacity-90 mb-8'>
                    Discover a wide selection of quality vehicles, competitive prices, and exceptional service. Whether you're buying, selling, or renting, GariYako is your go-to destination for all your automotive needs.
                </p>
            </div>
        </div>
    </section>
  )
}

export default  Hero