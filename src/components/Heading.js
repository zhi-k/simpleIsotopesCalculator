import React, { useState, useEffect } from "react";
import OptionsButton from "./OptionsButton";
import logo from "../hamburger.svg";

export default function Heading() {
  const [navVisible, setNavVisible] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const screenSize = window.matchMedia("(max-width: 992px)");
    screenSize.addListener(handleScreenChange);
    handleScreenChange(screenSize);

    return () => {
      screenSize.removeListener(handleScreenChange);
    };
  }, []);

  function handleScreenChange(screenSize) {
    if (screenSize.matches) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  }

  function toggleNav() {
    setNavVisible(!navVisible);
  }

  return (
    <div className="container d-flex p-1 align-items-center">
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-2 border-bottom w-100 fixed-top">
        <div className="navbar-brand ml-2" href="#">
          <strong className="h4 font-weight-bold">Isotopes Calculator</strong>
        </div>
        <button id="toggle" className="mx-1 btn" style={{ display: "none" }} onClick={toggleNav}>
          <img src={logo} height="15" width="15" />
        </button>
        {(navVisible || !smallScreen) && (
          <div className="navbar-collapse">
            <ul className="navbar-nav mr-auto mt-lg-0 ml-3">
              <li className="nav-item active">
                <a
                  className="nav-link"
                  href="https://github.com/zhi-k/simpleIsotopesCalculator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/in/zhi-kang-chong-2ab14b80/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        )}
        <OptionsButton />
        <div className="my-2 my-lg-0 mr-3 text-muted" id="copyright">
          Made by Zhi Kang
        </div>
      </nav>
    </div>
  );
}
