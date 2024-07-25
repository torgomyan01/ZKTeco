"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { ButtonWithArrow } from "../buttons/button-with-arrow";
import BurgerMenuIcon from "../icons/burgerMenuIcon";

import styles from "./index.module.scss";
import { useReHeight, useReSize } from "src/hools/useReSize";
import { Logo } from "./logo";
import { MainNavBar } from "./main-nav-bar";
import Mobil from "./main-nav-bar/mobil/Mobil";

export default function Header({
  color,
  transparent,
}: {
  color?: string;
  transparent?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { push } = useRouter();
  const width = useReSize();
  const [headerTransparent, setHeaderTransparent] = useState(transparent);
  const [headerColor, setHeaderColor] = useState(color);
	useEffect(() => {
		if(color) setHeaderColor(color)
		setHeaderTransparent(!!transparent)
	}, [color, transparent])
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }

  return (
    <header
      className={clsx(
        styles.header,
        headerColor === "black" && !headerTransparent ? styles.bgWhite : "",
        headerTransparent && styles.transparent,
				color === 'black' ? styles.black : ''
      )}
    >
      <Logo
        color={headerColor === "black" ? "black" : isOpen ? "black" : "white"}
      />
      <div>
        {width > 1024 ? (
          <MainNavBar
            setIsOpen={setIsOpen}
            contentColor={
              headerColor === "black" ? "black" : isOpen ? "black" : "white"
            }
          />
        ) : (
          <Mobil setIsOpen={setIsOpen} isOpen={isOpen} />
        )}
      </div>
      <div className={clsx(styles.buttonWithArrowWrapper)}>
        <ButtonWithArrow
          title="Contact Us"
          bgColor="green"
          delay={1.4}
          textWidth={85}
          click={() => push("/contact-us")}
        />
      </div>
      <div
        className={clsx(styles.burgerMenuIconWrapper)}
        onClick={() => setIsOpen(!isOpen)}
      >
        <BurgerMenuIcon />
      </div>
    </header>
  );
}
