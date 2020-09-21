import React, { useState } from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import useWindowWidth from "../hooks/useWindowWidth";

function NavigatorMenu({ theme }) {
  const [openedMenu, setOpenedMenu] = useState(false);
  const { width } = useWindowWidth();

  const toggleMenu = () => {
    setOpenedMenu((prevOpenedMenu) => !prevOpenedMenu);
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
              <li
                className="md:pr-20 pb-10 md:pb-0"
                onClick={() => alert("presionado")}
              >
                <div className="cursor-pointer">goals</div>
              </li>
              <li
                className="md:pr-20 pb-10 md:pb-0"
                onClick={() => alert("presionado")}
              >
                <div className="cursor-pointer">skills</div>
              </li>
              <li
                className="md:pr-20 pb-10 md:pb-0"
                onClick={() => alert("presionado")}
              >
                <div className="cursor-pointer">experience</div>
              </li>
              <li
                className="md:pr-20 pb-10 md:pb-0"
                onClick={() => alert("presionado")}
              >
                <div className="cursor-pointer">portfolio</div>
              </li>
              <li className="pb-10 md:pb-0" onClick={() => alert("presionado")}>
                <div className="cursor-pointer">contact</div>
              </li>
            </ul>
          )}
        </>
      ) : (
        <div>
          <ul
            className={`${theme}-transparent md:flex md:flex-row md:justify-center md:align-middle md:pb-8`}
          >
            <li
              className="md:pr-20 pb-10 md:pb-0"
              onClick={() => alert("presionado")}
            >
              <div className="cursor-pointer">goals</div>
            </li>
            <li
              className="md:pr-20 pb-10 md:pb-0"
              onClick={() => alert("presionado")}
            >
              <div className="cursor-pointer">skills</div>
            </li>
            <li
              className="md:pr-20 pb-10 md:pb-0"
              onClick={() => alert("presionado")}
            >
              <div className="cursor-pointer">experience</div>
            </li>
            <li
              className="md:pr-20 pb-10 md:pb-0"
              onClick={() => alert("presionado")}
            >
              <div className="cursor-pointer">portfolio</div>
            </li>
            <li className="pb-10 md:pb-0" onClick={() => alert("presionado")}>
              <div className="cursor-pointer">contact</div>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default NavigatorMenu;
