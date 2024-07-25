"use client";

import "./header.scss";
import Image from "next/image";
import IconUser from "@components/common/ultima-2/header/icon-user";
import Fingerprin from "@components/common/ultima-2/header/fingerprin";
import Scan from "@components/common/ultima-2/header/scan";
import Card from "@components/common/ultima-2/header/card";
import Temperature from "@components/common/ultima-2/header/temperature";
import Voice from "@components/common/ultima-2/header/voice";
import FooG from "@components/common/ultima-2/header/foo-g";
import clsx from "clsx";
import { useState } from "react";
import UltimaSeven from "@components/common/ultima-2/header/ultima-seven";
import Ultima10 from "@components/common/ultima-2/header/ultima-10";
import Ultima5 from "@components/common/ultima-2/header/ultima-5";

function HeaderHome() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  setInterval(() => {
    setActiveIndex(activeIndex + 1);
    if (activeIndex === 6) {
      setActiveIndex(0);
    }
  }, 3000);

  return (
    <header className="header">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <Image
            src="/ultima-logo.svg"
            alt="ultimaLogo"
            width={143}
            height={32}
          />
        </div>
        <h1 className="header-title">Ultima siries 2</h1>
        <p className="header-description">
          Re-imagined TIme Clock Siries for the Modern Workforce
        </p>
        <div className="d-flex justify-content-center">
          <div className="d-flex justify-content-center align-items-center mt-39 flex-wrap">
            <div
              className={clsx({
                ["header-animation-icon"]: true,
                ["active"]: activeIndex === 0,
              })}
            >
              <IconUser />
            </div>
            <div
              className={clsx({
                ["header-animation-icon"]: true,
                ["active"]: activeIndex === 1,
              })}
            >
              <Fingerprin />
            </div>
            <div
              className={clsx({
                ["header-animation-icon"]: true,
                ["active"]: activeIndex === 2,
              })}
            >
              <Scan />
            </div>
            <div
              className={clsx({
                ["header-animation-icon"]: true,
                ["active"]: activeIndex === 3,
              })}
            >
              <Card />
            </div>
            <div
              className={clsx({
                ["header-animation-icon"]: true,
                ["active"]: activeIndex === 4,
              })}
            >
              <Temperature />
            </div>
            <div
              className={clsx({
                ["header-animation-icon"]: true,
                ["active"]: activeIndex === 5,
              })}
            >
              <Voice />
            </div>
            <div
              className={clsx({
                ["header-animation-icon"]: true,
                ["active"]: activeIndex === 6,
              })}
            >
              <FooG />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center header-products">
          <UltimaSeven />
          <Ultima10 />
          <Ultima5 />
        </div>
      </div>
    </header>
  );
}

export default HeaderHome;
