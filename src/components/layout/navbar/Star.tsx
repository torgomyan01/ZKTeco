interface IThisPros {
  colorStar: string;
}

function Star({ colorStar }: IThisPros) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="39"
        height="39"
        rx="7.5"
        fill={colorStar}
        fillOpacity="0.15"
        stroke="url(#paint0_linear_667_7708)"
      />
      <path
        d="M28.6947 18.5937L24.8016 22.3887L25.721 27.7487C25.761 27.9831 25.6647 28.22 25.4722 28.36C25.3635 28.4393 25.2341 28.4793 25.1047 28.4793C25.0053 28.4793 24.9053 28.4556 24.8141 28.4075L20.0003 25.8768L15.1872 28.4068C14.9772 28.5181 14.7216 28.5 14.5291 28.3593C14.3366 28.2193 14.2403 27.9825 14.2803 27.7481L15.1997 22.3881L11.306 18.5937C11.136 18.4275 11.0741 18.1787 11.1478 17.9531C11.2216 17.7275 11.4172 17.5618 11.6528 17.5275L17.0335 16.7462L19.4397 11.87C19.6503 11.4431 20.3503 11.4431 20.561 11.87L22.9672 16.7462L28.3478 17.5275C28.5835 17.5618 28.7791 17.7268 28.8528 17.9531C28.9266 18.1793 28.8647 18.4268 28.6947 18.5937Z"
        fill={colorStar}
      />
      <defs>
        <linearGradient
          id="paint0_linear_667_7708"
          x1="0.576132"
          y1="4.28572"
          x2="40.2802"
          y2="4.8731"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={colorStar} stopOpacity="0.05" />
          <stop offset="0.480607" stopColor={colorStar} stopOpacity="0.3" />
          <stop offset="1" stopColor={colorStar} stopOpacity="0.05" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Star;
