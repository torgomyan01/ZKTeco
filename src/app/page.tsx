"use client";
import MainTemplate from "@components/layout/main-template/main-template";
import Hero from "@components/common/home/hero";
import Advantages from "@components/common/home/advantages";
import Strengths from "@components/common/home/strengths";
import Reviews from "@components/common/home/reviews";
// import ConnectWithUs from "@components/common/home/connect-with-us";
import Readers from "@components/common/home/new-readers/readers";
import Team from "@components/common/home/team/Team";
import { useEffect, useState } from "react";

export default function Home() {
  const [color, setColor] = useState<string>("white");
	console.log(color)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition < 1000) {
        setColor("white");
      } else if (scrollPosition >= 1600 && scrollPosition < 2200) {
        setColor("black");
      } else if (scrollPosition >= 2200 && scrollPosition < 3000) {
        setColor("white");
      } else {
        setColor("black");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set the initial color based on the initial scroll position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MainTemplate menuColor={color as any} transparent>
      <Hero />
      <Advantages />
      <Readers />
      <Strengths />
      <Reviews />
      <Team />
    </MainTemplate>
  );
}
