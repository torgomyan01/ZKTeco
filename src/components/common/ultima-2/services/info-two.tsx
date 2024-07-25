import React from "react";
import { motion } from "framer-motion";
import { RandomKey } from "@utils/helpers";

const listServices = [
  "5” crisp capacitive touch screen",
  "Touch-based optical fingerprint reader",
  "Visible light facial biometric that can identify users in under one second",
  "Supports all major multi-frequency card types with a multi-technology card reader",
  "Built-in speaker and microphone with noise cancellation",
  "Programmable LED indicator",
  "Powerful 8-core processor",
  "2GB RAM/16GB Flash memory",
  "12V AC power and PoE+",
  "Dual-band Wi-Fi, 10/100 Ethernet",
  "Android 10 operating system",
];

function InfoTwo() {
  return (
    <div className="services-info">
      <motion.h3
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="services-title"
      >
        Next-generation 7-inch flexible time clock with new and innovative
        facial and biometric technology
      </motion.h3>
      <motion.h4
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="services-subtitle "
      >
        Ultima siries 7
      </motion.h4>

      <ul className="services-list">
        {listServices.map((item, index) => (
          <motion.li
            initial={{ opacity: 0, x: index * 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.1 }}
            key={RandomKey()}
          >
            <span>
              <i className="fa-solid fa-arrow-right" />
            </span>
            {item}
          </motion.li>
        ))}
      </ul>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="mt-2 mt-md-4"
      >
        <button className="btn btn-while">
          Datasheets
          <span>
            <i className="fa-regular fa-arrow-right" />
          </span>
        </button>
      </motion.div>
    </div>
  );
}

export default InfoTwo;
