import { FC, useRef, useState } from "react";
import styles from "./Team.module.scss";
import { motion } from "framer-motion";
import clsx from "clsx";
import { ButtonWithArrow } from "@components/layout/buttons/button-with-arrow";
import ModalSite from "@components/layout/modal/Modal";
import ContactModal from "../сonnect-with-us/contact-modal/ContactModal";
const text =
  "Book a consultation with our experts to learn more about our Time Clock Solution";

const subText =
  "Whether you have questions about specific products, or would like to discuss working with ZKTeco as our OEM partner, distributor or dealer our knowledgeable and responsive business managers are here to help!";
const colorText = ["Time", "Clock", "Solution"];
const Team: FC = () => {
	const [isOpen, setIsOpen] = useState(false);
  const openRef = useRef<any>(null);
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={styles.strong}>
            {text.split(" ").map((item, i) => (
              <motion.p
                className={clsx({
                  [styles.color]: colorText.includes(item),
                })}
                variants={textVariant}
                initial="init"
                whileInView={"animate"}
                exit={"exit"}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
                key={i}
              >
                {item}
              </motion.p>
            ))}
          </div>
          <div className={styles.subText}>
            {subText.split(" ").map((item, i) => (
              <motion.p
                variants={textVariant}
                initial="init"
                whileInView={"animate"}
                exit={"exit"}
                transition={{ duration: 0.3, delay: i * 0.15 }}
                viewport={{ once: true, amount: 0.1 }}
                key={i}
              >
                {item}
              </motion.p>
            ))}
          </div>
        </div>
        <div className={styles.cards}>
          {data.map(({ Icon, name }, i) => (
            <motion.div
              variants={textVariant}
              initial="init"
              whileInView={"animate"}
              exit={"exit"}
              transition={{ duration: 0.3, delay: i * 0.15 }}
              viewport={{ once: true, amount: 0.1 }}
              className={styles.card}
            >
              <div className={styles.icon}>
                <Icon fill="#fff" />
              </div>
              <div className={styles.cardText}>{name}</div>
              <ButtonWithArrow
                textWidth={102}
                title="Book a demo"
                bgColor="green"
                delay={0.5}
								click={() => setIsOpen(true)}
              />
            </motion.div>
          ))}
        </div>
      </div>
			<ModalSite state={isOpen} setter={setIsOpen} exclude={openRef}>
        <ContactModal close={() => setIsOpen(false)} />
      </ModalSite>
    </div>
  );
};
export default Team;

const textVariant = {
  init: {
    opacity: 0,
    y: "30px",
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const data = [
  {
    name: "Workday",
    Icon: ({ fill }: { fill: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          d="M29.4439 45.41L34.7119 50.678C35.2308 51.1968 35.8467 51.6084 36.5247 51.8892C37.2026 52.17 37.9292 52.3146 38.6629 52.3146C39.3967 52.3146 40.1233 52.17 40.8012 51.8892C41.4791 51.6084 42.0951 51.1968 42.614 50.678C43.1328 50.1591 43.5444 49.5432 43.8252 48.8652C44.106 48.1873 44.2505 47.4607 44.2505 46.727C44.2505 45.9932 44.106 45.2666 43.8252 44.5887C43.5444 43.9108 43.1328 43.2948 42.614 42.776M37.3459 37.5079L43.931 44.093C44.9788 45.1408 46.4001 45.7295 47.882 45.7295C49.3639 45.7295 50.7851 45.1408 51.833 44.093C52.8809 43.0451 53.4696 41.6239 53.4696 40.1419C53.4696 38.66 52.8809 37.2388 51.833 36.1909L41.613 25.971C40.1314 24.4912 38.123 23.66 36.0289 23.66C33.9349 23.66 31.9265 24.4912 30.4448 25.971L28.1269 28.2889C27.079 29.3368 25.6578 29.9255 24.1759 29.9255C22.694 29.9255 21.2727 29.3368 20.2249 28.2889C19.177 27.241 18.5883 25.8198 18.5883 24.3379C18.5883 22.8559 19.177 21.4347 20.2249 20.3869L27.6264 12.9853C30.0293 10.5887 33.1629 9.06205 36.5311 8.64699C39.8993 8.23192 43.3098 8.95216 46.2226 10.6937L47.4605 11.4312C48.5821 12.1081 49.9156 12.3429 51.2008 12.0897L55.784 11.1678M55.784 8.5338L58.418 37.5079H53.15M8.3718 8.5338L5.73779 37.5079L22.8589 54.629C23.9067 55.6769 25.328 56.2656 26.8099 56.2656C28.2918 56.2656 29.713 55.6769 30.7609 54.629C31.8088 53.5811 32.3975 52.1599 32.3975 50.678C32.3975 49.1961 31.8088 47.7748 30.7609 46.727M8.3718 11.1678H29.4439"
					stroke={fill}
          stroke-width="5.26802"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Partners",
    Icon: ({ fill }: { fill: string }) => (
      <svg
        width="71"
        height="65"
        viewBox="0 0 71 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2712_56905)">
          <path
            d="M41 28H35C34.4696 28 33.9609 28.2107 33.5858 28.5858C33.2107 28.9609 33 29.4696 33 30C33 30.5304 33.2107 31.0391 33.5858 31.4142C33.9609 31.7893 34.4696 32 35 32H39C39.5304 32 40.0391 32.2107 40.4142 32.5858C40.7893 32.9609 41 33.4696 41 34C41 34.5304 40.7893 35.0391 40.4142 35.4142C40.0391 35.7893 39.5304 36 39 36H33M37 38V26M47 32C47 37.5228 42.5228 42 37 42C31.4772 42 27 37.5228 27 32C27 26.4772 31.4772 22 37 22C42.5228 22 47 26.4772 47 32Z"
            stroke={fill}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <path
          d="M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13ZM12 13C14.1217 13 16.1566 13.8429 17.6569 15.3431C19.1571 16.8434 20 18.8783 20 21M12 13C9.87827 13 7.84344 13.8429 6.34315 15.3431C4.84285 16.8434 4 18.8783 4 21"
          stroke={fill}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M59 54C61.7614 54 64 51.7614 64 49C64 46.2386 61.7614 44 59 44C56.2386 44 54 46.2386 54 49C54 51.7614 56.2386 54 59 54ZM59 54C61.1217 54 63.1566 54.8429 64.6569 56.3431C66.1571 57.8434 67 59.8783 67 62M59 54C56.8783 54 54.8434 54.8429 53.3431 56.3431C51.8429 57.8434 51 59.8783 51 62"
          stroke={fill}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25 10C24.4477 10 24 10.4477 24 11C24 11.5523 24.4477 12 25 12V10ZM59 11H60V10H59V11ZM25 12H27.125V10H25V12ZM31.375 12H35.625V10H31.375V12ZM39.875 12H44.125V10H39.875V12ZM48.375 12H52.625V10H48.375V12ZM56.875 12H59V10H56.875V12ZM58 11V13.1667H60V11H58ZM58 17.5V21.8333H60V17.5H58ZM58 26.1667V30.5H60V26.1667H58ZM58 34.8333V37H60V34.8333H58Z"
          stroke={fill}
        />
        <path
          d="M46 55H12V29"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 4"
        />
        <defs>
          <clipPath id="clip0_2712_56905">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(25 20)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];
