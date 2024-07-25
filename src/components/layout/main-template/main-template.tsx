"use client";
import React, { useState, useEffect } from "react";
import Footer from "@components/layout/footer/Footer";
import store from "../../../store/redux";
import { Provider } from "react-redux";
import dynamic from "next/dynamic";
import Header from "../header";
import "swiper/css";

interface IMainTemplate {
  children: any;
  menuColor?: "white" | "black";
  transparent?: true;
}

const Preloader = dynamic(
  () => import("@components/layout/main-template/preloader/preloader"),
  { ssr: false },
);

function MainTemplate({
  children,
  menuColor = "black",
  transparent,
}: IMainTemplate) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const int = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => clearTimeout(int);
  }, []);

  return (
    <Provider store={store}>
      {isLoading && <Preloader />}
      <main
        style={{
          opacity: isLoading ? 0 : 1,
        }}
      >
        {/* <Navbar menuColor={menuColor} /> */}
        <Header color={menuColor} transparent={transparent} />
        {children}
        <Footer />
      </main>
    </Provider>
  );
}
export default MainTemplate;
