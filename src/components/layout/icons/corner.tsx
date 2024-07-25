interface ICorner {
  type: string;
  size: string;
  color: string;
}

export default function Corner({ type, size, color }: ICorner) {
  const viewBox = `0 0 ${size} ${size}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
    >
      {type === "right" && (
        <g>
          <g>
            <path
              d="M11.2497 24.9L19.3997 16.75C20.3622 15.7875 20.3622 14.2125 19.3997 13.25L11.2497 5.09998"
              stroke={color}
              strokeWidth="1.875"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      )}
      {type === "down" && (
        <path
          d="M12.2376 5.21948L8.43144 9.02565C7.98193 9.47515 7.24639 9.47515 6.79689 9.02565L2.99072 5.21948"
          stroke={color}
          strokeWidth="1.7513"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}
