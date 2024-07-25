"use client";
import React from "react";
import "./ultima-services.scss";
import { RandomKey } from "@utils/helpers";
import UltimaInfoOne from "@components/common/ultima/services/ultima-info-one";

const servicesItems = [
  {
    title: "Touch-Free Time Clock Capability",
    subtitle: "Ultima with Facial Recognition Module + Infrared thermometer*",
    lists: [
      "Facial biometric identification up to 30,000 users",
      "Identify registered users in less than one seconds",
      "Remote Body Temperature Detection",
      "Multi-dimensional facial recognition technology",
      "Intelligent algorithm which self-adjusts templates with any feature changes in the user’s appearance dapts to low light and environments",
      "Mask* detection technology to identify if an employee is wearing a mask.",
    ],
    options: ["scan.svg", "time.svg", "mask-none.svg"],
  },
  {
    title: "Fingerprint Biometric Time Clocks",
    subtitle:
      "Fingerprint scanner with option to connect variety of card readers",
    lists: [
      "Touch based optical fingerprint module",
      "Superior ability to capture large, high quality fingerprint images and to reject spoof fingerprints in hardware",
      "FBI PVI and Mobile ID certification (FAP20)",
    ],
    options: ["layer-1.svg", "credit-card.svg", "pin-none.svg"],
  },
  {
    title: "Badge reader options that works with all major technologies",
    subtitle: "",
    lists: [
      "Multi-frequency card reader supports all current RFID standards for the frequency ranges 125kHz and 134.2 kHz as well as the 13.56 MHz band, including NFC",
      "Barcode badge reader",
      "Magnetic stripe card reader",
      "Standard Prox",
    ],
    options: [
      "rfid-none.svg",
      "scan-barcode.svg",
      "credit-card.svg",
      "pin-none.svg",
    ],
  },
];

const ultimaServices = Array.from({ length: 3 }).map((i, index) => (
  <UltimaInfoOne key={RandomKey()} info={servicesItems[index]} />
));

function UltimaServices() {
  return (
    <div className="ultima-services">
      <div className="container-fluid p-0">
        <div className="ultima-services-row">
          <div className="ultima-services-image" />
          <div className="ultima-services-info-body">
            {ultimaServices.map((item) => item)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UltimaServices;
