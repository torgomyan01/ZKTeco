"use client";
import "./style.scss";
import Link from "next/link";
import Image from "next/image";
import Star from "@components/layout/navbar/Star";
import { bodyOverflow, RandomKey } from "@utils/helpers";
import { useState } from "react";
import { SITE_URL } from "@utils/consts";

interface IMenu {
  menuName: string;
  items: {
    left: {
      title: string;
      items: {
        color: string;
        title: string;
        subtitle: string;
        url: string;
      }[];
    };
    right: {
      title: string;
      items: {
        color: string;
        title: string;
        subtitle: string;
        url: string;
      }[];
    };
  };
}

const menu = [
  {
    menuName: "Products",
    items: {
      left: {
        title: "Ultima Series 2:",
        items: [
          {
            color: "#F8CA68",
            title: "Ultima 10",
            subtitle: "Time Tracking terminals",
            url: SITE_URL.PRODUCTS_TIME_TRACK,
          },
          {
            color: "#C5C38A",
            title: "Ultima 7",
            subtitle: "Time Tracking terminals",
            url: SITE_URL.PRODUCTS_TIME_TRACK,
          },
          {
            color: "#CFB994",
            title: "Ultima 5",
            subtitle: "Time Tracking terminals",
            url: SITE_URL.PRODUCTS_TIME_TRACK,
          },
        ],
      },
      right: {
        title: "Other:",
        items: [
          {
            color: "#796EB3",
            title: "Terminals by Technology",
            subtitle: "Time Tracking terminals",
            url: SITE_URL.PRODUCTS_TIME_TRACK,
          },
          {
            color: "#7EBB48",
            title: "Cirrus DCS for HCM",
            subtitle: "Time Tracking terminals",
            url: SITE_URL.PRODUCTS_TIME_TRACK,
          },
          {
            color: "#A9B8B9",
            title: "TimeTrack",
            subtitle: "Time Tracking terminals",
            url: SITE_URL.PRODUCTS_TIME_TRACK,
          },
          {
            color: "#84C1C8",
            title: "Product Development",
            subtitle: "Time Tracking terminals",
            url: SITE_URL.PRODUCTS_TIME_TRACK,
          },
        ],
      },
    },
  },
  {
    menuName: "Workday",
    items: {
      left: {
        title: "",
        items: [
          {
            color: "#F8CA68",
            title: "Cirrus DCS for Workday",
            subtitle: "Time Tracking terminals",
            url: SITE_URL.PRODUCTS_TIME_TRACK,
          },
        ],
      },
      right: {
        title: "",
        items: [
          {
            color: "#796EB3",
            title: "Ultima",
            subtitle: "Time Tracking terminals",
            url: SITE_URL.PRODUCTS_TIME_TRACK,
          },
        ],
      },
    },
  },
  {
    menuName: "Support",
    items: {
      left: {
        title: "",
        items: [
          {
            color: "#F8CA68",
            title: "Workday Customer Support",
            subtitle: "Time Tracking terminals",
            url: SITE_URL.PRODUCTS_TIME_TRACK,
          },
        ],
      },
      right: {
        title: "",
        items: [
          {
            color: "#796EB3",
            title: "ZK Data Collection Support",
            subtitle: "Time Tracking terminals",
            url: SITE_URL.PRODUCTS_TIME_TRACK,
          },
        ],
      },
    },
  },
  {
    menuName: "About Us",
    items: {
      left: {
        title: "Ultima Series 2:",
        items: [
          {
            color: "#F8CA68",
            title: "Why ZKTeco?",
            subtitle: "Time Tracking terminals",
            url: SITE_URL.PRODUCTS_TIME_TRACK,
          },
          {
            color: "#F8CA68",
            title: "Blogs",
            subtitle: "Time Tracking terminals",
            url: SITE_URL.PRODUCTS_TIME_TRACK,
          },
          {
            color: "#F8CA68",
            title: "Career Opportunities",
            subtitle: "Time Tracking terminals",
            url: SITE_URL.PRODUCTS_TIME_TRACK,
          },
        ],
      },
      right: {
        title: "",
        items: [
          {
            color: "#796EB3",
            title: "Resources",
            subtitle: "Time Tracking terminals",
            url: SITE_URL.PRODUCTS_TIME_TRACK,
          },
          {
            color: "#7EBB48",
            title: "Events",
            subtitle: "Time Tracking terminals",
            url: SITE_URL.PRODUCTS_TIME_TRACK,
          },
        ],
      },
    },
  },
];

interface IThisPros {
  menuColor: "white" | "black";
}

function Navbar({ menuColor }: IThisPros) {
  const [handleMenu, setHandleMenu] = useState<boolean>(false);
  const [selectedMenu, setSelectedMenu] = useState<IMenu | null>(null);
  const [handleMobileMenu, setHandleMobileMenu] = useState<boolean>(false);

  function changeMenu(selectedMenu: IMenu | null) {
    setSelectedMenu(selectedMenu);
    setHandleMenu(true);
    bodyOverflow(true);
  }

  function closeMenu() {
    setHandleMenu(false);
    setSelectedMenu(null);
    setHandleMobileMenu(false);
    bodyOverflow(false);
  }

  function OpenCloseMobileMenu() {
    const val = !handleMobileMenu;
    setSelectedMenu(null);
    setHandleMobileMenu(val);
    if (val) {
      bodyOverflow(true);
    } else {
      bodyOverflow(false);
    }
  }

  function selectMobileMenu(selectedMenu: IMenu | null) {
    setSelectedMenu(selectedMenu);
  }

  function closeSelectedMenu() {
    setSelectedMenu(null);
  }

  return (
    <>
      <div
        onClick={closeMenu}
        className={`menu-site-fon ${handleMenu || handleMobileMenu ? "active" : ""}`}
      />
      <div className={`menu-site-opened ${handleMenu ? "active" : ""} `}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h4 className="menu-site-opened-title">
                {selectedMenu?.items.left.title}
              </h4>

              {selectedMenu?.items.left.items.map((item) => (
                <Link key={RandomKey()} href={item.url}>
                  <div className="d-flex justify-content-start align-items-center mb-3">
                    <div className="me-3">
                      <Star colorStar={item.color} />
                    </div>
                    <div>
                      <p className="menu-site-opened-item-title">
                        {item.title}
                      </p>
                      <p className="menu-site-opened-item-subtitle">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="col-6">
              <h4 className="menu-site-opened-title">
                {selectedMenu?.items.right.title}
              </h4>

              {selectedMenu?.items.right.items.map((item) => (
                <Link key={RandomKey()} href={item.url}>
                  <div className="d-flex justify-content-start align-items-center mb-3">
                    <div className="me-3">
                      <Star colorStar={item.color} />
                    </div>
                    <div>
                      <p className="menu-site-opened-item-title">
                        {item.title}
                      </p>
                      <p className="menu-site-opened-item-subtitle">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={`menu-site ${handleMenu ? "active" : ""} ${menuColor}`}>
        <div className="container d-flex justify-content-between align-items-center">
          <Link href={SITE_URL.HOME}>
            <Image
              src="/logo-site-black.svg"
              alt="header logo"
              width="149"
              height="50"
              className="header-logo"
            />
          </Link>
          <ul className="menu-list d-none d-lg-flex">
            {menu.map((item) => (
              <li
                key={RandomKey()}
                onClick={() => changeMenu(item)}
                className={`${selectedMenu?.menuName === item.menuName && "active"}`}
              >
                {item.menuName}
                <i className="fa-regular fa-chevron-down" />
              </li>
            ))}
          </ul>
          <Link href={SITE_URL.CONTACT_US}>
            <button className="btn btn-green d-none d-lg-flex">
              Contact Us
              <span>
                <i className="fa-regular fa-arrow-right" />
              </span>
            </button>
          </Link>
          <div
            className={`mobile-menu-board ${handleMobileMenu ? "active" : ""}`}
            onClick={OpenCloseMobileMenu}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      <div className={`mobile-menu-opened ${handleMobileMenu ? "active" : ""}`}>
        <div
          className={`mobile-menu-opened-container ${selectedMenu ? "active" : ""}`}
        >
          <div className="mobile-menu-opened-left">
            <ul className="menu-list">
              {menu.map((item) => (
                <li key={RandomKey()} onClick={() => selectMobileMenu(item)}>
                  {item.menuName}
                  <i className="fa-regular fa-chevron-down" />
                </li>
              ))}
            </ul>
          </div>
          <div className="mobile-menu-opened-right">
            <div
              className="mobile-menu-opened-right-back"
              onClick={closeSelectedMenu}
            >
              <i className="fa-solid fa-chevron-left me-2" />
              {selectedMenu?.menuName}
            </div>
            <div className="row">
              <div className="col-12">
                <h4 className="menu-site-opened-title">
                  {selectedMenu?.items.left.title}
                </h4>

                {selectedMenu?.items.left.items.map((item) => (
                  <Link key={RandomKey()} href={item.url}>
                    <div className="d-flex justify-content-start align-items-center mb-3">
                      <div className="me-3">
                        <Star colorStar={item.color} />
                      </div>
                      <div>
                        <p className="menu-site-opened-item-title">
                          {item.title}
                        </p>
                        <p className="menu-site-opened-item-subtitle">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="col-12">
                <h4 className="menu-site-opened-title">
                  {selectedMenu?.items.right.title}
                </h4>

                {selectedMenu?.items.right.items.map((item) => (
                  <Link key={RandomKey()} href={item.url}>
                    <div className="d-flex justify-content-start align-items-center mb-3">
                      <div className="me-3">
                        <Star colorStar={item.color} />
                      </div>
                      <div>
                        <p className="menu-site-opened-item-title">
                          {item.title}
                        </p>
                        <p className="menu-site-opened-item-subtitle">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link href={SITE_URL.CONTACT_US}>
            <button className="btn btn-green mt-5">
              Contact Us
              <span>
                <i className="fa-regular fa-arrow-right" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
