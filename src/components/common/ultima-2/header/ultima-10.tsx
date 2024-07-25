import { motion } from "framer-motion";

function Ultima10() {
  return (
    <svg
      width="423"
      height="500"
      viewBox="0 0 423 500"
      className="header-ultima-10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="201.5"
        y1="98"
        x2="201.5"
        y2="20"
        stroke="#7EBB48"
        strokeDasharray="2 2"
      />
      <motion.circle
        initial={{ y: 200, x: 182 }}
        animate={{ y: 0, x: 182 }}
        transition={{ duration: 2, delay: 4 }}
        opacity="0.1"
        cx="20"
        cy="20"
        r="20"
        fill="#7EBB48"
      />
      <motion.circle
        initial={{ y: 200, x: 195 }}
        animate={{ y: 12, x: 195 }}
        transition={{ duration: 2, delay: 4 }}
        cx="7"
        cy="7"
        r="7"
        transform="matrix(-1 0 0 1 209 13)"
        fill="#7EBB48"
      />
      <circle
        cx="202"
        cy="138"
        r="59.5464"
        fill="url(#paint0_radial_4032_50280)"
        stroke="url(#paint1_linear_4032_50280)"
        strokeWidth="0.907285"
      />
      <g filter="url(#filter0_b_4032_50280)">
        <ellipse
          cx="201.5"
          cy="167"
          rx="158.5"
          ry="71"
          fill="#F7FDF6"
          fillOpacity="0.5"
        />
        <path
          d="M359.5 167C359.5 176.642 355.14 185.864 347.181 194.293C339.219 202.725 327.675 210.341 313.372 216.748C284.767 229.562 245.215 237.5 201.5 237.5C157.785 237.5 118.233 229.562 89.628 216.748C75.325 210.341 63.7809 202.725 55.8193 194.293C47.8601 185.864 43.5 176.642 43.5 167C43.5 157.358 47.8601 148.136 55.8193 139.707C63.7809 131.275 75.325 123.659 89.628 117.252C118.233 104.438 157.785 96.5 201.5 96.5C245.215 96.5 284.767 104.438 313.372 117.252C327.675 123.659 339.219 131.275 347.181 139.707C355.14 148.136 359.5 157.358 359.5 167Z"
          stroke="url(#paint2_linear_4032_50280)"
        />
      </g>
      <motion.rect
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1.05, 1],
          transition: {
            delay: 6,
            duration: 1.8,
            times: [1, 2, 0.5, 0.5],
            ease: "easeInOut",
          },
        }}
        y="128"
        width="423"
        height="372"
        fill="url(#pattern0_4032_50280)"
      />
      <g filter="url(#filter1_d_4032_50280)">
        <rect
          x="135"
          y="109"
          width="137"
          height="37.4701"
          rx="18.735"
          fill="white"
        />
        <rect
          x="135.5"
          y="109.5"
          width="136"
          height="36.4701"
          rx="18.235"
          stroke="#EAEAEA"
        />
      </g>
      <g clipPath="url(#clip0_4032_50280)">
        <path
          d="M245.651 129.955C243.988 129.955 243.405 128.721 243.405 126.881C243.405 125.032 243.984 123.821 245.651 123.821C247.318 123.821 247.906 125.032 247.906 126.881C247.906 128.721 247.313 129.955 245.651 129.955ZM245.629 131.423C248.684 131.423 249.754 129.224 249.754 126.825C249.754 124.45 248.751 122.349 245.686 122.349C242.631 122.349 241.547 124.534 241.547 126.937C241.547 129.308 242.56 131.423 245.629 131.423ZM240.579 131.232V122.54H239.292L236.361 123.164V124.627L238.744 124.184V131.232H240.579ZM251.421 135H233V121.101C233 119.941 233.893 119 234.994 119H253.42V132.899C253.416 134.064 252.522 135 251.421 135Z"
          fill="#7EBB48"
        />
        <mask
          id="mask0_4032_50280"
          maskUnits="userSpaceOnUse"
          x="152"
          y="119"
          width="82"
          height="17"
        >
          <path
            d="M233.074 119.539H152.562V135.112H233.074V119.539Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_4032_50280)">
          <path
            d="M152.566 128.636V119.559H155.836V128.466C155.836 131.161 157.064 132.465 160.002 132.465C162.941 132.465 164.169 131.161 164.169 128.466V119.559H167.438V128.636C167.438 132.948 165.024 135.118 159.988 135.118C154.801 135.104 152.566 132.948 152.566 128.636Z"
            fill="#121212"
          />
          <path
            d="M169.135 119.545H172.432V132.281H180.475V134.763H169.149V119.545H169.135Z"
            fill="#121212"
          />
          <path
            d="M175.881 119.545H190.077V122.027H184.613V134.763H181.316V122.027H175.881V119.545Z"
            fill="#121212"
          />
          <path
            d="M194.588 134.778H191.291V119.545H194.588V134.778Z"
            fill="#121212"
          />
          <path
            d="M225.311 119.545H221.875L215.529 131.969V119.545H212.094L205.831 128.735L199.568 119.545H195.926V134.763H199.126V124.041L204.562 132.026H206.866L212.329 124.041V134.763H214.095H215.529H217.764L219.337 131.615H227.78L229.38 134.763H233.078L225.311 119.545ZM220.565 128.991L223.572 122.835L226.58 128.991H220.565Z"
            fill="#121212"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_b_4032_50280"
          x="-81"
          y="-28"
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
            result="effect1_backgroundBlur_4032_50280"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_4032_50280"
            result="shape"
          />
        </filter>
        <pattern
          id="pattern0_4032_50280"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_4032_50280"
            transform="matrix(0.000592066 0 0 0.000673237 0 -0.00156134)"
          />
        </pattern>
        <filter
          id="filter1_d_4032_50280"
          x="129.798"
          y="109"
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
            result="effect1_dropShadow_4032_50280"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_4032_50280"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_radial_4032_50280"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(201.27 137.833) rotate(-110.556) scale(100.898)"
        >
          <stop offset="0.116577" stopColor="#6EA43F" />
          <stop offset="0.46" stopColor="#6EA43F" />
          <stop offset="0.599" stopColor="#6EA43F" stopOpacity="0.84" />
          <stop offset="0.785183" stopColor="#9BDA64" stopOpacity="0.8" />
          <stop offset="1" stopColor="#9BDA64" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_4032_50280"
          x1="143.728"
          y1="90.8571"
          x2="262.84"
          y2="92.6193"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#558F21" stopOpacity="0.05" />
          <stop offset="0.480607" stopColor="#558F21" stopOpacity="0.3" />
          <stop offset="1" stopColor="#558F21" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_4032_50280"
          x1="195.418"
          y1="14.776"
          x2="351.012"
          y2="312.12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.445589" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <clipPath id="clip0_4032_50280">
          <rect
            width="102"
            height="16"
            fill="white"
            transform="translate(152 119)"
          />
        </clipPath>
        <image
          id="image0_4032_50280"
          width="1689"
          height="1490"
          xlinkHref="/images/ultima/product-2.png"
        />
      </defs>
    </svg>
  );
}

export default Ultima10;
