export const dataReviews: any[] = [];

const map = [
  {
    company: {
      logo: "/images/home/reviews/Group 1707479650.png",
      name: "Gateway Hotels",
    },
    review:
      "I've been using ZKTeco products for over a year now, and I'm thoroughly impressed. The reliability and accuracy of their biometric systems are unmatched. Customer support has also been exceptionally responsive and helpful whenever I needed assistance.",
    customer: {
      photo: "/images/home/reviews/Rectangle 34624624.png",
      name: "Alex Johnson",
      position: "IT Manager, Google LLC",
    },
  },
  {
    company: {
      logo: "/images/home/reviews/Group 1707479651.png",
      name: "Gateway Hotels",
    },
    review:
      "ZKTeco's solutions have transformed our access control systems. The installation was straightforward, and the user interface is very intuitive. It's clear that their ISO-9001 certified manufacturing impacts the quality of their products. Highly recommend for any security technology needs!",
    customer: {
      photo: "/images/home/reviews/Rectangle 346224624.png",
      name: "Maria Rodriguez",
      position: "Director of Security",
    },
  },
  // {
  //   company: {
  //     logo: "/images/home/reviews/Group 1707479650.png",
  //     name: "Gateway Hotels",
  //   },
  //   review:
  //     "I've been using ZKTeco products for over a year now, and I'm thoroughly impressed. The reliability and accuracy of their biometric systems are unmatched. Customer support has also been exceptionally responsive and helpful whenever I needed assistance.",
  //   customer: {
  //     photo: "/images/home/reviews/Rectangle 34624624.png",
  //     name: "Alex Johnson",
  //     position: "IT Manager, Google LLC",
  //   },
  // },
];

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < map.length; j++) {
    dataReviews.push(map[j]);
  }
}
