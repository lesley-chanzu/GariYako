import React, { useRef, useState } from 'react'

const CarVideos = [
    {
        id: 1,
        videoId: "A9yWBYRIu6Y",
        title: "2024 Toyota Camry Review: A Refined Sedan with Hybrid Power",
        score: 9/10,
        tag: "Budget"
    },
    {
        id: 2,
        videoId: "nHXerFvWbcc",
        title: "2024 Honda Accord Review: A Stylish and Efficient Sedan",
        score: 8.5/10,
        tag: "Budget"
    },
    {
        id: 3,
        videoId: "netu7ZjqdA8",
        title: "2022 Prado J150 Review: A Rugged SUV with Off-Road Prowess",
        score: 8/10,
        tag: "SUV"
    },
    {
        id: 4,
        videoId: "tClPE0RWlDk",
        title: " Mazda CX-5 Review: A Stylish and Fun-to-Drive",
        score: 8.5/10,
        tag: "SUV"
    },
    {
        id: 5,
        videoId: "G1IXQKwi5Ts",
        title: "2019 Peugeot 508 Reveiw: A Stylish and Comfortable Sedan",
        score: 7.5/10,
        tag: "Budget"
    },
    {
        id: 6,
        videoId: "rP2M_HAOUw0",
        title: "2023 Audi A4 Review: A Luxurious and Tech-Savvy Sedan",
        score: 9/10,
        tag: "Luxury"
    },
    {
        id: 7,
        videoId: "khmmXxcFBWI",
        title: "2023 BMW 3 Series Review: A Sporty and Refined Sedan",
        score: 9.5/10,
        tag: "Luxury"
    },
    {
        id: 8,
        videoId: "sCISppoy36o",
        title: "2021 Mercedes-Benz E-class Review: A Luxurious and Comfortable Sedan",
        score: 9/10,
        tag: "Luxury"
    },
    {
        id: 9,
        videoId: "TEPkWdlQ6KE",
        title: "2022 Lexus RX Review: A Luxurious and Comfortable SUV",
        score: 8.5/10,
        tag: "Luxury" 
    },
    {
        id: 10,
        videoId: "juIBU_HI2fo",
        title: "2022 Kai k5 Review: A Stylish and Sporty Sedan",
        score: 8/10,
        tag: "Budget"
    },
    {
        id: 11,
        videoId: "7GJ2fyEGDgM",
        title: "2023 Audi RS6 Avant Review: A High-Performance and Practical Wagon",
        score: 9.5/10,
        tag: "Luxury"
    }
];

const TAG_COLORS = {
    SUV: {bg: 'bg-[#002855]', text: 'text-white'},
    Budget: {bg: 'bg-[#e8e8e8]', text: 'text-[#333]'},
    Luxury: {bg: 'bg-[#002855]', text: 'text-white'}
}

function ReviewCard({ review, isPlaying, onPlay }) {
    const tag = TAG_COLORS[review.tag] ?? {bg: 'bg-gray-300', text: 'text-gray-800'};
    const thumb = `https://img.youtube.com/vi/${review.videoId}/hqdefault.jpg`;

    return (
       <div className="flex-shrink-0 w-[300px] md:w-[320px] group cursor-pointer">

      {/* Thumbnail / Embed */}
      <div
        className="relative w-full aspect-video rounded-xl overflow-hidden bg-black"
        onClick={() => onPlay(review.id)}
      >
        {isPlaying ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${review.videoId}?autoplay=1`}
            title={review.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <img
              src={thumb}
              alt={review.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                // Fallback to hqdefault if maxresdefault fails
                e.target.src = `https://img.youtube.com/vi/${review.videoId}/default.jpg`;
              }}
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-blue bg-opacity-10 group-hover:bg-opacity-25 transition-all duration-300" />

            {/* Category tag — top left */}
            <span className={`absolute top-2 left-2 ${tag.bg} ${tag.text} text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide`}>
              {review.tag}
            </span>

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-[#002855] bg-opacity-90 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#FF6B00] transition-all duration-300">
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 ml-0.5">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Title + Score */}
      <div className="mt-3 px-0.5">
        <p className="text-white text-sm font-semibold leading-snug line-clamp-2 group-hover:text-[#FF6B00] transition-colors duration-200">
          {review.title}
        </p>
        <div className="flex items-center gap-2 mt-2">
          <span className="bg-[#00b67a] text-white text-xs font-bold px-2 py-0.5 rounded">
            {review.score}
          </span>
          <span className="text-[#666] text-xs">Expert Review</span>
        </div>
      </div>
    </div>
    )
}

function CarReviews() {
  const [playingId, setPlayingId] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 340, behavior: 'smooth' });
  };

  const handlePlay = (id) => {
    setPlayingId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-[#0f0f0f] py-16">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            {/* Icon badge */}
            <div className="w-10 h-10 rounded-full bg-[#FF6B00] flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
              </svg>
            </div>
            <div>
              <h2 className="text-white text-2xl md:text-3xl font-extrabold tracking-tight uppercase">
                Most Popular Car Reviews
              </h2>
              <p className="text-[#888] text-sm mt-0.5">
                In-depth expert reviews on the cars Kenyans actually buy.
              </p>
            </div>
          </div>

          {/* Desktop scroll arrows */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-9 h-9 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center hover:border-[#FF6B00] transition-all"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-9 h-9 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center hover:border-[#FF6B00] transition-all"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Cards + Mobile Arrow */}
        <div className="relative flex items-center gap-3">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-2 flex-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {CarVideos.map((review) => (
              <ReviewCard
                key={review.id}
                review={review}
                isPlaying={playingId === review.id}
                onPlay={handlePlay}
              />
            ))}
          </div>

          {/* Mobile-only right arrow */}
          <button
            onClick={() => scroll(1)}
            className="md:hidden flex-shrink-0 w-9 h-9 rounded-full bg-white border border-[#ccc] flex items-center justify-center shadow"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" className="w-4 h-4">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-[#222] mt-10 pt-8">
          <button
           onClick={() => window.open('https://www.youtube.com/@Waigera/videos', '_blank')} 
          className="px-8 py-3 border border-[#444] text-white text-sm font-semibold rounded-lg hover:bg-white hover:text-[#0f0f0f] transition-all duration-200">
            View more reviews
          </button>
        </div>

      </div>
    </section>
  );
}

export default CarReviews