import React, { useContext } from "react";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";

const Star = ({ rating }) => {
    const fullStars = Math.floor(rating.rate); 
    const hasHalfStar = rating.rate % 1 >= 0.5; 
    const totalStars = 5; 
  
    return (
      <div className="mb-5 mt-2.5 flex items-center">
        {/* Render full stars */}
        {[...Array(fullStars)].map((_, index) => (
          <svg
            key={index}
            className="h-5 w-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Full star"
          >
            <FaStar />
          </svg>
        ))}
        
        {/* Render half star if applicable */}
        {hasHalfStar && (
          <svg
            className="h-5 w-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Half star"
          >
            <FaStarHalf />
          </svg>
        )}
        
        {/* Render empty stars */}
        {[...Array(totalStars - fullStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
          <svg
            key={index + fullStars + (hasHalfStar ? 1 : 0)} 
            className="h-5 w-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Empty star"
          >
            <FaRegStar />
          </svg>
        ))}
        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
          {rating.rate}
        </span>
      </div>
    );
  };
  

export default Star;
  