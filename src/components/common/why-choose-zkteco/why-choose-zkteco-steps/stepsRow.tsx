import Image from "next/image";
import Link from "next/link";
import { SITE_URL } from "@utils/consts";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RandomKey } from "@utils/helpers";

interface IThisProps {
  item: {
    title: React.JSX.Element | string;
    list: string[];
    image: string | any;
  };
}
function StepsRow({ item }: IThisProps) {
  const reffer = useRef(null);

  const { scrollYProgress } = useScroll({
    target: reffer,
    offset: ["start end", "end start"],
  });
  const progressWidth = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <motion.div
      ref={reffer}
      className="row align-items-center justify-content-between step-row px-0"
    >
      <div className="col-12 col-lg-5 col-xl-6 col-xxl-4 step-info">
        <button className="btn btn-status-outline">
          <Image
            src="/images/icons/cup-solid.svg"
            alt="cup.svg"
            width={24}
            height={24}
          />
          Our Strengths
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
          <Link href={SITE_URL.CONTACT_US}>
            <button className="btn btn-green mt-5">
              Schedule a Consultation
              <span>
                <i className="fa-regular fa-arrow-right" />
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className="col-12 col-lg-7 col-xl-6 mt-4 mt-lg-0 d-none d-lg-flex justify-content-end px-0">
        <Image
          src={item.image}
          alt="Image"
          width={1264}
          height={1020}
          className="mexanizim"
        />
      </div>
    </motion.div>
  );
}

export default StepsRow;
