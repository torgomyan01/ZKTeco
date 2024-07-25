import React from "react";
import { motion } from "framer-motion";
import { RandomKey } from "@utils/helpers";
import ServicesInfoListItem from "@components/common/time-track/services/ServicesInfoListItem";

const listServices = [
  {
    title: "Request Time Off",
    text: "Flexible and multiple level Job and Labor tracking to help optimize our workforce management operations.",
  },
  {
    title: "View Accrual Balance",
    text: "Flexible and multiple level Job and Labor tracking to help optimize our workforce management operations.",
  },
  {
    title: "View Shift Schedule",
    text: "Flexible and multiple level Job and Labor tracking to help optimize our workforce management operations.",
  },
  {
    title: "View History Punch",
    text: "Flexible and multiple level Job and Labor tracking to help optimize our workforce management operations.",
  },
  {
    title: "View Messages",
    text: "Flexible and multiple level Job and Labor tracking to help optimize our workforce management operations.",
  },
];

function InfoTwo() {
  return (
    <div className="services-info">
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="services-title"
      >
        Intuitive Employee Self-Service
      </motion.h3>

      <div className="services-info-list">
        {listServices.map((item, index) => (
          <ServicesInfoListItem
            key={RandomKey()}
            title={item.title}
            text={item.text}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default InfoTwo;
