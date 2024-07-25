"use client";
import { FC } from "react";
import styles from "./Us905Series.module.scss";
import Intro from "./UltimaIntro/UltimaIntro";
import UltimaSecond from "./UltimaSecond/UltimaSecond";
import Series from "./series/Series";
import ConnectWithUs from "../home/сonnect-with-us";
import Products from "@components/common/ultima-2/products/Products";
import Speaifications from "./speaifications/Speaifications";

const Us905Series: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Intro />
      <UltimaSecond />
      <Series />
      <Speaifications />
      <div className={styles.white}>
        <h4 className="configurable-options-title">Downloads</h4>
        <div className="d-flex justify-content-center align-items-center flex-wrap gap-3">
          <button className="btn btn-green">
            Datasheets
            <span>
              <i className="fa-regular fa-arrow-up-right" />
            </span>
          </button>
          <button className="btn btn-green">
            Installation Guide
            <span>
              <i className="fa-regular fa-arrow-up-right" />
            </span>
          </button>
          <button className="btn btn-green ">
            Images
            <span>
              <i className="fa-regular fa-arrow-up-right" />
            </span>
          </button>
          <button className="btn btn-green">
            User Guide
            <span>
              <i className="fa-regular fa-arrow-up-right" />
            </span>
          </button>
        </div>
        <Products mt={0} />
        <ConnectWithUs />
      </div>
    </div>
  );
};
export default Us905Series;
