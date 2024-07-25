"use client";
import React, { useState } from "react";
import "./header.scss";
import { RandomKey } from "@utils/helpers";
import Link from "next/link";
import Image from "next/image";

const types = [
  "Workday End User",
  "Workforce Management Software Provider",
  "Time Attendance Dealer",
  "Workday - Account Manager",
  "Workday - Implementer",
  "Other",
];

const contacts = [
  {
    title: "US Headquarter",
    description: "200 Centennial Avenue, Suite 211, Piscataway, NJ 08854",
  },
  {
    title: "Europe Service Center Birmingham, UK",
    description: "17, Ace Business Park Birmingham, B33 0LD United Kingdom",
  },
  {
    title: "Madrid, Spain",
    description:
      "Carretera de Fuencarral 44, Edificio 1. Planta 2. 28108, Alcobendas, Madrid. SPAIN",
  },
];

function HeaderContactUs() {
  const [selectType, setSelectType] = useState<string>(types[0]);

  return (
    <div className="contact-us">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn btn-status">
            <Image
              src="/images/flash-circle.svg"
              alt="CirrusDCS for HCM"
              width="24"
              height="24"
            />
            CirrusDCS for HCM
          </button>
        </div>
        <h1 className="contact-us-title">
          Do you have questions about how our solutions can help you?
        </h1>
        <div className="row justify-content-between">
          <div className="col-12 col-md-7 order-2 order-md-1">
            <form action="#">
              <div className="mb-4">
                <label className="def-input required">
                  <input type="text" placeholder="Username" required />
                </label>
              </div>
              <div className="mb-4">
                <label className="def-input required">
                  <input type="text" placeholder="First name" required />
                </label>
              </div>
              <div className="mb-4">
                <label className="def-input required">
                  <input type="text" placeholder="Last Name" required />
                </label>
              </div>
              <div className="mb-4">
                <label className="def-input required">
                  <input type="text" placeholder="Email" required />
                </label>
              </div>
            </form>
            <h4 className="contact-us-customer">Customer type</h4>
            <div className="d-flex justify-content-start align-items-start flex-wrap">
              {types.map((item) => (
                <div
                  key={RandomKey()}
                  className={`contact-us-customer-type ${selectType === item ? "active" : ""}`}
                  onClick={() => setSelectType(item)}
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="privacy-police">
              This site is protected by reCAPTCHA and the Google{" "}
              <Link href="#">Privacy Policy</Link> and{" "}
              <Link href="#">Terms of Service</Link> apply.
            </p>
            <div className="mt-5">
              <button className="btn btn-green mt-5">
                Contact us
                <span>
                  <i className="fa-regular fa-arrow-right" />
                </span>
              </button>
            </div>
          </div>
          <div className="col-12 col-md-5 col-xl-4 order-1 order-md-2">
            {contacts.map((item, index) => (
              <div key={RandomKey()} className="contact-us-info">
                <div className="contact-us-info-header">0{index + 1}</div>
                <h4 className="contact-us-info-title">{item.title}</h4>
                <p className="contact-us-info-description">
                  {item.description}
                </p>
                <Link className="contact-us-info-emailContact" href="#">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.488248 8.46511V8.9065H0.046875V8.46511H0.488248ZM11.8264 8.15302C11.9988 8.32537 11.9988 8.60486 11.8264 8.7772L9.01753 11.5861C8.84519 11.7585 8.5657 11.7585 8.39335 11.5861C8.22097 11.4138 8.22097 11.1343 8.39335 10.9619L10.8902 8.46511L8.39335 5.96831C8.22097 5.79597 8.22097 5.51648 8.39335 5.34413C8.5657 5.17174 8.84519 5.17174 9.01753 5.34413L11.8264 8.15302ZM0.929621 0.581055V8.46511H0.046875V0.581055H0.929621ZM0.488248 8.02372H11.5143V8.9065H0.488248V8.02372Z"
                      fill="#171717"
                    />
                  </svg>
                  Email Contact
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderContactUs;
