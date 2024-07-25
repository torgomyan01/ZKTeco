import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface IThisProps {
  title: string;
  text: string;
  index: number;
}

function ServicesInfoListItem({ title, text, index }: IThisProps) {
  const itemHeader = useRef<HTMLDivElement | null>(null);
  const itemBody = useRef<HTMLDivElement | null>(null);
  const [openClose, setOpenClose] = useState<boolean>(false);
  const [height, setHeight] = useState<number | undefined>(0);

  useEffect(() => {
    if (itemHeader.current) {
      setHeight(itemHeader.current?.offsetHeight || 0);
    }
  }, [itemHeader]);

  function openCLose() {
    const itemHeight = itemHeader.current?.offsetHeight || 0;
    const bodyHeight = itemBody.current?.offsetHeight || 0;

    if (openClose && itemHeight && bodyHeight) {
      setHeight(itemHeight);
    } else {
      setHeight(itemHeight + bodyHeight);
    }

    setOpenClose(!openClose);
  }

  return (
    <motion.div
      className="services-info-list-item"
      style={{
        height,
      }}
      onClick={openCLose}
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="services-info-list-item-header" ref={itemHeader}>
        {title}
        <span className="services-info-list-item-plus">
          {openClose ? (
            <i className="fa-solid fa-minus" />
          ) : (
            <i className="fa-solid fa-plus" />
          )}
        </span>
      </div>
      <div className="services-info-list-item-body" ref={itemBody}>
        {text}
      </div>
    </motion.div>
  );
}

export default ServicesInfoListItem;
