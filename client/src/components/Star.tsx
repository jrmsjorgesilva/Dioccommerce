import React from "react";

type StarRatingType = {
  marked: boolean;
  starId: number;
};

const Star = ({ marked, starId }: StarRatingType) => {
  return (
    <span data-star-id={starId} className="star" role="button">
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
};

export default Star;
