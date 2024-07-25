import "./footer.scss";
import Link from "next/link";
import Image from "next/image";
import ZKTecoLogoBlack from "../../../../public/images/ZKteco Logo-01 1.svg";
function Footer() {
  const dataSocial = [
    {
      img: "/images/social/linkedin.png",
      link: "https://www.linkedin.com/company/zktecowfm",
    },
    {
      img: "/images/social/instagram.png",
      link: "https://www.instagram.com/zktecowfm",
    },
    {
      img: "/images/social/facebook.png",
      link: "https://twitter.com/zktecowfm",
    },
    {
      img: "/images/social/youtube.png",
      link: "#",
    },
    {
      img: "/images/social/X_logo_2023_original 1.png",
      link: "#",
    },
    {
      img: "/images/social/63191 1.png",
      link: "https://vimeo.com/user207551762",
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3 mb-4 mb-lg-0">
            <div className="d-flex justify-content-start">
              <Image
                src={ZKTecoLogoBlack}
                alt="logo"
              />
              <Image
                src="/images/logo-aicp.svg"
                width="53"
                height="53"
                alt="logo"
                className="ms-3"
              />
            </div>
            <p className="footer-description mt-4 d-none d-lg-block">
              Copyright © 2024, ZKTeco Co., LTD. ZKTeco Logo is a registered
              trademark of ZKTeco or a related company. All other product and
              company names mentioned are used for identification purposes only
              and may be the trademarks of their respective owners. All
              specifications are subject to change without notice. All rights
              reserved.
            </p>
            <p className="footer-description mt-5 mb-2 d-none d-lg-block">
              ZKTeco EU-U.S. Privacy Shield Policy
            </p>
            <p className="footer-description d-none d-lg-block">
              ZKTeco Biometric Privacy Policy
            </p>
          </div>
          <div className="col-1 d-none d-lg-block" />
          <div className="col-12 col-lg-8">
            <div className="row">
              <div className="col-6 col-md-3 mb-4 mb-md-0">
                <h4 className="footer-item-title">Terminals</h4>
                <ul className="footer-list">
                  <li>
                    <a href="#">Terminals by Technology</a>
                  </li>
                  <li>
                    <a href="#">
                      ULTIMA series 2
                      <i className="fa-regular fa-arrow-up-right ms-2 fs-12" />
                    </a>
                  </li>
                  <li>
                    <a href="#">ULTIMA 200</a>
                  </li>
                  <li>
                    <a href="#">ULTIMA series 2</a>
                  </li>
                  <li>
                    <a href="#">US15 Series</a>
                  </li>
                  <li>
                    <a href="#">uFace800</a>
                  </li>
                  <li>
                    <a href="#">F305</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-3 mb-4 mb-md-0">
                <h4 className="footer-item-title">Solutions</h4>
                <ul className="footer-list">
                  <li>
                    <a href="#">CirrusDCS for Workday</a>
                  </li>
                  <li>
                    <a href="#">ULTIMA</a>
                  </li>
                  <li>
                    <a href="#">ZW200 Series</a>
                  </li>
                  <li>
                    <a href="#">CirrusDCS for HCM</a>
                  </li>
                  <li>
                    <a href="#">TimeTrack</a>
                  </li>
                  <li>
                    <a href="#">Product Development</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <h4 className="footer-item-title">Support</h4>
                <ul className="footer-list">
                  <li>
                    <a href="#">Resources</a>
                  </li>
                  <li>
                    <a href="#">Downloads</a>
                  </li>
                  <li>
                    <a href="#">Workday Customer Suppor</a>
                  </li>
                  <li>
                    <a href="#">Workday Customer Suppor</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <h4 className="footer-item-title">Company</h4>
                <ul className="footer-list">
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Why Choose ZKTeco?</a>
                  </li>
                  <li>
                    <a href="#">Events</a>
                  </li>
                  <li>
                    <a href="#">Career Opportunities</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-info">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-3">
              <h3 className="footer-info-title">ZKTeco Workforce Management</h3>
              <p className="footer-description mb-2 d-none d-lg-block">
                ZKTeco EU-U.S. Privacy Shield Policy
              </p>
              <p className="footer-description d-none d-lg-block">
                ZKTeco Biometric Privacy Policy
              </p>
            </div>
            <div className="col-1  d-none d-lg-block" />
            <div className="col-12 col-lg-8">
              <div className="row">
                <div className="col-12 col-md-4 col-lg-3 border-bottom pb-4 pt-4 pt-md-0">
                  <h4 className="footer-item-title">US Headquarter</h4>
                  <p className="footer-info-text">
                    200 Centennial Avenue, Suite 211, Piscataway, NJ 08854
                  </p>
                  <Link href="#" className="footer-info-emailContact">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.488248 8.46511V8.9065H0.046875V8.46511H0.488248ZM11.8264 8.15302C11.9988 8.32537 11.9988 8.60486 11.8264 8.7772L9.01753 11.5861C8.84519 11.7585 8.5657 11.7585 8.39335 11.5861C8.22097 11.4138 8.22097 11.1343 8.39335 10.9619L10.8902 8.46511L8.39335 5.96831C8.22097 5.79597 8.22097 5.51648 8.39335 5.34413C8.5657 5.17174 8.84519 5.17174 9.01753 5.34413L11.8264 8.15302ZM0.929621 0.581055V8.46511H0.046875V0.581055H0.929621ZM0.488248 8.02372H11.5143V8.9065H0.488248V8.02372Z"
                        fill="#171717"
                      />
                    </svg>
                    Email Contact
                  </Link>
                </div>
                <div className="col-12 col-md-4 col-lg-3 border-bottom pb-4 pt-4 pt-md-0">
                  <h4 className="footer-item-title">
                    Europe Service Center Birmingham, UK
                  </h4>
                  <p className="footer-info-text">
                    17, Ace Business Park Birmingham, B33 0LD United Kingdom
                  </p>
                  <Link href="#" className="footer-info-emailContact">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.488248 8.46511V8.9065H0.046875V8.46511H0.488248ZM11.8264 8.15302C11.9988 8.32537 11.9988 8.60486 11.8264 8.7772L9.01753 11.5861C8.84519 11.7585 8.5657 11.7585 8.39335 11.5861C8.22097 11.4138 8.22097 11.1343 8.39335 10.9619L10.8902 8.46511L8.39335 5.96831C8.22097 5.79597 8.22097 5.51648 8.39335 5.34413C8.5657 5.17174 8.84519 5.17174 9.01753 5.34413L11.8264 8.15302ZM0.929621 0.581055V8.46511H0.046875V0.581055H0.929621ZM0.488248 8.02372H11.5143V8.9065H0.488248V8.02372Z"
                        fill="#171717"
                      />
                    </svg>
                    Email Contact
                  </Link>
                </div>
                <div className="col-12 col-md-4 col-lg-6 pb-4 pt-4 pt-md-0">
                  <h4 className="footer-item-title">Madrid, Spain</h4>
                  <p className="footer-info-text last">
                    Carretera de Fuencarral 44, Edificio 1. Planta 2. 28108,
                    Alcobendas, Madrid. SPAIN
                  </p>
                  <Link href="#" className="footer-info-emailContact">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.488248 8.46511V8.9065H0.046875V8.46511H0.488248ZM11.8264 8.15302C11.9988 8.32537 11.9988 8.60486 11.8264 8.7772L9.01753 11.5861C8.84519 11.7585 8.5657 11.7585 8.39335 11.5861C8.22097 11.4138 8.22097 11.1343 8.39335 10.9619L10.8902 8.46511L8.39335 5.96831C8.22097 5.79597 8.22097 5.51648 8.39335 5.34413C8.5657 5.17174 8.84519 5.17174 9.01753 5.34413L11.8264 8.15302ZM0.929621 0.581055V8.46511H0.046875V0.581055H0.929621ZM0.488248 8.02372H11.5143V8.9065H0.488248V8.02372Z"
                        fill="#171717"
                      />
                    </svg>
                    Email Contact
                  </Link>
                </div>
              </div>
              <div className="footer-info-solid" />
              <div className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="social">
                  {dataSocial.map(({ img, link }) => (
                    <a key={img} href={link} className="socialLink">
                      <img src={img} alt={img} />
                    </a>
                  ))}
                </div>
                <Image
                  src="/images/footer-partners.svg"
                  alt="footer-partners"
                  width="180"
                  height="30"
                />
              </div>
              <div className="d-block d-md-none mt-5">
                <p className="footer-description">
                  Copyright © 2024, ZKTeco Co., LTD. ZKTeco Logo is a
                  registered trademark of ZKTeco or a related company. All other
                  product and company names mentioned are used for
                  identification purposes only and may be the trademarks of
                  their respective owners. All specifications are subject to
                  change without notice. All rights reserved.
                </p>
                <p className="footer-description mt-5 mb-2">
                  ZKTeco EU-U.S. Privacy Shield Policy
                </p>
                <p className="footer-description d-none d-lg-block">
                  ZKTeco Biometric Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
