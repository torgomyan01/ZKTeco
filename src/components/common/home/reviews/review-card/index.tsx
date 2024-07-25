import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";

import styles from "./index.module.scss";

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
        <p className={clsx(styles.reviewText)}>{review}</p>
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
            <p className={clsx(styles.customerName)}>{customer.name}</p>
            <p className={clsx(styles.customerPosition)}>
              {customer.position}, {company.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
