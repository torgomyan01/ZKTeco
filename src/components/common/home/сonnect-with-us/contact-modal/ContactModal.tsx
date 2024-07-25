import clsx from "clsx";
import { motion } from "framer-motion";
import { FC, useState } from "react";

import styles from "./ContactModal.module.scss";
import { ButtonWithArrow } from "@components/layout/buttons/button-with-arrow";

interface IContactModal {
  close: () => void;
}

const ContactModal: FC<IContactModal> = ({ close }) => {
  const buttons = [
    "Workday End User",
    "Workforce Management Software Provider",
    "Time Attendance Dealer",
    "Workday - Account Manager",
    "Workday - Implementer",
    "Other",
  ];
  const text = "Do you have questions about how our solutions can help you?";
  const [state, setState] = useState(buttons[0]);
  return (
    <div className={styles.contactModal}>
      <h2>Do you have questions about how our solutions can help you?</h2>
      <div className={styles.close} onClick={close}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="30" height="30" rx="15" fill="#EDEDED" />
          <path
            d="M9.33887 9.33887L20.6609 20.6609"
            stroke="black"
            strokeOpacity="0.4"
            strokeWidth="1.41525"
            strokeLinecap="round"
          />
          <path
            d="M20.6611 9.33887L9.3391 20.6609"
            stroke="black"
            strokeOpacity="0.4"
            strokeWidth="1.41525"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <form className={styles.form}>
        <motion.div
          initial={"init"}
          whileInView={"animate"}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
          viewport={{ once: true, amount: 0.1 }}
          variants={mainVariant}
          className={styles.inputGroup}
        >
          <div className={styles.label}>
            <p>Company</p>
            <span>*</span>
          </div>
          <input placeholder="Last Name" className={styles.input} />
        </motion.div>
        <motion.div
          initial={"init"}
          whileInView={"animate"}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
          viewport={{ once: true, amount: 0.1 }}
          variants={mainVariant}
          className={clsx(styles.inputGroup, styles.miniInput)}
        >
          <div className={styles.label}>
            <p>First name</p>
            <span>*</span>
          </div>
          <input placeholder="Enter your first name" className={styles.input} />
        </motion.div>
        <motion.div
          initial={"init"}
          whileInView={"animate"}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
          viewport={{ once: true, amount: 0.1 }}
          variants={mainVariant}
          className={clsx(styles.inputGroup, styles.miniInput)}
        >
          <div className={styles.label}>
            <p>last name</p>
            <span>*</span>
          </div>
          <input placeholder="Enter your last name" className={styles.input} />
        </motion.div>
        <motion.div
          initial={"init"}
          whileInView={"animate"}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
          viewport={{ once: true, amount: 0.1 }}
          variants={mainVariant}
          className={styles.inputGroup}
        >
          <div className={styles.label}>
            <p>EMAIL</p>
            <span>*</span>
          </div>
          <input placeholder="Enter your first name" className={styles.input} />
        </motion.div>
      </form>
      <div className={styles.customer}>
        <motion.header
          initial={"init"}
          whileInView={"animate"}
          transition={{
            duration: 0.5,
            delay: 0.2 * 0.1,
          }}
          viewport={{ once: true, amount: 0.1 }}
          variants={mainVariant}
        >
          <h4>Customer type</h4>
          <p>*</p>
        </motion.header>
        <div className={styles.items}>
          {buttons.map((item, i) => (
            <motion.button
              initial={"init"}
              whileInView={"animate"}
              transition={{
                duration: 0.5,
                delay: i * 0.2,
              }}
              viewport={{ once: true, amount: 0.1 }}
              variants={mainVariant}
              key={i}
              onClick={() => setState(item)}
              className={clsx({
                [styles.active]: state === item,
              })}
            >
              {item}
            </motion.button>
          ))}
        </div>
      </div>
      <div className={styles.contactButton}>
        {" "}
        <ButtonWithArrow
          title="Schedule a Consultation"
          bgColor="green"
          delay={1.6}
          textWidth={202}
        />
      </div>
      <motion.div
        initial={"init"}
        whileInView={"animate"}
        transition={{
          duration: 0.5,
          delay: 0.5 * 0.1,
        }}
        viewport={{ once: true, amount: 0.1 }}
        variants={mainVariant}
        className={styles.politic}
      >
        This site is protected by reCAPTCHA and the Google 
        <span>Privacy Policy</span> and <span>Terms of Service</span>
         apply.
      </motion.div>
    </div>
  );
};
export default ContactModal;

const mainVariant = {
  init: {
    opacity: 0,
    y: "30px",
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};
