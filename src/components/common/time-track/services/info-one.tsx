import React from "react";
import { motion } from "framer-motion";
import { RandomKey } from "@utils/helpers";
import ServicesInfoListItem from "@components/common/time-track/services/ServicesInfoListItem";
import styles from "@components/common/event/Event.module.scss";

const listServices = [
  {
    title: "Check In / Time Tracking",
    text: "Flexible and multiple level Job and Labor tracking to help optimize our workforce management operations.",
  },
  {
    title: "Meal Start / Job and Labor Tracking",
    text: "Flexible and multiple level Job and Labor tracking to help optimize our workforce management operations.",
  },
  {
    title: "Break Start / Department Transfer",
    text: "Flexible and multiple level Job and Labor tracking to help optimize our workforce management operations.",
  },
  {
    title: "Tip Entry",
    text: "Flexible and multiple level Job and Labor tracking to help optimize our workforce management operations.",
  },
  {
    title: "Shift Lockout",
    text: "Flexible and multiple level Job and Labor tracking to help optimize our workforce management operations.",
  },
  {
    title: "Meal or Break Lockout",
    text: "Flexible and multiple level Job and Labor tracking to help optimize our workforce management operations.",
  },
  {
    title: "Punch Time Rounding",
    text: "Flexible and multiple level Job and Labor tracking to help optimize our workforce management operations.",
  },
];

function InfoOne() {
  return (
    <div className="services-info">
      <motion.h3
        initial={"init"}
        whileInView={"animate"}
        transition={{
          duration: 0.5,
          delay: 0.7,
        }}
        viewport={{ once: true, amount: 0.1 }}
        animate={{ opacity: 1 }}
        className="services-title"
      >
        Accurate, Reliable Timekeeping
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

export default InfoOne;
