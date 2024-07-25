interface IReaderTechnologiesItem {
  id: string;
  icon: string;
  alt: string;
  delay: number;
}

const delay = 1.2;

export const dataReaderTechnologies: Array<IReaderTechnologiesItem> = [
  {
    id: "user-round",
    icon: "user",
    alt: "Face reading technology",
    delay,
  },
  {
    id: "fingerprint",
    icon: "touch",
    alt: "Fingerprint reading technology",
    delay: delay + 0.1,
  },
  {
    id: "hand",
    icon: "arm",
    alt: "Palm reading technology",
    delay: delay + 0.2,
  },
  {
    id: "scan-barcode",
    icon: "card",
    alt: "Barcode scanning technology",
    delay: delay + 0.3,
  },
  {
    id: "thermometer",
    icon: "tem",
    alt: "Temperature reading technology",
    delay: delay + 0.4,
  },
  {
    id: "audio-lines",
    icon: "radio",
    alt: "Voice reading technology",
    delay: delay + 0.5,
  },
  {
    id: "wifi",
    icon: "wify",
    alt: "Wi-Fi connection",
    delay: delay + 0.6,
  },
];
