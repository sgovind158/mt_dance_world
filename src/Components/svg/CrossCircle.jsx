import React from "react";

const CrossCircle = ({ width = "38.744", height = "38.744" }) => {
  return (
    <>
      <svg
        id="cross-circle"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 38.744 38.744"
      >
        <circle
          id="Ellipse_155"
          data-name="Ellipse 155"
          cx="10.5"
          cy="10.5"
          r="10.5"
          transform="translate(10 10)"
          fill="#fff"
        />
        <path
          id="Path_835"
          data-name="Path 835"
          d="M19.372,0A19.372,19.372,0,1,0,38.744,19.372,19.372,19.372,0,0,0,19.372,0Zm6.457,23.548a1.614,1.614,0,0,1-2.186,2.376q-.049-.045-.095-.095l-4.176-4.175L15.2,25.829a1.614,1.614,0,0,1-2.283-2.283l4.175-4.175L12.915,15.2A1.614,1.614,0,0,1,15.2,12.915l4.175,4.175,4.176-4.175A1.614,1.614,0,1,1,25.924,15.1q-.045.049-.095.095l-4.175,4.176Z"
          fill="#060606"
        />
      </svg>
    </>
  );
};

export default CrossCircle;
