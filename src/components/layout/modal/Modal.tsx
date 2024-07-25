import { AnimatePresence, animate, motion } from "framer-motion";
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
} from "react";

import styles from "./Modal.module.scss";

interface IModal {
  children: ReactNode;
  setter: Dispatch<SetStateAction<boolean>>;
  state: boolean;
  exclude?: any;
}

const ModalSite: FC<IModal> = ({ children, setter, state, exclude }) => {
  const modalRef = useRef<any>(null);
  useEffect(() => {
    const handleClick = (event: any) => {
      const path = event.path || (event.composedPath && event.composedPath());
      if (exclude && path.includes(exclude)) {
        setter(true);
      }
      if (!path.includes(modalRef.current)) {
        setter(false);
      }
    };
    document.body.addEventListener("click", handleClick);

    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);
  useEffect(() => {
    if (state) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "visible";
      document.body.style.height = "auto";
    }
  }, [state]);
  return (
    <>
      <AnimatePresence>
        {state && (
          <motion.div
            initial="init"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            variants={modalVariant}
            className={styles.wrapper}
          >
            <div ref={modalRef}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default ModalSite;

const modalVariant = {
  init: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};
