import React from "react";

const LegalNoticeLogo = ({ w = "96", h = "96" }) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="8" width="88" height="88" fill="url(#paint0_linear_619_4581)" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.12559 53.25H30.8766C34.8121 53.25 38.0019 50.0604 38.0019 46.125V44.9375C38.0019 41.4557 40.9993 38.6746 44.5524 39.0309C47.6424 39.3396 49.8774 42.1706 49.875 45.2771V75.5C49.8703 75.5064 49.8655 75.5128 49.8608 75.5192C49.8702 75.6783 49.875 75.8386 49.875 76V88C49.875 92.4183 46.2933 96 41.875 96H38.875H37.875H16.626C11.3794 96 7.12559 91.7464 7.12559 86.5V53.25ZM2.37539 48.5C1.06433 48.5 0.000293732 47.436 0.000293732 46.125C0.000293732 42.1896 3.19005 39 7.12559 39H35.0568C33.9167 40.7005 33.2517 42.743 33.2517 44.9375V46.125C33.2517 47.436 32.1876 48.5 30.8766 48.5H2.37539Z"
        fill="url(#paint1_linear_619_4581)"
      />
      <path
        d="M41 83C41 87.4183 44.5817 91 49 91L79 91L79 61C79 56.5817 75.4183 53 71 53L49 53C44.5817 53 41 56.5817 41 61L41 83Z"
        fill="#9DD79C"
      />
      <defs>
        <linearGradient
          id="paint0_linear_619_4581"
          x1="77.7714"
          y1="13.2"
          x2="19.9429"
          y2="79.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DDFFDC" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_619_4581"
          x1="43.5"
          y1="96"
          x2="4.40798"
          y2="47.175"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0389996" stopColor="#030303" />
          <stop offset="0.124" stopColor="#252525" />
          <stop offset="0.274" stopColor="#0B0B0B" />
          <stop offset="0.519" stopColor="#333333" />
          <stop offset="0.639" stopColor="#525252" />
          <stop offset="1" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LegalNoticeLogo;
