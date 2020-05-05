import React from "react";
import OptionsButton from "./OptionsButton";

export default function Heading() {
  return (
    <div className="container d-flex p-1 align-items-center">
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-2 border-bottom w-100 fixed-top">
        <div className="navbar-brand ml-2" href="#">
          <strong className="h4 font-weight-bold">FDG Calculator</strong>
        </div>
        <div className="navbar-collapse">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ml-3">
            <li className="nav-item active">
              <a
                className="nav-link"
                href="https://github.com/zhi-k?tab=repositories"
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
          <OptionsButton />
          <div className="my-2 my-lg-0 mr-3 text-muted" id="copyright">
            Made by Zhi Kang
          </div>
        </div>
      </nav>
    </div>
  );
}
