import { FC, ReactNode, useState } from "react";

import styles from "./Accordion.module.scss";
import clsx from "clsx";

interface IAccordion {
  name: string;
  children: ReactNode;
  accentColor?: string;
}

const Accordion: FC<IAccordion> = ({ name, children, accentColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={clsx(
        styles.accordion,
        isOpen && styles.active,
        isOpen && styles[accentColor as string],
      )}
    >
      <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <p>{name}</p>
        <button>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="3"
              viewBox="0 0 13 3"
              fill="none"
            >
              <path
                d="M12.1136 0.327393H0.886364C0.397089 0.327393 0 0.724482 0 1.21376V1.80463C0 2.2939 0.397089 2.69099 0.886364 2.69099H12.1136C12.6029 2.69099 13 2.2939 13 1.80463V1.21376C13 0.724482 12.6029 0.327393 12.1136 0.327393Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <g clipPath="url(#clip0_2147_3204)">
                <path
                  d="M12.2766 5.87498H8.12656V1.72498C8.12656 1.10365 7.62289 0.599976 7.00156 0.599976C6.38024 0.599976 5.87656 1.10365 5.87656 1.72498V5.87498H1.72656C1.10524 5.87498 0.601562 6.37865 0.601562 6.99998C0.601562 7.6213 1.10524 8.12498 1.72656 8.12498H5.87656V12.275C5.87656 12.8963 6.38024 13.4 7.00156 13.4C7.62289 13.4 8.12656 12.8963 8.12656 12.275V8.12498H12.2766C12.8979 8.12498 13.4016 7.6213 13.4016 6.99998C13.4016 6.37865 12.8979 5.87498 12.2766 5.87498Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_2147_3204">
                  <rect
                    width="12.8"
                    height="12.8"
                    fill="white"
                    transform="translate(0.601562 0.599976)"
                  />
                </clipPath>
              </defs>
            </svg>
          )}
        </button>
      </div>
      {isOpen && <div className={styles.content}>{children}</div>}
    </div>
  );
};
export default Accordion;
