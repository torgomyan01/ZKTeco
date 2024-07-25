"use client";
import React, { useEffect, useState } from "react";
import "./ultima-header-header.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import SliderFunctions from "@components/layout/slider-functions/slider-functions";

function UltimaHeader() {
  const [windowWidth, setWindowWidth] = useState(0);

  const [activeSolid, setActiveSolid] = useState<boolean>(false);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    setTimeout(() => setActiveSolid(true), 2500);
  }, []);

  return (
    <>
      <div className="ultima-header">
        <div className="ultima-header-solid">
          <div
            className="ultima-header-solid-blur"
            style={{
              backgroundSize: `${windowWidth}px`,
            }}
          />
          <div
            className={`ultima-header-solid-solid ${activeSolid ? "active" : ""}`}
            style={{
              backgroundSize: `${windowWidth}px`,
            }}
          />
        </div>
        <div className="ultima-header-solid two">
          <div
            className="ultima-header-solid-blur"
            style={{
              backgroundSize: `${windowWidth}px`,
            }}
          />
          <div
            className={`ultima-header-solid-solid ${activeSolid ? "active" : ""}`}
            style={{
              backgroundSize: `${windowWidth}px`,
            }}
          />
        </div>
        <div className="container position-relative z-1">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="ultima-header-title"
          >
            Ultima ZKTeco
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
            className="ultima-header-subtitle"
          >
            The future of workspace DATA COLLECTION
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
            className="d-flex justify-content-center mt-5 flex-column align-items-center"
          >
            <SliderFunctions />
            <Image
              src="/images/ultima/ultima-header-img.png"
              alt="Ultima ZKTeco"
              width={537}
              height={538}
              className="ultima-header-image"
            />
          </motion.div>
        </div>
      </div>

      <div className="experts">
        <div className="container">
          <h1 className="experts-title">
            A Flexible, Secure and Powerful Workforce Management Terminal
          </h1>
          <h4 className="experts-description">
            Designed and built for today’s workforce; Ultima features an
            intuitive display, a robust operating system and flexible features
            that allow for a streamlined time clock integration that reduces
            time to market and increases margins
          </h4>
        </div>
      </div>
    </>
  );
}

export default UltimaHeader;
