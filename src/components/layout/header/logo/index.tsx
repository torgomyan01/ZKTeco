import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";

import ZKTecoLogoWhite from "../../../../../public/images/ZKteco Logo-01 1(1).svg";
import ZKTecoLogoBlack from "../../../../../public/images/ZKteco Logo-01 1.svg";
import styles from "./index.module.scss";
import { useRouter } from "next/navigation";

interface ILogo {
  color: string;
  zIndex?: number;
}

export const Logo: FC<ILogo> = ({ color, zIndex }) => {
  const { push } = useRouter();
  return (
    <div
      className={clsx(styles.logoContainer)}
      style={{ zIndex }}
      onClick={() => push("/")}
    >
      <Image
        src={color === "white" ? ZKTecoLogoWhite : ZKTecoLogoBlack}
        alt="ZKTeco logo"
        width={149}
        height={48.98}
        className={clsx(styles.logoImage)}
      />
    </div>
  );
};
