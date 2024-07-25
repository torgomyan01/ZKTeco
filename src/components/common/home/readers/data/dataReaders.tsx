import { ReactNode } from "react";
import { StaticImageData } from "next/image";

import FingerprintIcon from "../../../../../../public/images/home/fingerprint-white.png";
import FaceScanIcon from "../../../../../../public/images/home/face-scan-white.png";
import PalmScanIcon from "../../../../../../public/images/home/palm-scan-white.png";
import MultiCardIcon from "../../../../../../public/images/home/multi-card-white.png";
import PortableIcon from "../../../../../../public/images/home/portable-white.png";

interface IDataReaders {
  id: string;
  title: ReactNode;
  description: string;
  icon: StaticImageData;
  iconSize: number;
  alt: string;
}

export const dataReaders: IDataReaders[] = [
  {
    id: "fingerprint",
    title: (
      <>
        Fingerprint
        <br />
        Recognition
      </>
    ),
    description:
      "Fingerprint allows our users to conveniently and securely access the system by scanning their unique fingerprint.",
    icon: FingerprintIcon,
    iconSize: 40,
    alt: "Fingerprint Recognition",
  },
  {
    id: "facial",
    title: (
      <>
        Facial
        <br />
        Recognition
      </>
    ),
    description:
      "Facial Recognition - a technology enabling our users to conveniently identify individuals in images or real-time.",
    icon: FaceScanIcon,
    iconSize: 40,
    alt: "Facial Recognition",
  },
  {
    id: "palm",
    title: (
      <>
        Palm
        <br />
        Recognition
      </>
    ),
    description:
      "Palm Recognition - a technology allowing users to easily identify individuals by analyzing their palm prints in real-time.",
    icon: PalmScanIcon,
    iconSize: 40,
    alt: "Palm Recognition",
  },
  {
    id: "card",
    title: (
      <>
        Multi Card
        <br />
        Readers
      </>
    ),
    description:
      "We provide the capability to read various types of memory cards such as SD, microSD, CompactFlash, and others.",
    icon: MultiCardIcon,
    iconSize: 40,
    alt: "Multi Card Readers",
  },
  {
    id: "portable",
    title: <>Portable</>,
    description:
      "We offer a range of portable products designed for ease of transportation and mobility. These items are compact and lightweight, making them convenient for users to carry in various settings.",
    icon: PortableIcon,
    iconSize: 40,
    alt: "Portable",
  },
];
