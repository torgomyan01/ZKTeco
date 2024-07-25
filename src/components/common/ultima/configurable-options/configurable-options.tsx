import "./configurable-options.scss";
import Image from "next/image";
import { RandomKey } from "@utils/helpers";
import React from "react";

const options = [
  {
    icon: "multicard-none.svg",
    name: "Multicard",
  },
  {
    icon: "scan.svg",
    name: "Face ID",
  },
  {
    icon: "time.svg",
    name: "Thermometer",
  },
  {
    icon: "mask-none.svg",
    name: "Mask",
  },
  {
    icon: "rfid-none.svg",
    name: "RFID",
  },
  {
    icon: "Layer.svg",
    name: "Barcode",
  },
  {
    icon: "magnetic-none.svg",
    name: "Magnetic",
  },
  {
    icon: "batery.svg",
    name: "Battery",
  },
  {
    icon: "camera.svg",
    name: "Camera",
  },
  {
    icon: "poe.svg",
    name: "PoE+",
  },
  {
    icon: "voice-none.svg",
    name: "Voice Command",
  },
];

function ConfigurableOptions() {
  return (
    <div className="configurable-options">
      <div className="container">
        <h3 className="configurable-options-title">Configurable Options</h3>
        <div className="configurable-options-row">
          {options.map((item) => (
            <div key={RandomKey()} className="configurable-options-item">
              <span>
                <Image
                  src={`/images/icons/${item.icon}`}
                  alt="multicard-none"
                  width={47}
                  height={47}
                />
              </span>
              {item.name}
            </div>
          ))}
        </div>
        <h3 className="configurable-options-title">Downloads</h3>
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
      </div>
    </div>
  );
}

export default ConfigurableOptions;
