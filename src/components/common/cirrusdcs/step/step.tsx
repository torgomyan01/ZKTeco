"use client";
import "./step.scss";
import React, { useEffect, useRef, useState } from "react";
import { RandomKey } from "@utils/helpers";

import { motion, useScroll, useTransform } from "framer-motion";
import StepItem from "@components/common/cirrusdcs/step/step-item";
import { stepInfo } from "@components/common/cirrusdcs/step/data";

const steps = [
  "Expedite Time to Market",
  "Ensure Data Accuracy",
  "Increase Time Clock Visibility",
  "Support and Scalability Comes S...",
];

function Step() {
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
    <div className="step one">
      <div ref={elementRef}>
        <div className="container">
          <div className="step-navbar">
            <motion.div
              style={{ width: progressWidth }}
              className="step-navbar-loading"
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

          <div ref={reffer}>
            {stepInfo.map((item) => (
              <StepItem key={RandomKey()} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step;
