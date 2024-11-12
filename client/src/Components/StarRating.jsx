import React from 'react';

const StarRating = ({ rating }) => {
  const roundedRating = Math.round(rating * 2) / 2;
  const fullStars = Math.floor(roundedRating);
  const hasHalfStar = roundedRating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {Array(fullStars)
        .fill()
        .map((_, index) => (
            <span key={index} className="text-yellow-500 text-sm sm:text-base md:text-lg lg:text-xl">
            ★
          </span>
        ))}

      {hasHalfStar && (
        <span className="text-yellow-500 text-sm sm:text-base md:text-lg lg:text-xl" style={{ position: "relative" }}>
          <span style={{ color: "#d1d5db" }}>★</span>
          <span style={{ position: "absolute", left: 0, width: "50%", overflow: "hidden" }}>★</span>
        </span>
      )}

      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <span key={index} className="text-gray-300 text-lg">
            ★
          </span>
        ))}
    </div>
  );
};
export default StarRating