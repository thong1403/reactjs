import React from "react";
import "./Content.css";
import ContenRigth from "./contenrigth/ContenRigth";
import pakage from "../img/package-3-1-c.png";
import pakage1 from "../img/package-1-c.png";
import pakage2 from "../img/package-2-c.png";
import pakage4 from "../img/package-4-c.png";
import pakage5 from "../img/package-5-c.png";
import Buttom from "./buttom/Buttom";
export default function Content() {
  return (
    <>
      {" "}
      <div className="container">
        <div className="row">
          <div className="col-8 ">
            <h5>STEP 1: SELECT PACKAGE</h5>
            <div className="container-content-cart">
              <div className="col-12 content-item">
                <div>
                  <span className="title-content-item">
                    <b>Buy 3 Alpha Heater</b>{" "}
                  </span>
                  <span className="save">
                    <b>Save 60%</b>{" "}
                  </span>
                  <span className="best">
                    <b>Best Seller</b>
                  </span>
                </div>
                <div className="icon-fast">
                  <i class="fa-solid fa-truck"></i>
                  <span>
                    <b>FAST SHIPPING</b>
                  </span>
                </div>
              </div>
              <div class="d-flex pt-2 pb-2 package-content justify-content-start">
                <div>
                  <input type="checkbox" className="inptu-checkbox" />
                </div>
                <div class="ml-5 package-image">
                  <img class="product-img" src={pakage} alt="" />
                </div>
                <div class="ml-2 ml-md-3 pr-3 package-info">
                  <div class="pi-1 pl-lg-1">
                    Multi-Room Pack{" "}
                    <span class="pkg-savings discountPercentage">0</span>
                  </div>
                  <div class="pi-2 pl-lg-1">3x Multi-Room Pack</div>
                  <div class="pi-price-sa pl-lg-1">Only</div>
                  <div class="pi-price-each pl-lg-1">
                    <span class="currency-block buy-each">
                      <b>$44.96</b>{" "}
                    </span>
                    <span class="small-each">/each</span>
                  </div>
                  <div class="pi-price-orig pl-lg-1 text-danger font-italic">
                    <span>Orig</span>
                    <span class="currency-block reg-price">$299.70</span>
                  </div>
                  <div class="pi-price-save pl-lg-1 text-success font-weight-bold">
                    <span>You Save</span>
                    <span class="currency-block save-price">$164.83!</span>
                  </div>
                  <div class="pi-price-total pl-lg-1 font-weight-bold">
                    Total:
                    <span class="currency-block buy">
                      <b>$134.87</b>{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div class="features row mb-2 mx-1 py-1">
                <div class="col-6 col-md-3 col-lg-3 p-0">
                  <ul class="ml-2 ml-lg-4 mb-0 p-0">
                    <li>Built in timer with 4 modes</li>
                    <li>Portable and compact design</li>
                  </ul>
                </div>
                <div class="col-6 col-md-3 col-lg-3 p-0">
                  <ul class="ml-2 ml-lg-4 mb-0 p-0">
                    <li>PTC ceramic technology</li>
                    <li>Tip over safety feature</li>
                  </ul>
                </div>
                <div class="col-6 col-md-3 col-lg-3 p-0">
                  <ul class="ml-2 ml-lg-4 mb-0 p-0">
                    <li>Child, family &amp; pet friendly</li>
                    <li>3 second heat up time</li>
                  </ul>
                </div>
                <div class="col-6 col-md-3 col-lg-3 p-0">
                  <ul class="ml-2 ml-lg-4 mb-0 p-0">
                    <li>Energy efficient</li>
                    <li>Environmentally friendly</li>
                  </ul>
                </div>
              </div>
              <div class="mx-auto px-1 px-md-5 package-bullet-wrapper">
                <div class="d-flex py-1 package-bullet-container">
                  <div class="flex-fill text-center bullet-item">
                    Sell-Out Risk: <span className="higth">High</span>
                  </div>
                  <div class="flex-fill text-center bullet-sep">•</div>
                  <div class="flex-fill text-center bullet-item font-weight-bold text-success">
                    <b>FAST SHIPPING</b>
                  </div>
                  <div class="flex-fill text-center bullet-sep">•</div>
                  <div class="flex-fill text-center bullet-item font-weight-bold text-danger">
                    <b>
                      {" "}
                      Discount: <span class="package-main-save2">60%</span>
                    </b>
                  </div>
                  <div class="flex-fill text-center bullet-sep">•</div>
                  <div class="flex-fill text-center bullet-item font-weight-bold text-success">
                    <i class="fad fa-signal-4"></i>
                    <b>Best Seller</b>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="container-content-cart">
              <div className="col-12 content-item">
                <div>
                  <span className="title-content-item">
                    <b>Buy 1 Alpha Heater</b>{" "}
                  </span>
                  <span className="save">
                    <b>Save 50%</b>{" "}
                  </span>
                  <span className="best none">
                    <b>Best Seller</b>
                  </span>
                </div>
                <div className="icon-fast truck">
                  <i class="fa-solid fa-truck"></i>
                  <span>
                    <b>FAST SHIPPING</b>
                  </span>
                </div>
              </div>
              <div class="d-flex pt-2 pb-2 package-content justify-content-start">
                <div>
                  <input type="checkbox" className="inptu-checkbox" />
                </div>
                <div class="ml-5 package-image">
                  <img class="product-img" src={pakage1} alt="" />
                </div>
                <div class="ml-2 ml-md-3 pr-3 package-info">
                  <div class="pi-1 pl-lg-1">
                    Studio Pack{" "}
                    <span class="pkg-savings discountPercentage">0</span>
                  </div>
                  <div class="pi-2 pl-lg-1">1x Single Pack</div>
                  <div class="pi-price-sa pl-lg-1">Only</div>
                  <div class="pi-price-each pl-lg-1">
                    <span class="currency-block buy-each">
                      <b>$49.95</b>{" "}
                    </span>
                    <span class="small-each">/each</span>
                  </div>
                  <div class="pi-price-orig pl-lg-1 text-danger font-italic">
                    <span>Orig</span>
                    <span class="currency-block reg-price">$99.90</span>
                  </div>
                  <div class="pi-price-save pl-lg-1 text-success font-weight-bold">
                    <span>You Save</span>
                    <span class="currency-block save-price">$49.95!</span>
                  </div>
                  <div class="pi-price-total pl-lg-1 font-weight-bold">
                    Total:
                    <span class="currency-block buy">
                      <b>$49.95</b>{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div class="features row mb-2 mx-1 py-1">
                <div class="col-6 col-md-3 col-lg-3 p-0">
                  <ul class="ml-2 ml-lg-4 mb-0 p-0">
                    <li>Built in timer with 4 modes</li>
                    <li>Portable and compact design</li>
                  </ul>
                </div>
                <div class="col-6 col-md-3 col-lg-3 p-0">
                  <ul class="ml-2 ml-lg-4 mb-0 p-0">
                    <li>PTC ceramic technology</li>
                    <li>Tip over safety feature</li>
                  </ul>
                </div>
                <div class="col-6 col-md-3 col-lg-3 p-0">
                  <ul class="ml-2 ml-lg-4 mb-0 p-0">
                    <li>Child, family &amp; pet friendly</li>
                    <li>3 second heat up time</li>
                  </ul>
                </div>
                <div class="col-6 col-md-3 col-lg-3 p-0">
                  <ul class="ml-2 ml-lg-4 mb-0 p-0">
                    <li>Energy efficient</li>
                    <li>Environmentally friendly</li>
                  </ul>
                </div>
              </div>
              <div class="mx-auto px-1 px-md-5 package-bullet-wrapper">
                <div class="d-flex py-1 package-bullet-container">
                  <div class="flex-fill text-center bullet-item">
                    Sell-Out Risk: <span className="higth">High</span>
                  </div>
                  <div class="flex-fill text-center bullet-sep">•</div>
                  <div class="flex-fill text-center bullet-item font-weight-bold text-success">
                    <b>FAST SHIPPING</b>
                  </div>
                  <div class="flex-fill text-center bullet-sep">•</div>
                  <div class="flex-fill text-center bullet-item font-weight-bold text-danger">
                    <b>
                      {" "}
                      Discount: <span class="package-main-save2">60%</span>
                    </b>
                  </div>
                  <div class="flex-fill text-center bullet-sep">•</div>
                  <div class="flex-fill text-center bullet-item font-weight-bold text-success">
                    <i class="fad fa-signal-4"></i>
                    <b>Best Seller</b>{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="container-content-cart">
              <div className="col-12 content-item">
                <div>
                  <span className="title-content-item">
                    <b>Buy 2 Alpha Heater</b>{" "}
                  </span>
                  <span className="save">
                    <b>Save 55%</b>{" "}
                  </span>
                  <span className="best none">
                    <b>Best Seller</b>
                  </span>
                </div>
                <div className="icon-fast truck">
                  <i class="fa-solid fa-truck"></i>
                  <span>
                    <b>FAST SHIPPING</b>
                  </span>
                </div>
              </div>
              <div class="d-flex pt-2 pb-2 package-content justify-content-start">
                <div>
                  <input type="checkbox" className="inptu-checkbox" />
                </div>
                <div class="ml-5 package-image">
                  <img class="product-img" src={pakage2} alt="" />
                </div>
                <div class="ml-2 ml-md-3 pr-3 package-info">
                  <div class="pi-1 pl-lg-1">
                    Studio Pack{" "}
                    <span class="pkg-savings discountPercentage">0</span>
                  </div>
                  <div class="pi-2 pl-lg-1">2x Single Pack</div>
                  <div class="pi-price-sa pl-lg-1">Only</div>
                  <div class="pi-price-each pl-lg-1">
                    <span class="currency-block buy-each">
                      <b>47.45</b>{" "}
                    </span>
                    <span class="small-each">/each</span>
                  </div>
                  <div class="pi-price-orig pl-lg-1 text-danger font-italic">
                    <span>Orig</span>
                    <span class="currency-block reg-price">$199.80</span>
                  </div>
                  <div class="pi-price-save pl-lg-1 text-success font-weight-bold">
                    <span>You Save</span>
                    <span class="currency-block save-price">$104.89!</span>
                  </div>
                  <div class="pi-price-total pl-lg-1 font-weight-bold">
                    Total:
                    <span class="currency-block buy">
                      <b>$94.91</b>{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div class="features row mb-2 mx-1 py-1">
                <div class="col-6 col-md-3 col-lg-3 p-0">
                  <ul class="ml-2 ml-lg-4 mb-0 p-0">
                    <li>Built in timer with 4 modes</li>
                    <li>Portable and compact design</li>
                  </ul>
                </div>
                <div class="col-6 col-md-3 col-lg-3 p-0">
                  <ul class="ml-2 ml-lg-4 mb-0 p-0">
                    <li>PTC ceramic technology</li>
                    <li>Tip over safety feature</li>
                  </ul>
                </div>
                <div class="col-6 col-md-3 col-lg-3 p-0">
                  <ul class="ml-2 ml-lg-4 mb-0 p-0">
                    <li>Child, family &amp; pet friendly</li>
                    <li>3 second heat up time</li>
                  </ul>
                </div>
                <div class="col-6 col-md-3 col-lg-3 p-0">
                  <ul class="ml-2 ml-lg-4 mb-0 p-0">
                    <li>Energy efficient</li>
                    <li>Environmentally friendly</li>
                  </ul>
                </div>
              </div>
              <div class="mx-auto px-1 px-md-5 package-bullet-wrapper">
                <div class="d-flex py-1 package-bullet-container">
                  <div class="flex-fill text-center bullet-item">
                    Sell-Out Risk: <span className="higth">High</span>
                  </div>
                  <div class="flex-fill text-center bullet-sep">•</div>
                  <div class="flex-fill text-center bullet-item font-weight-bold text-success">
                    <b>FAST SHIPPING</b>
                  </div>
                  <div class="flex-fill text-center bullet-sep">•</div>
                  <div class="flex-fill text-center bullet-item font-weight-bold text-danger">
                    <b>
                      {" "}
                      Discount: <span class="package-main-save2">60%</span>
                    </b>
                  </div>
                  <div class="flex-fill text-center bullet-sep">•</div>
                  <div class="flex-fill text-center bullet-item font-weight-bold text-success">
                    <i class="fad fa-signal-4"></i>
                    <b>Best Seller</b>{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="container-content-cart">
              <div className="col-12 content-item">
                <div>
                  <span className="title-content-item">
                    <b>Buy 4 Alpha Heater</b>{" "}
                  </span>
                  <span className="save">
                    <b>Save 65%</b>{" "}
                  </span>
                  <span className="best none">
                    <b>Best Seller</b>
                  </span>
                </div>
                <div className="icon-fast truck">
                  <i class="fa-solid fa-truck"></i>
                  <span>
                    <b>FAST SHIPPING</b>
                  </span>
                </div>
              </div>
              <div class="d-flex pt-2 pb-2 package-content justify-content-start">
                <div>
                  <input type="checkbox" className="inptu-checkbox" />
                </div>
                <div class="ml-5 package-image">
                  <img class="product-img" src={pakage4} alt="" />
                </div>
                <div class="ml-2 ml-md-3 pr-3 package-info">
                  <div class="pi-1 pl-lg-1">
                    Expansive Pack{" "}
                    <span class="pkg-savings discountPercentage">0</span>
                  </div>
                  <div class="pi-2 pl-lg-1">4x Expansive Pack</div>
                  <div class="pi-price-sa pl-lg-1">Only</div>
                  <div class="pi-price-each pl-lg-1">
                    <span class="currency-block buy-each">
                      <b>$42.46</b>{" "}
                    </span>
                    <span class="small-each">/each</span>
                  </div>
                  <div class="pi-price-orig pl-lg-1 text-danger font-italic">
                    <span>Orig</span>
                    <span class="currency-block reg-price"> $399.60</span>
                  </div>
                  <div class="pi-price-save pl-lg-1 text-success font-weight-bold">
                    <span>You Save</span>
                    <span class="currency-block save-price"> $229.77!</span>
                  </div>
                  <div class="pi-price-total pl-lg-1 font-weight-bold">
                    Total:
                    <span class="currency-block buy">
                      <b> $169.83</b>{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div class="features row mb-2 mx-1 py-1">
                <div class="col-6 col-md-3 col-lg-3 p-0">
                  <ul class="ml-2 ml-lg-4 mb-0 p-0">
                    <li>Built in timer with 4 modes</li>
                    <li>Portable and compact design</li>
                  </ul>
                </div>
                <div class="col-6 col-md-3 col-lg-3 p-0">
                  <ul class="ml-2 ml-lg-4 mb-0 p-0">
                    <li>PTC ceramic technology</li>
                    <li>Tip over safety feature</li>
                  </ul>
                </div>
                <div class="col-6 col-md-3 col-lg-3 p-0">
                  <ul class="ml-2 ml-lg-4 mb-0 p-0">
                    <li>Child, family &amp; pet friendly</li>
                    <li>3 second heat up time</li>
                  </ul>
                </div>
                <div class="col-6 col-md-3 col-lg-3 p-0">
                  <ul class="ml-2 ml-lg-4 mb-0 p-0">
                    <li>Energy efficient</li>
                    <li>Environmentally friendly</li>
                  </ul>
                </div>
              </div>
              <div class="mx-auto px-1 px-md-5 package-bullet-wrapper">
                <div class="d-flex py-1 package-bullet-container">
                  <div class="flex-fill text-center bullet-item">
                    Sell-Out Risk: <span className="higth">High</span>
                  </div>
                  <div class="flex-fill text-center bullet-sep">•</div>
                  <div class="flex-fill text-center bullet-item font-weight-bold text-success">
                    <b>FAST SHIPPING</b>
                  </div>
                  <div class="flex-fill text-center bullet-sep">•</div>
                  <div class="flex-fill text-center bullet-item font-weight-bold text-danger">
                    <b>
                      {" "}
                      Discount: <span class="package-main-save2">60%</span>
                    </b>
                  </div>
                  <div class="flex-fill text-center bullet-sep">•</div>
                  <div class="flex-fill text-center bullet-item font-weight-bold text-success">
                    <i class="fad fa-signal-4"></i>
                    <b>Best Seller</b>{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="container-content-cart">
              <div className="col-12 content-item">
                <div>
                  <span className="title-content-item">
                    <b>Buy 5 Alpha Heater</b>{" "}
                  </span>
                  <span className="save">
                    <b>Save 70%</b>{" "}
                  </span>
                  <span className="best none">
                    <b>Best Seller</b>
                  </span>
                </div>
                <div className="icon-fast truck">
                  <i class="fa-solid fa-truck"></i>
                  <span>
                    <b>FAST SHIPPING</b>
                  </span>
                </div>
              </div>
              <div class="d-flex pt-2 pb-2 package-content justify-content-start">
                <div>
                  <input type="checkbox" className="inptu-checkbox" />
                </div>
                <div class="ml-5 package-image">
                  <img class="product-img" src={pakage5} alt="" />
                </div>
                <div class="ml-2 ml-md-3 pr-3 package-info">
                  <div class="pi-1 pl-lg-1">
                    Deluxe Family Pack{" "}
                    <span class="pkg-savings discountPercentage">0</span>
                  </div>
                  <div class="pi-2 pl-lg-1">5x Deluxe Family Pack</div>
                  <div class="pi-price-sa pl-lg-1">Only</div>
                  <div class="pi-price-each pl-lg-1">
                    <span class="currency-block buy-each">
                      <b>$39.96</b>{" "}
                    </span>
                    <span class="small-each">/each</span>
                  </div>
                  <div class="pi-price-orig pl-lg-1 text-danger font-italic">
                    <span>Orig</span>
                    <span class="currency-block reg-price"> $499.50</span>
                  </div>
                  <div class="pi-price-save pl-lg-1 text-success font-weight-bold">
                    <span>You Save</span>
                    <span class="currency-block save-price"> $299.70!</span>
                  </div>
                  <div class="pi-price-total pl-lg-1 font-weight-bold">
                    Total:
                    <span class="currency-block buy">
                      <b> $199.80</b>{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div class="features row mb-2 mx-1 py-1">
                <div class="col-6 col-md-3 col-lg-3 p-0">
                  <ul class="ml-2 ml-lg-4 mb-0 p-0">
                    <li>Built in timer with 4 modes</li>
                    <li>Portable and compact design</li>
                  </ul>
                </div>
                <div class="col-6 col-md-3 col-lg-3 p-0">
                  <ul class="ml-2 ml-lg-4 mb-0 p-0">
                    <li>PTC ceramic technology</li>
                    <li>Tip over safety feature</li>
                  </ul>
                </div>
                <div class="col-6 col-md-3 col-lg-3 p-0">
                  <ul class="ml-2 ml-lg-4 mb-0 p-0">
                    <li>Child, family &amp; pet friendly</li>
                    <li>3 second heat up time</li>
                  </ul>
                </div>
                <div class="col-6 col-md-3 col-lg-3 p-0">
                  <ul class="ml-2 ml-lg-4 mb-0 p-0">
                    <li>Energy efficient</li>
                    <li>Environmentally friendly</li>
                  </ul>
                </div>
              </div>
              <div class="mx-auto px-1 px-md-5 package-bullet-wrapper">
                <div class="d-flex py-1 package-bullet-container">
                  <div class="flex-fill text-center bullet-item">
                    Sell-Out Risk: <span className="higth">High</span>
                  </div>
                  <div class="flex-fill text-center bullet-sep">•</div>
                  <div class="flex-fill text-center bullet-item font-weight-bold text-success">
                    <b>FAST SHIPPING</b>
                  </div>
                  <div class="flex-fill text-center bullet-sep">•</div>
                  <div class="flex-fill text-center bullet-item font-weight-bold text-danger">
                    <b>
                      {" "}
                      Discount: <span class="package-main-save2">60%</span>
                    </b>
                  </div>
                  <div class="flex-fill text-center bullet-sep">•</div>
                  <div class="flex-fill text-center bullet-item font-weight-bold text-success">
                    <i class="fad fa-signal-4"></i>
                    <b>Best Seller</b>{" "}
                  </div>
                </div>
              </div>
            </div>

            <div class="d-none d-md-flex row p-2 mx-0 mb-3 order-summary order-summary-top cc-section-container">
              <div class="d-none d-lg-block col-lg-6 align-items-center align-self-center">
                <img class="orderd-product-img" src={pakage5} alt="" />
              </div>
              <div class="col-12 col-lg-6 align-items-center order-summary-pricing align-self-center">
                <div class="order-summary-header text-center bg-dark text-white mb-0 py-1">
                  <i class="fa-solid fa-cart-shopping"></i>
                  <div class="order-summary-header-text d-inline-block">
                    <b>Order Summary</b>
                  </div>
                </div>
                <div class="d-flex justify-content-between order-summary-title pb-1 pt-2">
                  <div>
                    <strong>Item</strong>
                  </div>
                  <div>
                    <span>
                      <strong>Price</strong>
                    </span>
                  </div>
                </div>
                <div class="d-flex justify-content-between order-summary-item pt-2 pb-1 order-summary-template">
                  <div>
                    <span class="cart-title"> Deluxe Family Pack</span> (
                    <span class="cart-quantity">5</span>x Alpha Heaters )
                  </div>
                  <div>
                    <span class="currency-block cart-each">
                      <span class="symbol">$</span>
                      <span class="amount product-price">199.80</span>
                    </span>
                    <span class="each-label"></span>
                  </div>
                </div>
                <div class="d-none justify-content-between order-summary-item pt-2 pb-1 order-summary-template click-bump-order-sum-div">
                  <div>
                    <span>Alpha Heater - 3 Year Extended Warranty</span>
                  </div>
                  <div>
                    <span class="warranty-price">$39.96</span>
                  </div>
                </div>
                <div class="justify-content-between order-summary-item pt-2 pb-1 order-summary-template cb-click-bump-order-sum-div-2 d-flex">
                  <div>
                    <span class="cb-clickbump-product-2">
                      Remote Upgrade (Covers 5 Units)
                    </span>
                  </div>
                  <div>
                    <span class="cb-clickbump-price-2">$24.95</span>
                  </div>
                </div>
                <div class="order-summary-items"></div>
                <div class="d-flex justify-content-between order-summary-item py-1">
                  <div>Shipping: (Est. 3-5 Business Days)</div>
                  <div>
                    <span class="currency-block">
                      <span class="symbol"></span>
                      <span class="amount shipping-price">$9.95</span>
                    </span>
                  </div>
                </div>
                <div class="d-flex justify-content-between order-summary-item py-1">
                  <div>Shipping Method:</div>
                  <div>UPS Ground</div>
                </div>
                <div class="d-flex justify-content-between order-summary-total pt-1">
                  <strong>
                    <div>Today's Total:</div>
                  </strong>
                  <strong>
                    <span class="currency-block cart-total">
                      <span class="symbol"></span>
                      <span class="amount gtotal">$234.70</span>
                    </span>{" "}
                  </strong>
                </div>
              </div>
            </div>

            <div className="col-12 heater">
              <h5>WHAT CUSTOMERS SAY ABOUT ALPHA HEATER</h5>
            </div>

            <div class="comment-block row mx-0 my-2">
              <div class="col-1 pr-2">
                <i class="fa-solid fa-circle-user"></i>
              </div>
              <div class="col-11 pl-0 pl-md-1">
                <div className="border-buttom">
                  <span class="name">
                    <b>Michael S. Chicago, IL</b>{" "}
                  </span>{" "}
                  <>
                    <i class="fas fa-check"></i>
                    <span className="verified">Verified Review</span>
                  </>
                  <span class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </span>
                </div>
                <div class="description">
                  This heater is amazing and I would recommend it to anyone. It
                  heats a room, big or small, in minutes. Its quiet and sleek
                  looking. It is small enough that you can pack it in the car
                  with you.
                </div>
              </div>
            </div>

            <div class="comment-block row mx-0 my-2">
              <div class="col-1 pr-2">
                <i class="fa-solid fa-circle-user"></i>
              </div>
              <div class="col-11 pl-0 pl-md-1">
                <div className="border-buttom">
                  <span class="name">
                    <b>Runethia New York, NY</b>{" "}
                  </span>{" "}
                  <>
                    <i class="fas fa-check"></i>
                    <span className="verified">Verified Review</span>
                  </>
                  <span class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </span>
                </div>
                <div class="description">
                  I was super impressed with this heater. It works great for
                  small spaces. We used it to warm up our garage while working
                  on cars and in out mudroom. It provides a decent amount of
                  heat for being small and is extremely quiet. Great value and
                  great size for personal use.
                </div>
              </div>
            </div>

            <div class="comment-block row mx-0 my-2">
              <div class="col-1 pr-2">
                <i class="fa-solid fa-circle-user"></i>
              </div>
              <div class="col-11 pl-0 pl-md-1">
                <div className="border-buttom">
                  <span class="name">
                    <b>Danielle Boston, MA</b>{" "}
                  </span>{" "}
                  <>
                    <i class="fas fa-check"></i>
                    <span className="verified">Verified Review</span>
                  </>
                  <span class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </span>
                </div>
                <div class="description">
                  My husband uses this heater in our garage and is very
                  satisfied with this! It is a two car garage and will keep it
                  very comfortable without having to turn on the garage heat. We
                  have also used this in the basement and are very happy with
                  it.
                </div>
              </div>
            </div>

            <div class="comment-block row mx-0 my-2">
              <div class="col-1 pr-2">
                <i class="fa-solid fa-circle-user"></i>
              </div>
              <div class="col-11 pl-0 pl-md-1">
                <div className="border-buttom">
                  <span class="name">
                    <b>Grace Minneapolis, MN</b>{" "}
                  </span>{" "}
                  <>
                    <i class="fas fa-check"></i>
                    <span className="verified">Verified Review</span>
                  </>
                  <span class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </span>
                </div>
                <div class="description">
                  I have my work desk near a drafty window I get really cold in
                  the winter. I needed to find a personal heater that was small
                  enough to not overcrowd my workstation, but strong enough to
                  provide me with some much needed comfort on those unbearably
                  cold days. This was perfect! And it works great. I was so
                  surprised by the amount of heat you get out of this little
                  thing. Very stylish and quiet. Definitely recommend!
                </div>
              </div>
            </div>
          </div>
          <ContenRigth />
          <Buttom/>
        </div>
      </div>
    </>
  );
}
