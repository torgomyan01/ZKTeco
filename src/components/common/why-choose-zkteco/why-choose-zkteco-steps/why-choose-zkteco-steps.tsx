"use client";

import "./why-choose-zkteco-steps.scss";
import React, { useEffect, useRef, useState } from "react";
import { RandomKey } from "@utils/helpers";
import { motion, useScroll, useTransform } from "framer-motion";
import StepsRow from "@components/common/why-choose-zkteco/why-choose-zkteco-steps/stepsRow";
import SvgAnim from "@components/common/why-choose-zkteco/why-choose-zkteco-steps/svg-anim";
import { data } from "@components/common/why-choose-zkteco/why-choose-zkteco-steps/data";

const steps = [
  "Industry Expertise",
  "Comprehensive Suite",
  "A Certified Solution ",
  "Lower Total Cost of",
  "Full-Scale Manu",
  "Committed Nor",
];

function WhyChooseZktecoSteps() {
  const reffer = useRef(null);

  const { scrollYProgress } = useScroll({
    target: reffer,
    offset: ["start end", "end start"],
  });
  const progressWidth = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);

  const elementRef = useRef(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    const stepsCount = 100 / steps.length;
    scrollYProgress.onChange((value) => {
      const percent = Math.round(value * 100);

      const stepsCountCalc = steps.map(
        (item, index) => (index + 1) * stepsCount - stepsCount,
      );

      stepsCountCalc.forEach((i, index) => {
        if (percent >= i) {
          setActiveStep(index);
        }
        if (percent < stepsCountCalc[0]) {
          setActiveStep(1);
        }
      });
    });
  }, [scrollYProgress]);

  return (
    <div ref={elementRef} className="step">
      <div>
        <div className="container">
          <div className="step-navbar">
            <motion.div
              className="step-navbar-loading"
              style={{ width: progressWidth }}
            />
            {steps.map((item, index) => (
              <div
                key={RandomKey()}
                className={`step-navbar-item ${index === activeStep ? "active" : ""}`}
              >
                <span>0{index + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="d-block d-lg-none mb-5">
            <SvgAnim />
          </div>
          <div ref={reffer}>
            {data.map((item) => (
              <StepsRow key={RandomKey()} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseZktecoSteps;
