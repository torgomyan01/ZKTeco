"use client";

import React, { useState } from "react";
import "./why-choose-zkteco-connect.scss";
import Image from "next/image";
import { SITE_URL } from "@utils/consts";
import Link from "next/link";
import styles from "@components/common/home/сonnect-with-us/index.module.scss";
import BgSvg from "@components/common/home/сonnect-with-us/bg/BgSvg";
import { motion } from "framer-motion";
import clsx from "clsx";

function WhyChooseZktecoConnect() {
  const [completed, setCompleted] = useState(false);
  return (
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
    >
      <div className="why-choose-connect">
        <motion.div
          initial={{ opacity: 0.7 }}
          whileInView={{ opacity: 1 }}
          className={styles.iconsCarouselBlock}
        >
          {completed && <BgSvg />}
        </motion.div>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <Image
              src="/images/why-choose-zkteco/logo.svg"
              alt="logo.svg"
              width={150}
              height={50}
            />
          </div>
          <h3 className="why-choose-connect-title">Connect with us</h3>
          <h4 className="why-choose-connect-subtitle">
            Want to learn how to do more about our time clock solutions to
            enhance your workforce management?
          </h4>
          <div className="d-flex justify-content-center align-items-center">
            <Link href={SITE_URL.CONTACT_US}>
              <button className="btn btn-green mt-5">
                Schedule a Consultation
                <span>
                  <i className="fa-regular fa-arrow-right" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default WhyChooseZktecoConnect;
