import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";

import styles from "./index.module.scss";
import { acidGrotesk400 } from "@styles/fonts";

interface IReviewCard {
  company: {
    logo: string;
    name: string;
  };
  review: string;
  customer: {
    photo: string;
    name: string;
    position: string;
  };
}

export const ReviewCard: FC<IReviewCard> = ({ company, review, customer }) => {
  return (
    <div className={clsx(styles.reviewCard)}>
      <div className={clsx(styles.companyLogoContainer)}>
        <img
          src={company.logo}
          alt={company.name}
          className={clsx(styles.companyLogo)}
        />
      </div>
      <div className={clsx(styles.contentContainer)}>
        <p className={clsx(styles.reviewText, acidGrotesk400.className)}>
          {review}
        </p>
        <div className={clsx(styles.customerContainer)}>
          <div className={clsx(styles.customerPhoto)}>
            <Image
              src={customer.photo}
              alt={customer.name}
              width={48}
              height={48}
            />
          </div>
          <div className={clsx(styles.customerInfoBlock)}>
            <p className={clsx(styles.customerName, acidGrotesk400.className)}>
              {customer.name}
            </p>
            <p
              className={clsx(
                styles.customerPosition,
                acidGrotesk400.className,
              )}
            >
              {customer.position}, {company.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
