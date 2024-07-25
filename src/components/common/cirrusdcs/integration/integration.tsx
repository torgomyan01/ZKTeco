"use client";

import React from "react";
import "./integration.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import { RandomKey } from "@utils/helpers";
import clsx from "clsx";

const pageInfo = {
  title:
    "Seamless integration betweent time clocks and your HCM/Workforce Management Software",
};

function Integration() {
  return (
    <div className="integration">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn btn-status">
            <Image
              src="/images/flash-circle.svg"
              alt="CirrusDCS for HCM"
              width={24}
              height={24}
            />
            CirrusDCS for HCM
          </button>
        </div>
        <h1 className="integration-title">
          {pageInfo.title.split(" ").map((item: string, index) => (
            <motion.span
              viewport={{ once: true }}
              initial={{
                opacity: 0,
                rotateX: 100,
                scale: item === "time" || item === "clocks" ? 2 : 1,
              }}
              animate={{
                opacity: 1,
                rotateX: 0,
                scale: item === "time" || item === "clocks" ? 1 : 1,
              }}
              transition={{
                duration: 0.8,
                delay:
                  item === "time" || item === "clocks"
                    ? 4 + index / 10
                    : 2.8 + index / 10,
              }}
              style={{
                marginRight: "0.2em",
              }}
              className={clsx(
                item === "time" || item === "clocks" ? "green" : "",
              )}
              key={RandomKey()}
            >
              {item}{" "}
            </motion.span>
          ))}
        </h1>
        <div className="integration-row">
          <div className="integration-item">
            <Image
              src="/images/integration-item-terminals.svg"
              alt="integration-item-terminals"
              className="w-100"
              width="315"
              height="100"
            />
            <h3 className="integration-item-title">Terminals</h3>
            <ul className="integration-list">
              <li>
                <span>
                  <i className="fa-solid fa-arrow-right" />
                </span>
                Worker Data
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-arrow-right" />
                </span>
                Badge data
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-arrow-right" />
                </span>
                Time and Labor Tracking
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-arrow-right" />
                </span>
                Attendance Data
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-arrow-right" />
                </span>
                Time-off Request
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-arrow-right" />
                </span>
                View Accrual Balance
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-arrow-right" />
                </span>
                View Schedule
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-arrow-right" />
                </span>
                Lockouts
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-arrow-right" />
                </span>
                Attestations
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-arrow-right" />
                </span>
                Tips
              </li>
            </ul>
          </div>
          <Image
            src="/images/integration-rel-time.svg"
            width="206"
            height="89"
            alt="integration-rel-time"
            className="integration-rel-time d-none d-lg-block"
          />
          <Image
            src="/images/integration-rel-time-mobile.svg"
            width="206"
            height="89"
            alt="integration-rel-time"
            className="integration-rel-time d-block d-lg-none"
          />
          <div className="integration-item">
            <Image
              src="/images/integration-item-cirrus.svg"
              width="315"
              height="134"
              alt="integration-item-terminals"
              className="w-100"
            />
            <div className="integration-service mt-4">
              <span>
                <i className="fa-solid fa-arrow-right" />
              </span>
              Cirrus / Time Clock Push Communication Process
            </div>
            <div className="integration-service orange mt-3">
              <span>
                <i className="fa-solid fa-arrow-right" />
              </span>
              ZKTeco Integration Process
            </div>

            <button className="btn integration-middleware">Middleware</button>
          </div>
          <Image
            src="/images/integration-item-punch.svg"
            width="206"
            height="103"
            alt="integration-rel-time"
            className="integration-rel-time d-none d-lg-block"
          />
          <Image
            src="/images/integration-item-punch-mobile.svg"
            width="206"
            height="103"
            alt="integration-rel-time"
            className="integration-rel-time d-block d-lg-none"
          />
          <div className="integration-item">
            <Image
              src="/images/integration-item-hcm.svg"
              width="315"
              height="134"
              alt="integration-item-terminals"
              className="w-100"
            />
            <h3 className="integration-item-title">Human Resources</h3>
            <ul className="integration-list">
              <li>
                <span>
                  <i className="fa-solid fa-arrow-right" />
                </span>
                Locations
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-arrow-right" />
                </span>
                Organizations
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-arrow-right" />
                </span>
                Workers
              </li>
            </ul>
            <h3 className="integration-item-title">Time Tracking</h3>
            <ul className="integration-list">
              <li>
                <span>
                  <i className="fa-solid fa-arrow-right" />
                </span>
                Punch data
              </li>
            </ul>
            <button className="btn integration-middleware mt-3">
              Absence management
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Integration;
