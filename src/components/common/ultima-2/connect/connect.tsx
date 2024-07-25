"use client";
import "./connect.scss";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SliderFunctions from "@components/layout/slider-functions/slider-functions";
import Link from "next/link";
import { SITE_URL } from "@utils/consts";
gsap.registerPlugin(ScrollTrigger);

function Connect() {
  const [solidAnim, setSolidAnim] = useState<number>(0);
  const elementRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    document.addEventListener("resize", function () {
      setWindowWidth(window.innerWidth);
    });

    return () => {
      document.addEventListener("resize", function () {
        setWindowWidth(window.innerWidth);
      });
    };
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: elementRef.current,
          pin: true,
          scrub: true,
          // markers: true,
          start: "top top-=100",
          end: "top top-=1800",
          onUpdate(e) {
            const percent = e.progress * 100;
            setSolidAnim(percent);
          },
        },
      });
    }, elementRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="connect" ref={elementRef}>
      <div className="connect-body">
        <div className="d-flex justify-content-center align-items-center position-relative">
          <SliderFunctions />
        </div>
        <h3 className="connect-title">Connect with us</h3>
        <p className="connect-description">
          Want to learn how to do more about our time clock solutions to enhance
          your workforce management?
        </p>
        <div className="connect-solid">
          <div
            className="connect-solid-blur"
            style={{
              backgroundSize: `${windowWidth}px`,
            }}
          />
          <div
            className="connect-solid-solid"
            style={{
              width: `${solidAnim}%`,
              backgroundSize: `${windowWidth}px`,
            }}
          />
          <Link href={SITE_URL.CONTACT_US}>
            <button className="btn btn-green">
              Schedule a Consultation
              <span>
                <i className="fa-regular fa-arrow-right" />
              </span>
            </button>
          </Link>
        </div>
        <div className="connect-solid two">
          <div
            className="connect-solid-blur"
            style={{
              backgroundSize: `${windowWidth}px`,
            }}
          />
          <div
            className="connect-solid-solid"
            style={{
              width: `${solidAnim}%`,
              backgroundSize: `${windowWidth}px`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Connect;
