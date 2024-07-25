import React from "react";
import { motion } from "framer-motion";
import { RandomKey } from "@utils/helpers";

const listServices = [
  "Large 10” crisp, high-resolution capacitive touchscreen",
  "Powerful 8-core processor",
  "2GB of RAM/16GB Flash memory",
  "Touch-based optical fingerprint reader",
  "Infrared and visible light facial biometric that can recognize users in under one second",
  "Touchless palm biometric technology",
  "Supports all major multi-frequency card types with a multi-technology card reader, Barcode, and Magnetic card readers",
  "Built-in speaker and microphone with noise cancellation Programmable LED indicator",
  "Optional Thermal Imaging Reader",
  "Dual-band Wi-Fi and Gigabit Ethernet",
  "12V AC Power adaptor, large capacity Battery Backup, and PoE+",
  "Android 9 operating system",
];

function InfoTree() {
  return (
    <div className="services-info">
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="services-title"
      >
        High performance, Technologically Advanced, Fully Customizable &
        Completely Secure
      </motion.h3>
      <motion.h4
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="services-subtitle "
      >
        Ultima siries 10
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

export default InfoTree;
