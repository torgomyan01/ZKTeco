import React from "react";
import { motion } from "framer-motion";
import { RandomKey } from "@utils/helpers";
import Image from "next/image";

interface IThisProps {
  info: {
    title: string;
    subtitle: string;
    lists: string[];
    options: string[];
  };
}

function UltimaInfoOne({ info }: IThisProps) {
  return (
    <div className="ultima-services-info">
      <motion.h3
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="ultima-services-title"
      >
        {info.title}
      </motion.h3>
      <motion.h4
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="ultima-services-subtitle "
      >
        {info.subtitle}
      </motion.h4>

      <ul className="ultima-services-list">
        {info.lists.map((item, index) => (
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
        <p className="ultima-services-info-op-title">Optional</p>
        <div className="ultima-services-info-optional">
          {info.options.map((item) => (
            <div
              key={RandomKey()}
              className="ultima-services-info-optional-item"
            >
              <Image
                src={`/images/ultima/${item}`}
                alt="ultima scan"
                width={34}
                height={34}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default UltimaInfoOne;
