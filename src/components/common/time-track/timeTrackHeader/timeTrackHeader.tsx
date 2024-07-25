"use client";
import React, { useEffect, useState } from "react";
import "./timeTrackHeader.scss";
import Image from "next/image";
import { motion } from "framer-motion";

function UltimaHeader() {
  const [windowWidth, setWindowWidth] = useState(0);

  const [activeSolid, setActiveSolid] = useState<boolean>(false);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", function () {
      setWindowWidth(window.innerWidth);
    });

    return () => {
      window.addEventListener("resize", function () {
        setWindowWidth(window.innerWidth);
      });
    };
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
            transition={{ duration: 2, delay: 3 }}
            className="ultima-header-title"
          >
            {"TimeTrack".split("").map((el, i) => (
              <motion.span
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.25,
                  delay: 3 + i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 4 }}
            className="ultima-header-subtitle"
          >
            Time Clock features to meet any end-user business and compliance
            requirements
          </motion.p>
          <motion.div
            initial={{ opacity: 0.5, scale: 0.5, y: 200 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 2, delay: 2.8 }}
            className="d-flex justify-content-center mt-5 flex-column align-items-center"
          >
            <Image
              src="/images/time-track/time-track-header-image.png"
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
            Let the experts handle your time clocks needs
          </h1>
          <h4 className="experts-description">
            TimeTrack is a time clock and data collection application for the
            Android platform that provides our partners and customers with the
            features they need for accurate, real-time collection of data and
            rich self-service functionality.
          </h4>
        </div>
      </div>
    </>
  );
}

export default UltimaHeader;
