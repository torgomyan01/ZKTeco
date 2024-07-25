import { FC } from "react";
import styles from "./Series.module.scss";
import Image from "next/image";
import SvgSeriesOne from "./svgs/SvgSeriesOne/SvgSeriesOne";
import SvgSeriesTwo from "./svgs/SvgSeriesTwo/SvgSeriesTwo";
import clsx from "clsx";

const Series: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>US905 Series</div>
      <div className={styles.center}>
        <div className={styles.blocks}>
          {leftBlocksData.map((item, i) => (
            <Item {...item} key={i} />
          ))}
        </div>
        <div className={styles.imgs}>
          <div className={styles.leftSvg}>
            <SvgSeriesOne />
          </div>
          <div className={styles.mainImage}>
            <img
              src="/images/products/Group 1707479957.png"
              className="ultima-header-image"
            />
          </div>
          <div className={styles.rightSvg}>
            <SvgSeriesTwo />
          </div>
        </div>
        <div className={styles.blocks}>
          {rightBlockData.map((item, i) => (
            <Item {...item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Series;

const leftBlocksData: any[] = [
  {
    title: "US905-ID",
    icons: [
      "/images/us-series/Group 1707479692.svg",
      "/images/us-series/Group 1707480135.svg",
      "/images/us-series/Group 1707480136.svg",
    ],
    text: "Fingerprint & Standard RFID Prox Card Reader and PIN",
  },
  {
    title: "US905-HID",
    icons: [
      "/images/us-series/Group 1707479692.svg",
      "/images/us-series/Group 1707480135(1).svg",
      "/images/us-series/Group 1707480136.svg",
    ],
    text: "Fingerprint & Standard RFID Prox Card Reader and PIN",
  },
];
const rightBlockData: any[] = [
  {
    title: "US905-ID",
    icons: [
      "/images/us-series/Group 1707480135.svg",
      "/images/us-series/Group 1707480136.svg",
    ],
    text: "Fingerprint & Standard RFID Prox Card Reader and PIN",
  },
  {
    title: "US905-ID",
    icons: [
      "/images/us-series/Group 1707480135(1).svg",
      "/images/us-series/Group 1707480136.svg",
    ],
    text: "Fingerprint & Standard RFID Prox Card Reader and PIN",
  },
];

const Item = ({ icons, title, text }: any) => {
  return (
    <div className={styles.item}>
      <div className={styles.icons}>
        {icons.map((icon: any, i: number) => (
          <img key={i} src={icon} className={clsx(styles.icon)} />
        ))}
      </div>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};
