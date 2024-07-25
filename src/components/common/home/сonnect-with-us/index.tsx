"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

import BgSvg from "./bg/BgSvg";
import styles from "./index.module.scss";
import { useRef, useState } from "react";
import ContactModal from "./contact-modal/ContactModal";
import { acidGrotesk400, acidGrotesk500 } from "@styles/fonts";
import { ButtonWithArrow } from "@components/layout/buttons/button-with-arrow";
import ModalSite from "@components/layout/modal/Modal";

export default function ConnectWithUs() {
  const [completed, setCompleted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const openRef = useRef<any>(null);
  const handleOpen = () => {
    setIsOpen(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.fixAnimate}>
      <motion.div
        initial={{
          scale: 0.7,
        }}
        whileInView={{
          scale: 1,
        }}
        transition={{
          duration: 0.5,
          delay: 0.8,
        }}
        onAnimationComplete={() => setCompleted(true)}
        viewport={{ once: true, amount: 0.1 }}
        className={clsx(styles.connectWithUsWrapper)}
      >
        <div className={clsx(styles.connectWithUsContainer)}>
          <div className={clsx(styles.iconsContainer)}>
            <motion.div
              initial={{ opacity: 0.7 }}
              whileInView={{ opacity: 1 }}
              className={styles.iconsCarouselBlock}
            >
              {completed && <BgSvg />}
            </motion.div>
          </div>
          <div className={clsx(styles.contentContainer)}>
            <h2 className={clsx(styles.title)}>
              Want to learn how to do more with your workforce management
              solution?
            </h2>
          </div>
          <div className={clsx(styles.buttonContainer)} ref={openRef}>
            <ButtonWithArrow
              title="Schedule a Consultation"
              bgColor="green"
              delay={1.6}
              textWidth={162}
              click={() => handleOpen()}
            />
          </div>
          <img
            className={styles.bottom}
            src="/images/home/Dot Grid.png"
            alt=""
          />
        </div>
      </motion.div>
      <ModalSite state={isOpen} setter={setIsOpen} exclude={openRef}>
        <ContactModal close={() => setIsOpen(false)} />
      </ModalSite>
    </div>
  );
}
