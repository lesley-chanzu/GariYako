import React, { useRef } from 'react';

const reviews = [
  {
    id: 1,
    title: "Easy to use",
    body: "Easy to use, no problem, very good and efficient to deal with. Would highly recommend to anyone looking for a great deal.",
    author: "Michael Barlow",
    time: "58 minutes ago",
  },
  {
    id: 2,
    title: "Found my dream car!",
    body: "Browsed through hundreds of listings and found exactly what I was looking for within my budget. The process was seamless.",
    author: "Amina Wanjiru",
    time: "1 week ago",
  },
  {
    id: 3,
    title: "Brilliant",
    body: "Fast and easy way to find and buy your car. Brilliant 👍 The dealer was professional and the car was exactly as described.",
    author: "Steve Ochieng",
    time: "1 month ago",
  },
  {
    id: 4,
    title: "Sold my car quickly",
    body: "Easy enough to upload and sell my car. Straightforward process with no hidden fees. Very impressed overall.",
    author: "Paul Chinery",
    time: "3 hours ago",
  },
  {
    id: 5,
    title: "Quick and Swift Sale",
    body: "Quick and Swift — after listing, I was contacted by multiple dealers within hours. Got a great price for my old vehicle.",
    author: "Andy Duggan",
    time: "1 year ago",
  },
  {
    id: 6,
    title: "Great experience",
    body: "Very user friendly platform. Customer support was responsive and helped me navigate the buying process with ease.",
    author: "Grace Muthoni",
    time: "17 days ago",
  },
];

const StarRating = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <div key={i} className="w-5 h-5 bg-[#00b67a] flex items-center justify-center rounded-sm">
        <svg viewBox="0 0 24 24" fill="white" className="w-3 h-3">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
    ))}
  </div>
);

const VerifiedBadge = () => (
  <div className="flex items-center gap-1 text-[#555] text-xs">
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="#555" strokeWidth="2">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
    <span>Verified</span>
  </div>
);

function ReviewsSection() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 280, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="flex items-start gap-4 mb-8">
          <span className="text-4xl mt-1">⭐</span>
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#111]">
              This is how it should feel
            </h2>
            <p className="text-[#444] text-sm mt-1">
              Our customers rate us as <strong>'Excellent'</strong> on Trustpilot
            </p>
          </div>
        </div>

        {/* Cards + Arrow */}
        <div className="relative flex items-center gap-2">
          {/* Scrollable Row */}
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto scroll-smooth pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="min-w-[220px] max-w-[220px] bg-white rounded-xl p-4 shadow-sm border border-[#e8e8e8] flex flex-col justify-between flex-shrink-0"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <StarRating />
                    <VerifiedBadge />
                  </div>
                  <p className="font-bold text-[#111] text-sm mb-1">{review.title}</p>
                  <p className="text-[#555] text-xs leading-relaxed line-clamp-3">{review.body}</p>
                </div>
                <p className="text-[#888] text-xs mt-3">
                  <span className="font-semibold text-[#333]">{review.author}</span>
                  {" · "}{review.time}
                </p>
              </div>
            ))}
          </div>

          {/* Arrow Button */}
          <button
            onClick={() => scroll(1)}
            className="flex-shrink-0 w-9 h-9 rounded-full border border-[#ccc] bg-white flex items-center justify-center shadow-sm hover:shadow-md hover:border-[#002855] transition-all"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" className="w-4 h-4">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        {/* Trustpilot Footer */}
        <div className="text-center mt-6 text-xs text-[#555]">
          Rated <strong>4.4 / 5</strong> based on{" "}
          <span className="underline cursor-pointer">78,611 reviews</span>.
          Showing our 5 star reviews.
          <div className="flex items-center justify-center gap-1 mt-1">
            <svg viewBox="0 0 24 24" fill="#00b67a" className="w-4 h-4">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span className="font-semibold text-[#00b67a]">Trustpilot</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ReviewsSection;