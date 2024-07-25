import { motion } from "framer-motion";

function Ultima5() {
  return (
    <svg
      width="317"
      height="401"
      viewBox="0 0 317 401"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M157 204L157 30C157 24.4772 152.523 20 147 20H52"
        stroke="#7EBB48"
        strokeDasharray="2 2"
      />
      <motion.circle
        initial={{ y: 200, x: 135 }}
        animate={{
          y: [200, 0, 0],
          x: [135, 135, 31],
          transition: {
            delay: 4,
            duration: 5,
            times: [1, 2, 0.5, 0.5],
            ease: "easeInOut",
          },
        }}
        opacity="0.1"
        cx="20"
        cy="20"
        r="20"
        transform="matrix(-1 0 0 1 73 0)"
        fill="#7EBB48"
      />
      <motion.circle
        initial={{ y: 200, x: 135 }}
        animate={{
          y: [200, 13, 13],
          x: [150, 150, 45],
          transition: {
            delay: 4,
            duration: 5,
            times: [1, 2, 0.5, 0.5],
            ease: "easeInOut",
          },
        }}
        cx="7"
        cy="7"
        r="7"
        transform="matrix(-1 0 0 1 60 13)"
        fill="#7EBB48"
      />
      <path
        d="M157 30C157 24.4775 152.523 20 147 20"
        stroke="#7EBB48"
        strokeWidth="2"
      />
      <circle
        cx="159.002"
        cy="218"
        r="59.5464"
        fill="url(#paint0_radial_4032_50281)"
        stroke="url(#paint1_linear_4032_50281)"
        strokeWidth="0.907285"
      />
      <g filter="url(#filter0_b_4032_50281)">
        <ellipse
          cx="158.502"
          cy="247"
          rx="158.5"
          ry="71"
          fill="#F7FDF6"
          fillOpacity="0.5"
        />
        <path
          d="M316.502 247C316.502 256.642 312.142 265.864 304.183 274.293C296.221 282.725 284.677 290.341 270.374 296.748C241.769 309.562 202.217 317.5 158.502 317.5C114.787 317.5 75.2348 309.562 46.6299 296.748C32.3269 290.341 20.7829 282.725 12.8212 274.293C4.86207 265.864 0.501953 256.642 0.501953 247C0.501953 237.358 4.86207 228.136 12.8212 219.707C20.7829 211.275 32.3269 203.659 46.6299 197.252C75.2348 184.438 114.787 176.5 158.502 176.5C202.217 176.5 241.769 184.438 270.374 197.252C284.677 203.659 296.221 211.275 304.183 219.707C312.142 228.136 316.502 237.358 316.502 247Z"
          stroke="url(#paint2_linear_4032_50281)"
        />
      </g>
      <motion.rect
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1.1, 1],
          transition: {
            delay: 6,
            duration: 1.8,
            times: [1, 2, 0.5, 0.5],
            ease: "easeInOut",
          },
        }}
        x="12.127"
        y="219"
        width="292.745"
        height="182"
        fill="url(#pattern0_4032_50281)"
      />
      <g filter="url(#filter1_d_4032_50281)">
        <rect
          x="88"
          y="190"
          width="137"
          height="37.4701"
          rx="18.735"
          fill="white"
        />
        <rect
          x="88.5"
          y="190.5"
          width="136"
          height="36.4701"
          rx="18.235"
          stroke="#EAEAEA"
        />
      </g>
      <g clipPath="url(#clip0_4032_50281)">
        <mask
          id="mask0_4032_50281"
          maskUnits="userSpaceOnUse"
          x="186"
          y="200"
          width="21"
          height="17"
        >
          <path
            d="M206.59 200.539H186.174V216.112H206.59V200.539Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_4032_50281)">
          <path
            d="M195.965 212.626C198.848 212.626 200.069 211.397 200.069 209.893C200.069 207.706 197.138 207.227 195.01 207.109L195.08 205.356H199.628V203.983H193.357L193.176 208.528C194.93 208.515 198.169 208.704 198.169 209.988C198.169 210.679 197.543 211.217 195.869 211.217C194.706 211.217 193.679 210.959 192.952 210.702V212.102C193.63 212.382 194.586 212.626 195.965 212.626ZM204.599 216.115H186.174V202.582C186.174 201.452 187.068 200.54 188.166 200.54H206.591V214.068C206.591 215.197 205.696 216.115 204.599 216.115Z"
            fill="#7EBB48"
          />
        </g>
        <mask
          id="mask1_4032_50281"
          maskUnits="userSpaceOnUse"
          x="105"
          y="200"
          width="82"
          height="17"
        >
          <path
            d="M186.074 200.539H105.562V216.112H186.074V200.539Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask1_4032_50281)">
          <path
            d="M105.566 209.636V200.559H108.836V209.466C108.836 212.161 110.064 213.465 113.002 213.465C115.941 213.465 117.169 212.161 117.169 209.466V200.559H120.438V209.636C120.438 213.948 118.024 216.118 112.988 216.118C107.801 216.104 105.566 213.948 105.566 209.636Z"
            fill="#121212"
          />
          <path
            d="M122.135 200.545H125.432V213.281H133.475V215.763H122.149V200.545H122.135Z"
            fill="#121212"
          />
          <path
            d="M128.881 200.545H143.077V203.027H137.613V215.763H134.316V203.027H128.881V200.545Z"
            fill="#121212"
          />
          <path
            d="M147.588 215.778H144.291V200.545H147.588V215.778Z"
            fill="#121212"
          />
          <path
            d="M178.311 200.545H174.875L168.529 212.969V200.545H165.094L158.831 209.735L152.568 200.545H148.926V215.763H152.126V205.041L157.562 213.026H159.866L165.329 205.041V215.763H167.095H168.529H170.764L172.337 212.615H180.78L182.38 215.763H186.078L178.311 200.545ZM173.565 209.991L176.572 203.835L179.58 209.991H173.565Z"
            fill="#121212"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_b_4032_50281"
          x="-123.998"
          y="52"
          width="565"
          height="390"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="62" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_4032_50281"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_4032_50281"
            result="shape"
          />
        </filter>
        <pattern
          id="pattern0_4032_50281"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_4032_50281"
            transform="matrix(0.00182815 0 0 0.00294057 0 -0.0881135)"
          />
        </pattern>
        <filter
          id="filter1_d_4032_50281"
          x="82.7984"
          y="190"
          width="147.403"
          height="47.8734"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="5.20165" />
          <feGaussianBlur stdDeviation="2.60082" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.713381 0 0 0 0 0.713381 0 0 0 0 0.713381 0 0 0 0.13 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_4032_50281"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_4032_50281"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_radial_4032_50281"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(158.272 217.833) rotate(-110.556) scale(100.898)"
        >
          <stop offset="0.116577" stopColor="#6EA43F" />
          <stop offset="0.46" stopColor="#6EA43F" />
          <stop offset="0.599" stopColor="#6EA43F" stopOpacity="0.84" />
          <stop offset="0.785183" stopColor="#9BDA64" stopOpacity="0.8" />
          <stop offset="1" stopColor="#9BDA64" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_4032_50281"
          x1="100.73"
          y1="170.857"
          x2="219.842"
          y2="172.619"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#558F21" stopOpacity="0.05" />
          <stop offset="0.480607" stopColor="#558F21" stopOpacity="0.3" />
          <stop offset="1" stopColor="#558F21" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_4032_50281"
          x1="152.42"
          y1="94.776"
          x2="308.014"
          y2="392.12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.445589" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <clipPath id="clip0_4032_50281">
          <rect
            width="101.872"
            height="16.3932"
            fill="white"
            transform="translate(105.562 200.539)"
          />
        </clipPath>
        <image
          id="image0_4032_50281"
          width="547"
          height="400"
          xlinkHref="/images/ultima/product-3.png"
        />
      </defs>
    </svg>
  );
}

export default Ultima5;
