import React from 'react';

const textColor = (rating: string) => {
    switch (rating) {
        case "pg":
            return "text-green-500";
        case "pg-13":
            return "text-yellow-500";
        case "r":
            return "text-red-500";
        case "nc-17":
            return "text-purple-500";
        default:
            return "text-gray-700";
    }
};
export default function MovieRating({ rating }: { rating: string; }) {
    return (
        <span className={`text-xsm border-1 border border-gray-700 px-2 uppercase ${textColor(rating)}`} data-testid={`movie-rating-${rating}`}>
            {rating}
        </span>
    );
};
