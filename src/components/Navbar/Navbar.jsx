import React from "react";
import "./Navbar.css";
import imgLogo from "../img/Black_Friday_top.png"
import logo from "../img/logo-white.png"
import logoRigth from "../img/60-day.png"

export default function Navbar() {
  return (
    <div className="container-nav">
      <img
        src={imgLogo}
        alt=""
        className="img-navbar"
      />
      <div className="container-title">
        <span className="attention">
          <b> Attention:</b>
        </span>{" "}
        Your{" "}
        <span className="number-nav">
          <b>60%</b>
        </span>{" "}
        off Discount has been applied!
      </div>
      <div className="container-logo-backgrou">
        <div className="container">
          <div className="row img-navbar-top ">
            <div className="col-8 logo-title">
              <img
                src={logo}
                alt=""
                className="img-logo"
              />
              <p className="secure-checkout">
                SECURE <br /> CHECKOUT
              </p>
            </div>

            <div className="col-4 title-rigth">
              {" "}
              <div>
                <i class="fa-solid fa-phone"></i>
                <span className="question">Questions? Call: <span className="numeber-phone">+1(866) 895-6759</span></span>
              </div>
              <div className="container-logo-narbar-rigth">
                <img
                  src={logoRigth}
                  alt=""
                  className="logo-nav-bar"
                />
                <p>
                  30 Days 100% Money <br /> Back Guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
