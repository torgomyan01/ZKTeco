import PrintCode from "@components/common/cirrusdcs/step/print-code";
import Image from "next/image";
import React from "react";

export const stepInfo = [
  {
    title: (
      <>
        Expedite Time <br /> to Market
      </>
    ),
    image: <PrintCode />,
    list: [
      "Typically, it takes many months, if not years, to build a device management solution to work with a specific brand of time clocks, especially without dedicated development resources. ",
      "Our CirrusDCS API can be implemented in a few weeks, enabling our partners to get to market quickly, with significant cost savings.",
    ],
  },
  {
    title: `Ensure Data Accuracy`,
    image: (
      <Image
        src="/images/Ensure-Data-Accuracy.svg"
        alt="Ensure Data Accuracy"
        width="390"
        height="369"
        className="step-item-img"
      />
    ),
    list: [
      "With rule-based device management, employee identity and punch data are immediately validated against work and pay rules at the terminal, enabling your end customer to minimize unauthorized labor expense and manage compliance",
    ],
  },
  {
    title: (
      <>
        Increase Time Clock <br /> Visibility
      </>
    ),
    image: (
      <Image
        src="/images/Increase-Time-Clock-Visibilit.svg"
        alt="Ensure Data Accuracy"
        width="390"
        height="369"
        className="step-item-img"
      />
    ),
    list: [
      "View employee and time clock activity at a glance with the one-stop dashboard, including punch data, employee updates such as new hires, terminations and transfers, and clock status and utilization. React to terminal problems and employee issues immediately with real-time monitoring and notifications.",
    ],
  },
  {
    title: (
      <>
        Support and Scalability <br /> Comes Standard
      </>
    ),
    image: (
      <Image
        src="/images/Support-and-Scalability.svg"
        alt="Ensure Data Accuracy"
        width="390"
        height="369"
        className="step-item-img"
      />
    ),
    list: [
      "CirrusDCS is designed to provide you with the scalability and flexibility your business needs and is capable of handling millions of punches from thousands of timeclock devices on your business’s network while retaining the flexibility to seamlessly add devices to the network as-needed.",
      "All configuration changes are carefully managed to ensure the highest-level of customer support and data security.",
    ],
  },
];
