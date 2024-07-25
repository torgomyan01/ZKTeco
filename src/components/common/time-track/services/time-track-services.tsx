"use client";
import React from "react";
import "./services.scss";
import { RandomKey } from "@utils/helpers";
import { useRef } from "react";
import InfoOne from "@components/common/time-track/services/info-one";
import InfoTwo from "@components/common/time-track/services/info-two";

const timeTrackServices = [
  <InfoOne key={RandomKey()} />,
  <InfoTwo key={RandomKey()} />,
];

function ServiceTimeTrack() {
  const elementRef = useRef(null);

  return (
    <div className="services">
      <div className="container-fluid p-0" ref={elementRef}>
        <div className="services-row">
          <div className="services-image" />
          <div className="services-info-body">
            {timeTrackServices.map((item) => item)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceTimeTrack;
