import Image from "next/image";
import PrintCode from "@components/common/cirrusdcs/step/print-code";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RandomKey } from "@utils/helpers";

interface IThisProps {
  item: {
    title: React.JSX.Element | string;
    image: React.JSX.Element | string;
    list: string[];
  };
}

function StepItem({ item }: IThisProps) {
  const reffer = useRef(null);

  const { scrollYProgress } = useScroll({
    target: reffer,
    offset: ["start end", "end start"],
  });
  const progressWidth = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);
  return (
    <motion.div
      ref={reffer}
      className="row align-items-center justify-content-between step-item"
    >
      <div className="col-12 col-lg-5 col-xl-6 col-xxl-4">
        <button className="btn btn-status">
          <Image src="/images/cup.svg" alt="cup.svg" width={24} height={24} />
          Advantages
        </button>
        <h3 className="step-title">
          {item.title}
          <motion.span style={{ width: progressWidth }}>
            {item.title}
          </motion.span>
        </h3>
        <ul className="step-list">
          {item.list.map((itemList) => (
            <li key={RandomKey()}>
              <span>
                <i className="fa-solid fa-arrow-right" />
              </span>
              {itemList}
            </li>
          ))}
        </ul>
        <div>
          <button className="btn btn-green mt-5">
            Schedule a Consultation
            <span>
              <i className="fa-regular fa-arrow-right" />
            </span>
          </button>
        </div>
      </div>
      <div className="col-12 col-lg-7 col-xl-6">{item.image}</div>
    </motion.div>
  );
}

export default StepItem;
