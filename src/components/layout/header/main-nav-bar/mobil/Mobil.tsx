"use client";
import { AnimatePresence, motion } from "framer-motion";
import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

import { dataNav, navigateLinks } from "../data/dataNav";

import { ButtonWithArrow } from "@components/layout/buttons/button-with-arrow";
import clsx from "clsx";
import {
  motionContentModalConfig,
  motionItemsModalConfig,
  motionModalConfig,
} from "../motion.config";
import { useNavBar } from "../useNavBar";
import styles from "./Mobil.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface IMobil {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

const Mobil: FC<IMobil> = ({ setIsOpen, isOpen }) => {
  const [activeLinks, setActiveLinks] = useState<{ id: string; col: any[] }>({
    id: "",
    col: [],
  });
  const [key, setKey] = useState(0);
  const [animateComplete, setAnimateComplete] = useState(false);
  const [keyAnimation, setKeyAnimation] = useState(0);
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { push } = useRouter();

  useEffect(() => {
    if (activeLinks.col.length > 0) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
      if (animateComplete) {
        setKeyAnimation((prevKey) => prevKey + 1);
      }
      setTimeout(() => setKey((prevKey) => prevKey + 1), 500);
    } else {
      document.body.style.overflow = "visible";
      document.body.style.height = "auto";
      setKeyAnimation(0);
      // return () => clearTimeout(timer);
    }
  }, [activeLinks, setIsOpen, animateComplete]);

  useEffect(() => {
    if (ref.current && ref.current.clientHeight > 100) {
      setHeight(ref.current.clientHeight);
    }
  }, [ref.current?.clientHeight]);

  const handleClick = (id: string, colums: any[]) => {
    setActiveLinks({ id, col: colums });
  };

  const handleMouseLeave = () => {
    if (animateComplete) {
      setKeyAnimation(0);
      setActiveLinks({ id: "", col: [] });
      setKey(0);
      setAnimateComplete(false);
    }
  };
  return (
    <div className={styles.mobil}>
      <AnimatePresence>
        {isOpen && (
          <>
            {!activeLinks.col.length ? (
              <motion.div
                initial={"init"}
                animate={"animate"}
                exit={"exit"}
                variants={motionModalConfig().variants}
                className={clsx(styles.dropDown)}
              >
                <motion.div
                  ref={ref}
                  initial={"init"}
                  animate={"animate"}
                  exit={"exit"}
                  transition={
                    motionContentModalConfig({ key, height }).transition
                  }
                  variants={motionContentModalConfig({ key, height }).variants}
                  className={styles.content}
                  onAnimationComplete={() => setAnimateComplete(true)}
                  key={keyAnimation}
                >
                  <motion.div
                    initial={"init"}
                    animate={"animate"}
                    exit={"exit"}
                    transition={
                      motionItemsModalConfig({ key, i: 0 }).transition
                    }
                    variants={motionItemsModalConfig({ key, i: 0 }).variants}
                    className={styles.items}
                    key={keyAnimation}
                  >
                    {navigateLinks.map(({ id, title, hasMenu, colums }, i) => (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, delay: i * 0.1 }}
                        className={styles.link}
                        key={i}
                        onClick={() => {
                          if (hasMenu) {
                            if (key) {
                              animateComplete && handleClick(id, colums);
                            } else {
                              handleClick(id, colums);
                            }
                          }
                        }}
                      >
                        <p>{title}</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M4.4751 2.03996L7.7351 5.29996C8.1201 5.68496 8.1201 6.31496 7.7351 6.69996L4.4751 9.95996"
                            stroke="#292D32"
                            strokeOpacity="0.3"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25, delay: 0.4 }}
                    >
                      <ButtonWithArrow
                        title="Contact Us"
                        bgColor="green"
                        delay={1.4}
                        textWidth={75}
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
                <motion.div
                  onClick={() => {
                    setIsOpen(false);
                    handleMouseLeave();
                  }}
                  className={styles.out}
                ></motion.div>
              </motion.div>
            ) : (
              <motion.div
                initial={"init"}
                animate={"animate"}
                exit={"exit"}
                variants={motionModalConfig().variants}
                className={clsx(styles.dropDown)}
              >
                <motion.div
                  ref={ref}
                  initial={"init"}
                  animate={"animate"}
                  exit={"exit"}
                  transition={
                    motionContentModalConfig({ key, height }).transition
                  }
                  variants={motionContentModalConfig({ key, height }).variants}
                  className={styles.content}
                  onAnimationComplete={() => setAnimateComplete(true)}
                  key={keyAnimation}
                >
                  <motion.div
                    initial={"init"}
                    animate={"animate"}
                    exit={"exit"}
                    transition={
                      motionItemsModalConfig({ key, i: 0 }).transition
                    }
                    variants={motionItemsModalConfig({ key, i: 0 }).variants}
                    className={styles.items}
                    key={keyAnimation}
                  >
                    {activeLinks.col.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={"init"}
                        animate={"animate"}
                        exit={"exit"}
                        transition={
                          motionItemsModalConfig({ key, i }).transition
                        }
                        variants={motionItemsModalConfig({ key, i }).variants}
                        className={styles.links}
                      >
                        {item.title && <h3>{item.title}</h3>}
                        {item.links.map((subItem: any, ind: number) => (
                          <motion.a
                            onClick={() => push(subItem.path)}
                            className={styles.dropDownLink}
                            key={ind}
                          >
                            <Image
                              width={40}
                              height={40}
                              src={subItem.img}
                              alt=""
                            />
                            <div>
                              <h3>{subItem.name}</h3>
                              {/* <p>{subItem.subName}</p> */}
                            </div>
                          </motion.a>
                        ))}
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
                <motion.div
                  onClick={() => {
                    setIsOpen(false);
                    handleMouseLeave();
                  }}
                  className={styles.out}
                ></motion.div>
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Mobil;
