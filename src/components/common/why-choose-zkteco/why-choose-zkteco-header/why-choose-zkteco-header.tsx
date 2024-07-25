"use client";

import "./why-choose-zkteco-header.scss";
import { motion } from "framer-motion";

function WhyChooseZktecoHeader() {
  return (
    <div className="why-choose-zkteco-header">
      <div className="container">
        <motion.h1
          initial="init"
          whileInView="animate"
          transition={{ duration: 0.5 }}
          variants={labelVariants()}
          className="why-choose-zkteco-header-title"
        >
          Industry-renowned data collection solutions
        </motion.h1>
        <motion.p
          initial="init"
          whileInView="animate"
          transition={{ duration: 0.8 }}
          variants={labelVariants(30)}
          className="why-choose-zkteco-header-description"
        >
          ZKTeco, <span>a renowned developer</span> and manufacturer of
          workforce data collection terminals in the world, delivers superior
          quality hardware, full-featured embedded device software, and a suite
          of software development tools and services that enable both industry
          partners and Workday Time Tracking customers to maximize the return on
          investment in their workforce data collection systems.
        </motion.p>
      </div>
    </div>
  );
}

const labelVariants = (y = 20) => {
  return {
    init: {
      opacity: 0,
      y,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
};

export default WhyChooseZktecoHeader;
