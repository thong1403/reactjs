import React from "react";
import logoButton from "../../img/60-day.png";
import imgLock from "../../img/lock.png";
import shild from "../../img/shield.png";
import usa from "../../img/us-flag.png"
import "./content-button.css"

export default function ContentButtonRigth() {
  return (
    <div>
      <div class="formBlue form-cc">
        <div class="d-flex d-md-none row p-2 mx-0 mb-3 order-summary order-summary-top cc-section-container">
          <div class="d-none d-lg-block col-lg-6 align-items-center align-self-center"></div>
          <div class="col-12 col-lg-6 align-items-center order-summary-pricing align-self-center">
            <div class="order-summary-header text-center bg-dark text-white mb-0 py-1">
              <i class="fad fa-shopping-cart fa-inverse pr-2"></i>
              <div class="order-summary-header-text d-inline-block">
                Order Summary
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
                <span class="cart-title">Multi-Room Pack</span>
              </div>
              <div>
                <span class="currency-block cart-each">
                  <span class="symbol">$</span>
                  <span class="amount product-price">134.87</span>
                </span>
                <span class="each-label"></span>
              </div>
            </div>
            <div class="justify-content-between order-summary-item pt-2 pb-1 order-summary-template click-bump-order-sum-div d-none">
              <div>
                <span>Alpha Heater - 3 Year Extended Warranty</span>
              </div>
              <div>
                <span class="warranty-price">$26.97</span>
              </div>
            </div>
            <div class="justify-content-between order-summary-item pt-2 pb-1 order-summary-template cb-click-bump-order-sum-div-2 d-none">
              <div>
                <span class="cb-clickbump-product-2">
                  Remote Upgrade (Covers 3 Units)
                </span>
              </div>
              <div>
                <span class="cb-clickbump-price-2">$17.97</span>
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
                  <span class="amount gtotal">$144.82</span>
                </span>{" "}
              </strong>
            </div>
          </div>
        </div>
        <button
          type="submit"
          class="btn btn-lg col-12 btn-submit mt-0  step3Btn nextBtn submitButton res"
          id="checkout_button"
        >
          <span class="cmplt-ordr-btn">
            Yes, Complete My Order <i class="fa-sharp fa-solid fa-angles-right"></i>
          </span>
        </button>
        <div class="ssl-encrypted text-center mt-1 text-white">
        <i class="fa-solid fa-lock"></i>
          256-bit SSL Encrypted Checkout
        </div>
        <div class="text-center mt-3 mb-3 verified-seal"></div>
        <div class="text-center p-3 guarantee-container">
          <h3 class="p-0">Our Guarantee</h3>
          <div class="guarantee-item">
          <i class="fa-sharp fa-solid fa-square-check"></i> No Hidden Fees
          </div>
          <div class="guarantee-item">
          <i class="fa-sharp fa-solid fa-square-check"></i> 30-DAYS MONEY BACK GUARANTEE
          </div>
        </div>
        <div class="mt-3 py-3 pl-2 pr-1 seal-container d-flex justify-content-start">
          <div class="seal-image d-flex">
            <img src={logoButton} alt=""  className="img-icon-logo"  />
          </div>
          <div>
            <div class="seal-title seal-title-1 mb-1">
              30-DAYS MONEY BACK GUARANTEE
            </div>
            <div class="seal-content seal-content-1">
              If you are unsatisfied for any reason within 30 days, simple
              contact our customer care center for a full refund of your initial
              order. Happy shopping!
            </div>
          </div>
        </div>
        <div class="mt-3 py-3 pl-2 pr-1 seal-container d-flex justify-content-start">
          <div class="seal-image d-flex">
            <img src={imgLock} alt=""  className="img-icon-logo" />
          </div>
          <div>
            <div class="seal-title seal-title-2 mb-1">SHOP WITH CONFIDENCE</div>
            <div class="seal-subtitle seal-subtitle-2">
              getalphaheater.com is Safe &amp; Secure Guaranteed!
            </div>
            <div class="seal-content seal-content-2">
              You'll pay nothing if unauthorized charges are made to your credit
              card as a result of shopping at getalphaheater.com{" "}
            </div>
          </div>
        </div>
        <div class="mt-3 py-3 pl-2 pr-1 seal-container d-flex justify-content-start">
          <div class="seal-image d-flex">
            <img src={shild} alt=""  className="img-icon-logo" />
          </div>
          <div>
            <div class="seal-title seal-title-3 mb-1">
              YOUR PRIVACY IS IMPORTANT
            </div>
            <div class="seal-content seal-content-3">
              All information is encrypted and transmitted without risk using a
              Secure Socket Layer (SSL) protocol.
            </div>
          </div>
        </div>
        <div class="mt-3 py-3 pl-2 pr-1 seal-container d-flex justify-content-start align-items-center">
          <div class="seal-image d-flex">
            <img src={usa} alt="" className="img-icon-logo" />
          </div>
          <div>
            <div class="seal-title seal-title-3 mb-1">AMERICAN OWNED</div>
            <div class="seal-content seal-content-3">
              Alpha Heater is proud to be an American-owned company.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
