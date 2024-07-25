"use client";
import React, { useEffect, useState } from "react";
import "./ultima-header-header.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import SliderFunctions from "@components/layout/slider-functions/slider-functions";
import FingerSvg from "./icons/FingerSvg";
import CardSvg from "./icons/CardSvg";
import parse from "html-react-parser";
function UltimaHeader() {
  const [windowWidth, setWindowWidth] = useState(0);

  const [activeSolid, setActiveSolid] = useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (activeSolid === 2) {
        setActiveSolid(0);
      } else {
        setActiveSolid(activeSolid + 1);
      }
    }, 5000);
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
            ZK Fingerprint Sensor, Proximity Card Reader & PIN
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
            className="d-flex justify-content-center mt-5 flex-column align-items-center"
          >
            <Image
              src="/images/products/US905-Series.png"
              alt="US905-Series"
              width={537}
              height={538}
              className="ultima-header-image"
            />
          </motion.div>
        </div>
      </div>
      <div className="layout">
        <div className="us-product-items">
          {windowWidth >= 800 ? (
            <>
              {" "}
              {data.map(({ text, Icon }, i) => (
                <div className="tag" key={i}>
                  <button className={`${i === activeSolid ? "active" : ""}`}>
                    <Icon fill={i === activeSolid ? "#fff" : "#1212124D"} />
                  </button>
                  <div
                    className={`desc__tag ${i === activeSolid ? "textActive" : ""}`}
                  >
                    <p>{parse(text)}</p>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="tag">
              <button className={`active`}>
                {data[activeSolid].Icon({ fill: "#fff" })}
              </button>
              <div className={`desc__tag textActive`}>
                <p>{parse(data[activeSolid].text)}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default UltimaHeader;

const data: any[] = [
  {
    Icon: ({ fill }: { fill: string }) => <FingerSvg fill={fill} />,
    text: "ZK Fingerprint Sensor <br/> Proximity Card Reader  &  PIN",
  },
  {
    Icon: ({ fill }: { fill: string }) => <FingerSvg fill={fill} />,
    text: "HID Lumidigm Fingerprint Sensor, <br/> Proximity Card Reader & PIN",
  },
  {
    Icon: ({ fill }: { fill: string }) => <CardSvg fill={fill} />,
    text: "Proximity Card Reader & PIN",
  },
];
