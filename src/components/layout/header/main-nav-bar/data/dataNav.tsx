const delay = 0.6;

export const dataNav = [
  {
    id: "products",
    title: "Products",
    hasMenu: true,
    delay,
  },
  {
    id: "workday",
    title: "Workday",
    hasMenu: true,
    delay: delay + 0.1,
  },
  {
    id: "support",
    title: "Support",
    hasMenu: true,
    delay: delay + 0.2,
  },
  {
    id: "about_us",
    title: "About Us",
    hasMenu: true,
    delay: delay + 0.3,
  },
];
export const navigateLinks = [
  {
    id: "products",
    title: "Product",
    hasMenu: true,
    delay: delay + 0.1,
    path: "/products",
    colums: [
      {
        title: "Ultima Series 2:",
        links: [
          {
            img: "/images/nav-img/new/Group 1707479684(1).png",
            name: "Ultima 5",
            subName: "Time Tracking terminals",
            path: "/terminals/ultima",
          },
          {
            img: "/images/nav-img/new/Group 1707479682.png",
            name: "Ultima 10",
            subName: "Time Tracking terminals",
            path: "/products/time-track",
          },
          {
            img: "/images/nav-img/new/Group 1707479683(1).png",
            name: "Ultima 7",
            subName: "Time Tracking terminals",
            path: "/terminals/ultima",
          },
          {
            img: "/images/nav-img/new/Group 1707479683(1).png",
            name: "Ultima 7P",
            subName: "Time Tracking terminals",
            path: "/terminals/ultima",
          },
        ],
      },
      {
        title: "Other:",
        links: [
          {
            img: "/images/nav-img/new/Group 1707479680(1).png",
            name: "Terminals by Technology",
            subName: "Time Tracking terminals",
            path: "/landing",
          },
          {
            img: "/images/nav-img/new/Group 1707479681(1).png",
            name: "Cirrus DCS for HCM",
            subName: "Time Tracking terminals",
            path: "/solutions/cirrusdcs-for-hcm",
          },
          {
            img: "/images/nav-img/new/Group 1707479681(1).png",
            name: "TimeTrack",
            subName: "Time Tracking terminals",
            path: "/solutions/time-track",
          },
          {
            img: "/images/nav-img/new/Group 1707479681(1).png",
            name: "Product Development",
            subName: "Time Tracking terminals",
            path: "/products",
          },
        ],
      },
    ],
  },
  {
    id: "workday",
    title: "Workday",
    hasMenu: true,
    delay: delay + 0.1,
    colums: [
      {
        links: [
          {
            img: "/images/nav-img/new/Group 1707479682(1).png",
            name: "Cirrus DCS for Workday",
            subName: "Time Tracking terminals",
            path: "/solutions/cirrusdcs-for-hcm",
          },
        ],
      },
      {
        links: [
          {
            img: "/images/nav-img/new/Group 1707479680(2).png",
            name: "Ultima",
            subName: "Time Tracking terminals",
            path: "/terminals/ultima",
          },
        ],
      },
    ],
  },
  {
    id: "support",
    title: "Support",
    hasMenu: true,
    delay: delay + 0.1,
    colums: [
      {
        links: [
          {
            img: "/images/nav-img/new/Group 1707479682(1).png",
            name: "Workday Customer Support",
            subName: "Time Tracking terminals",
            path: "/landing",
          },
        ],
      },
      {
        links: [
          {
            img: "/images/nav-img/new/Group 1707479680(2).png",
            name: "ZK Data Collection Support",
            subName: "Time Tracking terminals",
            path: "/landing",
          },
        ],
      },
    ],
  },
  {
    id: "about_us",
    title: "About us",
    hasMenu: true,
    delay: delay + 0.1,
    colums: [
      {
        links: [
          {
            img: "/images/nav-img/new/Group 1707479682(2).png",
            name: "Why ZKTeco?",
            subName: "Time Tracking terminals",
            path: "/why-choose-zkteco",
          },
          {
            img: "/images/nav-img/new/Group 1707479682(2).png",
            name: "Blogs",
            subName: "Time Tracking terminals",
            path: "/blog",
          },
          {
            img: "/images/nav-img/new/Group 1707479682(2).png",
            name: "Career Opportunities",
            subName: "Time Tracking terminals",
            path: "/job",
          },
        ],
      },
      {
        links: [
          {
            img: "/images/nav-img/new/Group 1707479680(2).png",
            name: "Resources",
            subName: "Time Tracking terminals",
            path: "/res",
          },
          {
            img: "/images/nav-img/new/Group 1707479680(2).png",
            name: "Events",
            subName: "Time Tracking terminals",
            path: "/events",
          },
        ],
      },
    ],
  },
];
