"use client";
import { FC } from "react";
import styles from "./Job.module.scss";
import TestProducts from "@components/layout/test-products/Products";
import ConnectWithUs from "../home/сonnect-with-us";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import Accordion from "@components/layout/accordion/Accordion";
import JobIntro from "./intro/JobIntro";
import AccordionJobContent from "./accordion-job-content/AccordionJobContent";
const detalis = [
  "System Support Engineer",
  "Technical Support",
  "Account Executive",
  "Logistics Coordinator (Closed)",
];
const Job: FC = () => {
  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.intro}></div> */}
      <JobIntro />
      <div className={styles.content}>
        <div className={styles.second}>
          <h2 className={clsx(styles.text)}>
            {text.split(" ").map((item, i) => (
              <motion.p
                initial={"init"}
                animate={"animate"}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                }}
                variants={textVariant}
                key={i}
              >
                {item}
              </motion.p>
            ))}
          </h2>
          <div className={styles.items}>
            {detalis.map((item, i) => (
              <motion.div
                initial={"init"}
                whileInView={"animate"}
                transition={{
                  duration: 0.5,
                  delay: i * 0.2,
                }}
                viewport={{ once: true, amount: 0.1 }}
                variants={textVariant}
                key={`${item}-${i}`}
              >
                <Accordion name={item} accentColor="white">
                  {textArray.map((item, i) => (
                    <AccordionJobContent
                      heading={item.heading}
                      content={item.content}
                      key={i}
                    />
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <ConnectWithUs />
    </div>
  );
};
export default Job;

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

export type TypedText = {
  heading?: string;
  content: string | string[];
};

const textArray: TypedText[] = [
  {
    content:
      "We have an immediate opening for an Account Executive to develop relationships with our clients by helping them maximize the value of our solution. The primary indicators of a successful Relationship Manager are reference-ability, retention, and revenue growth. The Executive Relationship Manager takes a lead role in the planning, managing, and measuring the ongoing success of our installed client base.",
  },
  {
    content:
      "This is a Direct-hire, Onsite, Full-time position working from our office in Piscataway, N.J. and is dependent on candidate’s overall qualifications. Must be authorized to work in the USA.",
  },
  {
    heading: "Company Overview",
    content:
      "ZKTeco, the largest developer and manufacturer of workforce data collection terminals in the world, delivers market-leading hardware, full-featured embedded device software, and a suite of enterprise-level development tools and services to workforce management software providers and human capital management corporate customers, enabling them to maximize their return on investment in time and attendance data collection. <br/> With 20+ years in business, ZKTeco’s deep expertise in hardware, software, and integration processes, combined with our innovative product design and large-scale manufacturing capabilities, gives our industry partners and customers the most cost-effective, highest quality data collection solution on the market.",
  },
  {
    heading: "Primary Responsibilities: (other duties may be assigned)",
    content: Array(10).fill(
      "Develops deep insight into respective customers and their business.",
    ),
  },
  {
    heading: "Desired skills and Experience",
    content: Array(10).fill("Passion for digital and new technology."),
  },
  {
    content:
      "Position offers a competitive hourly rate/salary based on relevant experience. Please submit your application using the form below. Only shortlisted candidates will be contacted. No phone calls, please.",
  },
];

const text = "Current Job Opportunities";
