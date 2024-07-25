import { FC } from "react";
import styles from "./AccordionJobContent.module.scss";
import { TypedText } from "../Job";

const AccordionJobContent: FC<TypedText> = ({ heading, content }) => {
  const getContentType = (content: string | string[]) => {
    if (Array.isArray(content)) {
      {
        return (
          <div className={styles.accordionItemsContent}>
            {content.map((item, i) => (
              <div
                className={styles.accordionItemContent}
                key={`AccordionJobContent ${item} ${i}`}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="11" cy="11" r="11" fill="#F4F4F4" />
                  <g clipPath="url(#clip0_2435_25076)">
                    <path
                      d="M11.2063 14.8346C11.125 14.8346 11.0531 14.8156 10.9906 14.7775C10.9281 14.7393 10.8828 14.6866 10.8547 14.6191C10.8266 14.5517 10.8203 14.4828 10.8359 14.4125C10.8516 14.3421 10.8844 14.2835 10.9344 14.2366L13.8406 11.5013L10.9344 8.77483C10.8969 8.73965 10.8687 8.70007 10.85 8.65609C10.8312 8.61212 10.8219 8.56668 10.8219 8.51977C10.8219 8.47286 10.8312 8.42889 10.85 8.38784C10.8687 8.3468 10.8969 8.30869 10.9344 8.27351C10.9719 8.23833 11.0141 8.21194 11.0609 8.19435C11.1078 8.17676 11.1516 8.16797 11.1922 8.16797C11.2328 8.16797 11.2844 8.17969 11.3469 8.20315C11.3906 8.22074 11.4313 8.24712 11.4688 8.2823L14.6375 11.255C14.7125 11.3254 14.75 11.4089 14.75 11.5057C14.75 11.6024 14.7125 11.686 14.6375 11.7564L11.4688 14.7291C11.3938 14.7994 11.3063 14.8346 11.2063 14.8346ZM14.375 11.8531H7.625C7.51875 11.8531 7.42969 11.8194 7.35781 11.752C7.28594 11.6845 7.25 11.6024 7.25 11.5057C7.25 11.4089 7.2875 11.3254 7.3625 11.255C7.4375 11.1847 7.525 11.1495 7.625 11.1495H14.375C14.475 11.1495 14.5625 11.1847 14.6375 11.255C14.7125 11.3254 14.75 11.4089 14.75 11.5057C14.75 11.6024 14.7141 11.6845 14.6422 11.752C14.5703 11.8194 14.4812 11.8531 14.375 11.8531Z"
                      fill="black"
                    />
                    <path
                      d="M14.6375 11.255L11.4688 8.2823C11.4312 8.24712 11.3906 8.22074 11.3469 8.20315C11.2844 8.17969 11.2328 8.16797 11.1922 8.16797C11.1516 8.16797 11.1078 8.17676 11.0609 8.19435C11.0141 8.21194 10.9719 8.23833 10.9344 8.27351C10.8969 8.30869 10.8687 8.3468 10.85 8.38784C10.8312 8.42889 10.8219 8.47286 10.8219 8.51977C10.8219 8.56668 10.8312 8.61212 10.85 8.65609C10.8687 8.70007 10.8969 8.73965 10.9344 8.77483L13.8406 11.5013L10.9344 14.2366C10.8844 14.2835 10.8516 14.3421 10.8359 14.4125C10.8203 14.4828 10.8266 14.5517 10.8547 14.6191C10.8828 14.6866 10.9281 14.7393 10.9906 14.7775C11.0531 14.8156 11.125 14.8346 11.2063 14.8346C11.3063 14.8346 11.3937 14.7994 11.4688 14.7291L14.6375 11.7564C14.7125 11.686 14.75 11.6024 14.75 11.5057M14.6375 11.255C14.7125 11.3254 14.75 11.4089 14.75 11.5057M14.6375 11.255C14.5625 11.1847 14.475 11.1495 14.375 11.1495H7.625C7.525 11.1495 7.4375 11.1847 7.3625 11.255C7.2875 11.3254 7.25 11.4089 7.25 11.5057C7.25 11.6024 7.28594 11.6845 7.35781 11.752C7.42969 11.8194 7.51875 11.8531 7.625 11.8531H14.375C14.4813 11.8531 14.5703 11.8194 14.6422 11.752C14.7141 11.6845 14.75 11.6024 14.75 11.5057"
                      stroke="black"
                      strokeWidth="0.416667"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2435_25076">
                      <rect
                        width="8"
                        height="9"
                        fill="white"
                        transform="translate(7 7)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p>{item}</p>
              </div>
            ))}
          </div>
        );
      }
    } else {
      return <p className={styles.defaultItemContent}>{content}</p>;
    }
  };
  return (
    <div className={styles.accordionJobContent}>
      {heading && <h3 className={styles.heading}>{heading}</h3>}
      {getContentType(content)}
    </div>
  );
};
export default AccordionJobContent;