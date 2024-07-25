interface IProgressBar {
  num: string;
  title: string;
}

interface IStrengthsBoard {
  id: string;
  mainTitle: string;
  strengthsList: Array<{
    id: string;
    title: string;
  }>;
  details: {
    title: string;
    description: string;
    img?: string;
  };
}

export const dataProgressBar: Array<IProgressBar> = [
  {
    num: "01",
    title: "Fully Integrated Manufacturing Process",
  },
  {
    num: "02",
    title: "Flexible Product Portfolio",
  },
  {
    num: "03",
    title: "Lower Development Cost",
  },
];

export const dataStrengths: Array<IStrengthsBoard> = [
  {
    id: "manufacturing",
    mainTitle:
      "ISO-9001 Certified Facility Ensures Quality, Availability, and Cost Savings",
    strengthsList: [
      {
        id: "controls",
        title: "ZKTeco controls entire manufacturing process.",
      },
      {
        id: "production",
        title: "Internal production enhances economies, relationships.",
      },
      {
        id: "production",
        title: "ZKTeco secures product longevity strategically.",
      },
    ],
    details: {
      title: "Fully Integrated Manufacturing Process",
      description:
        "ISO-9001 Certified, Fully-Integrated Manufacturing for Enhanced Quality, Availability, and Cost Savings",
      img: "/images/home/Group 1707479638.png",
    },
  },
  {
    id: "portfolio",
    mainTitle:
      "Comprehensive Time Tracking Solutions for Businesses of All Sizes",
    strengthsList: [
      {
        id: "controls",
        title: "Wide selection of Time Tracking terminals.",
      },
      {
        id: "production",
        title: "Includes facial, fingerprint, and card technologies.",
      },
      {
        id: "production",
        title: "Tailored to meet diverse business needs.",
      },
    ],
    details: {
      title: "Fully Integrated Manufacturing Process",
      description:
        "ISO-9001 Certified, Fully-Integrated Manufacturing for Enhanced Quality, Availability, and Cost Savings",
      img: "/images/home/Group 1707479638(1).png",
    },
  },
  {
    id: "cost",
    mainTitle:
      "Cost-Saving Software Solutions: Tools, APIs, Training, Customization, Partner Benefits",
    strengthsList: [
      {
        id: "controls",
        title: "Time Clock Application",
      },
      {
        id: "production",
        title: "Cirrus DCS Features.",
      },
      {
        id: "production",
        title: "Data Communication API.",
      },
    ],
    details: {
      title: "Fully Integrated Manufacturing Process",
      description:
        "ISO-9001 Certified, Fully-Integrated Manufacturing for Enhanced Quality, Availability, and Cost Savings",
      img: "/images/home/Group 1707479638(2).png",
    },
  },
];
