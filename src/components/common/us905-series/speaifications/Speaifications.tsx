import { FC } from "react";
import styles from "./Speaifications.module.scss";

const Speaifications: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.heading}>Speaifications</div>
        <div className={styles.items}>
          {data.map(({ category, items }, i) => (
            <div className={styles.item} key={i}>
              <h4>{category}</h4>
              <div className={styles.secp}>
                {items.map(({ name, value }, i) => (
                  <div className={styles.secpItem} key={value}>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="11" cy="11" r="11" fill="#7EBB48" />
                      <g clipPath="url(#clip0_2435_77087)">
                        <path
                          d="M11.2063 14.8307C11.125 14.8307 11.0531 14.8117 10.9906 14.7736C10.9281 14.7354 10.8828 14.6827 10.8547 14.6152C10.8266 14.5478 10.8203 14.4789 10.8359 14.4086C10.8516 14.3382 10.8844 14.2796 10.9344 14.2327L13.8406 11.4974L10.9344 8.77092C10.8969 8.73574 10.8687 8.69616 10.85 8.65218C10.8312 8.60821 10.8219 8.56277 10.8219 8.51586C10.8219 8.46895 10.8312 8.42498 10.85 8.38393C10.8687 8.34289 10.8969 8.30478 10.9344 8.2696C10.9719 8.23442 11.0141 8.20803 11.0609 8.19044C11.1078 8.17285 11.1516 8.16406 11.1922 8.16406C11.2328 8.16406 11.2844 8.17578 11.3469 8.19924C11.3906 8.21683 11.4313 8.24321 11.4688 8.27839L14.6375 11.2511C14.7125 11.3215 14.75 11.405 14.75 11.5018C14.75 11.5985 14.7125 11.6821 14.6375 11.7525L11.4688 14.7252C11.3938 14.7955 11.3063 14.8307 11.2063 14.8307ZM14.375 11.8492H7.625C7.51875 11.8492 7.42969 11.8155 7.35781 11.7481C7.28594 11.6806 7.25 11.5985 7.25 11.5018C7.25 11.405 7.2875 11.3215 7.3625 11.2511C7.4375 11.1808 7.525 11.1456 7.625 11.1456H14.375C14.475 11.1456 14.5625 11.1808 14.6375 11.2511C14.7125 11.3215 14.75 11.405 14.75 11.5018C14.75 11.5985 14.7141 11.6806 14.6422 11.7481C14.5703 11.8155 14.4812 11.8492 14.375 11.8492Z"
                          fill="white"
                        />
                        <path
                          d="M14.6375 11.2511L11.4688 8.27839C11.4312 8.24321 11.3906 8.21683 11.3469 8.19924C11.2844 8.17578 11.2328 8.16406 11.1922 8.16406C11.1516 8.16406 11.1078 8.17285 11.0609 8.19044C11.0141 8.20803 10.9719 8.23442 10.9344 8.2696C10.8969 8.30478 10.8687 8.34289 10.85 8.38393C10.8312 8.42498 10.8219 8.46895 10.8219 8.51586C10.8219 8.56277 10.8312 8.60821 10.85 8.65218C10.8687 8.69616 10.8969 8.73574 10.9344 8.77092L13.8406 11.4974L10.9344 14.2327C10.8844 14.2796 10.8516 14.3382 10.8359 14.4086C10.8203 14.4789 10.8266 14.5478 10.8547 14.6152C10.8828 14.6827 10.9281 14.7354 10.9906 14.7736C11.0531 14.8117 11.125 14.8307 11.2063 14.8307C11.3063 14.8307 11.3937 14.7955 11.4688 14.7252L14.6375 11.7525C14.7125 11.6821 14.75 11.5985 14.75 11.5018M14.6375 11.2511C14.7125 11.3215 14.75 11.405 14.75 11.5018M14.6375 11.2511C14.5625 11.1808 14.475 11.1456 14.375 11.1456H7.625C7.525 11.1456 7.4375 11.1808 7.3625 11.2511C7.2875 11.3215 7.25 11.405 7.25 11.5018C7.25 11.5985 7.28594 11.6806 7.35781 11.7481C7.42969 11.8155 7.51875 11.8492 7.625 11.8492H14.375C14.4813 11.8492 14.5703 11.8155 14.6422 11.7481C14.7141 11.6806 14.75 11.5985 14.75 11.5018"
                          stroke="white"
                          strokeWidth="0.416667"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2435_77087">
                          <rect
                            width="8"
                            height="9"
                            fill="white"
                            transform="translate(7 7)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <div>
                      {name === category ? (
                        <></>
                      ) : (
                        <span className={styles.name}>{name}:</span>
                      )}
                      <span>{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Speaifications;

const data = [
  {
    category: "Capacity",
    items: [
      { name: "ID Cards", value: "10,000" },
      { name: "Transactions", value: "200,000" },
      { name: "Fingerprint templates", value: "10,000" },
    ],
  },
  {
    category: "Environment",
    items: [
      { name: "Operating Temperature", value: "32°F to 113°F (0°C to 45°C)" },
      { name: "Operating Humidity", value: "5% to 80%" },
    ],
  },
  {
    category: "Fingerprint Sensor",
    items: [{ name: "Fingerprint Sensor", value: "ZK7500" }],
  },
  {
    category: "Dimensions",
    items: [
      { name: "Width", value: "8 in. (20.06 cm)" },
      { name: "Height", value: "5.7 in. (14.5 cm)" },
      { name: "Depth", value: "1.9 in. (2.76 cm)" },
      { name: "Weight", value: "1.85 lbs. (0.8 kg)" },
    ],
  },
  {
    category: "Display",
    items: [{ name: "Display", value: "3.5 in. TFT Color Screen" }],
  },
  {
    category: "Communications",
    items: [
      {
        name: "Communications",
        value: "Ethernet, Serial RS232/RS 485, USB (host & client), Wi-Fi",
      },
    ],
  },
  {
    category: "Power",
    items: [
      { name: "Power", value: "12V DC, 3A" },
      { name: "Optional", value: "12V POE Injector" },
      { name: "Optional", value: "12V Battery Backup" },
    ],
  },
  {
    category: "Supported Devices",
    items: [
      {
        name: "Supported Devices",
        value: "9200-ID: Fingerprint and standard RFID prox reader",
      },
      {
        name: "Supported Devices",
        value: "9200-IC: Fingerprint and standard IC prox reader",
      },
      {
        name: "Supported Devices",
        value: "9200-IC: Fingerprint and standard IC prox reader",
      },
      {
        name: "Supported Devices",
        value: "9200-EM: Standard RFID prox reader",
      },
    ],
  },
];
