import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { FC, ReactNode } from "react";

import Arrow from "../icons/arrow";

import styles from "./index.module.scss";

interface IReaderCard {
  title: ReactNode;
  description: string;
  icon: StaticImageData;
  iconSize: number;
  alt: string;
  trigger?: any;
  paginator?: any;
}
export const ReaderCard: FC<IReaderCard> = ({
  title,
  description,
  icon,
  iconSize,
  alt,
  trigger,
  paginator,
}) => {
  const variant = {
    init: {
      clipPath: "polygon(0% 0%,0% -21%,50% -21%,	50% -21%, 50% -21%)",
    },
    animate: {
      clipPath: [
        "polygon(50% 50%,50% -21%,50% -21%,50% -21%,50% -21%,50% -21%)",
        "polygon(50% 50%,50% -21%,-21% 50%,-21% 50%,-21% 50%,-21% 50%)",
        "polygon(  50% 50%, 50% -21%,-21% 50%,50% 121%,50% 121%,50% 121%)",
        "polygon(50% 50%,50% -21%,-21% 50%,50% 121%,121% 50%,121% 50%)",
      ],
    },
    exit: {
      clipPath: [
        "polygon(50% 50%,50% -21%,-21% 50%,50% 121%,121% 50%,121% 50%)",
        "polygon(  50% 50%, 50% -21%,-21% 50%,50% 121%,50% 121%,50% 121%)",
        "polygon(50% 50%,50% -21%,-21% 50%,-21% 50%,-21% 50%,-21% 50%)",
        "polygon(50% 50%,50% -21%,50% -21%,50% -21%,50% -21%,50% -21%)",
      ],
    },
  };
  return (
    <AnimatePresence>
      <div className={clsx(styles.readerCard)}>
        <div className={clsx(styles.readerCardHeader)}>
          <h5 className={clsx(styles.readerCardHeaderTitle)}>Readers</h5>
          <button className={clsx(styles.readerCardHeaderButton)}>
            <Arrow type="up-button" size="40" color="white" />
          </button>
        </div>
        <div className={styles.heading}>
          <motion.div
            className={clsx(styles.readerCardIconWrapper)}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <svg
              className={clsx(styles.readerCardBorderIcon)}
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="98"
              viewBox="0 0 170 170"
              fill="none"
            >
              <g filter="url(#filter0_b_667_1810)">
                <path
                  d="M127.426 127.426C119.035 135.818 108.344 141.532 96.7054 143.847C85.0666 146.162 73.0026 144.974 62.039 140.433C51.0754 135.892 41.7047 128.201 35.1118 118.334C28.5189 108.467 25 96.8669 25 85C25 73.1331 28.5189 61.5328 35.1118 51.6658C41.7047 41.7989 51.0754 34.1085 62.039 29.5673C73.0026 25.026 85.0666 23.8378 96.7054 26.1529C108.344 28.468 119.035 34.1825 127.426 42.5736L118.941 51.0589C112.228 44.346 103.675 39.7744 94.3643 37.9223C85.0532 36.0702 75.4021 37.0208 66.6312 40.6538C57.8603 44.2868 50.3638 50.4391 45.0895 58.3327C39.8152 66.2262 37 75.5065 37 85C37 94.4935 39.8152 103.774 45.0895 111.667C50.3638 119.561 57.8603 125.713 66.6312 129.346C75.402 132.979 85.0532 133.93 94.3643 132.078C103.675 130.226 112.228 125.654 118.941 118.941L127.426 127.426Z"
                  fill="white"
                  fillOpacity="0.1"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b_667_1810"
                  x="-48.5"
                  y="-48.5"
                  width="249.426"
                  height="267"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur
                    in="BackgroundImageFix"
                    stdDeviation="36.75"
                  />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_667_1810"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_667_1810"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_b_667_1810"
                  x="-48.5"
                  y="-48.5"
                  width="249.426"
                  height="249.426"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur
                    in="BackgroundImageFix"
                    stdDeviation="36.75"
                  />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_667_1810"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_667_1810"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <motion.div
              variants={variant}
              initial="init"
              whileInView="animate"
              exit="exit"
              transition={{
                duration: 1.5,
              }}
              key={trigger}
              className={clsx(styles.raz)}
            ></motion.div>
            <Image
              src={icon}
              alt={alt}
              width={iconSize}
              height={iconSize}
              className={clsx(styles.readerCardIcon)}
            />
          </motion.div>
          <motion.h3
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className={clsx(styles.readerCardTitle)}
          >
            {title}
          </motion.h3>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className={styles.bottom}
        >
          <motion.p className={clsx(styles.readerCardDescription)}>
            {description}
          </motion.p>{" "}
          {paginator}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
