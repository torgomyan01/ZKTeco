type TypedMotionConfig = {
  variants: {
    init?: any;
    animate?: any;
    exit?: any;
  };
  transition?: any;
};

export const motionModalConfig = (): TypedMotionConfig => ({
  variants: {
    init: {
      background: "rgba(0, 0, 0, 0)",
      backdropFilter: "blur(0px)",
    },
    animate: {
      background: "rgba(0, 0, 0, 0.54)",
      backdropFilter: "blur(10px)",
    },
    exit: {
      background: "rgba(0, 0, 0, 0)",
      backdropFilter: "blur(0px)",
      transition: { duration: 0.75, delay: 0.6 },
    },
  },
});
export const motionContentModalConfig = (p?: any): TypedMotionConfig => ({
  variants: {
    init: {
      height: p.key ? `${p.height || 0}px` : "0px",
    },
    animate: {
      height: "auto",
    },
    exit: {
      height: "0px",
      transition: { duration: 0.85, delay: 0.2 },
    },
  },
  transition: { duration: 0.75 },
});

export const motionItemsModalConfig = (p?: any): TypedMotionConfig => ({
  variants: {
    init: { y: "50px", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: {
      y: "50px",
      opacity: 0,
      transition: { duration: 0.2, delay: 0.1 },
    },
  },
  transition: {
    duration: 0.6,
    delay: p.key ? 0.15 + p.i * 0.1 : 0.75 + p.i * 0.1,
  },
});
