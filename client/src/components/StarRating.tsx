import React, { useState } from "react";
import Star from "./Star";

const StarRating: React.FC = ({ value }: any) => {
  const [rating, setRating] = useState<number>(parseInt(value) || 0);
  const [selection, setSelection] = useState<number>(0);

  const hoverOver = (event: any) => {
    let val = 0;
    if (event && event.target && event.target.getAttribute("data-star-id"))
      val = event.target.getAttribute("data-star-id");
    setSelection(val);
  };

  return (
    <div
      onMouseOut={() => hoverOver(null)}
      onClick={(e: any) =>
        setRating(e.target.getAttribute("data-star-id") || rating)
      }
      onMouseOver={hoverOver}
    >
      {Array.from({ length: 5 }, (v, i) => (
        <Star
          starId={i + 1}
          key={`star_${i + 1}`}
          marked={selection ? selection >= i + 1 : rating >= i + 1}
        />
      ))}
    </div>
  );
};

export default StarRating;
