"use client";
import React from "react";
import "./services.scss";
import { RandomKey } from "@utils/helpers";
import InfoOne from "@components/common/ultima-2/services/info-one";
import InfoTwo from "@components/common/ultima-2/services/info-two";
import InfoTree from "@components/common/ultima-2/services/info-tree";

const services = [
  <InfoOne key={RandomKey()} />,
  <InfoTwo key={RandomKey()} />,
  <InfoTree key={RandomKey()} />,
];

function Services() {
  return (
    <div className="services">
      <div className="container-fluid p-0">
        <div className="services-row">
          <div className="services-image" />
          <div className="services-info-body">
            {services.map((item) => item)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
