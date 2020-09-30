import React, { useState } from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import useWindowWidth from "../hooks/useWindowWidth";

function NavigatorMenu({ theme, scroller }) {
  const [openedMenu, setOpenedMenu] = useState(false);
  const { width } = useWindowWidth();

  const toggleMenu = () => {
    setOpenedMenu((prevOpenedMenu) => !prevOpenedMenu);
  };

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      {width < 768 ? (
        <>
          {openedMenu ? (
            <div onClick={toggleMenu}>
              <KeyboardArrowUpIcon
                fontSize="large"
                className={`${theme}-transparent cursor-pointer mb-5`}
              />
            </div>
          ) : (
            <div onClick={toggleMenu}>
              <KeyboardArrowDownIcon
                fontSize="large"
                className={`${theme}-transparent cursor-pointer mb-5`}
              />
            </div>
          )}
          {!openedMenu ? null : (
            <ul
              className={`${theme}-transparent md:flex md:flex-row md:justify-center md:align-middle md:pb-8`}
            >
              <li className="md:pr-32 pb-10 md:pb-0 cursor-pointer">
                <p onClick={() => scrollToElement("goalsElement")}>goals</p>
              </li>
              <li className="md:pr-32 pb-10 md:pb-0 cursor-pointer">
                <p onClick={() => scrollToElement("skillsElement")}>skills</p>
              </li>
              <li className="md:pr-32 pb-10 md:pb-0 cursor-pointer">
                <p onClick={() => scrollToElement("experienceElement")}>
                  experience
                </p>
              </li>
              <li className="md:pr-32 pb-10 md:pb-0 cursor-pointer">
                <p onClick={() => scrollToElement("portfolioElement")}>
                  portfolio
                </p>
              </li>
              <li className="pb-10 md:pb-0 cursor-pointer">
                <p onClick={() => scrollToElement("contactElement")}>contact</p>
              </li>
            </ul>
          )}
        </>
      ) : (
        <div>
          <ul
            className={`${theme}-transparent md:flex md:flex-row md:justify-center md:align-middle md:pb-8`}
          >
            <li className="md:pr-32 pb-10 md:pb-0 cursor-pointer">
              <p onClick={() => scrollToElement("goalsElement")}>goals</p>
            </li>
            <li className="md:pr-32 pb-10 md:pb-0 cursor-pointer">
              <p onClick={() => scrollToElement("skillsElement")}>skills</p>
            </li>
            <li className="md:pr-32 pb-10 md:pb-0 cursor-pointer">
              <p onClick={() => scrollToElement("experienceElement")}>
                experience
              </p>
            </li>
            <li className="md:pr-32 pb-10 md:pb-0 cursor-pointer">
              <p onClick={() => scrollToElement("portfolioElement")}>
                portfolio
              </p>
            </li>
            <li className="pb-10 md:pb-0 cursor-pointer">
              <p onClick={() => scrollToElement("contactElement")}>
                <span className="no-select">contact</span>
              </p>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default NavigatorMenu;
