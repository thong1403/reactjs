import React from "react";
import logopaypal from "../../img/paypal-01.png";
import ContentButtonRigth from "../content-button-rigth/Content-button-rigth";
import "./ContentRigth.css";

export default function ContenRigth() {
  return (
    <div className="col-4 step2">
      <h5>STEP 2: PAYMENT OPTION</h5>
      <div className="col-12">
        <button className="btn-paypal">
          <img src={logopaypal} alt="" className="logo-paypal" />
        </button>
        <span className="or-checkout">OR CHECKOUT WITH CREDIT CARD</span>
        <div class="formBlue form-cc" id="chk-frm1">
          <div class="input-group form-label-group mb-2">
            <input
              type="tel"
              name="creditCardNumber"
              id="ccNumber"
              class="required form-control"
              maxlength="16"
              data-error-message="Please enter a valid credit card number!"
              placeholder="Credit Card Number"
            />
            <div class="input-group-append">
              <span class="input-group-text" id="ccNumberAppend">
                <i class="fa-solid fa-credit-card"></i>
              </span>
            </div>
          </div>
          <div class="row date">
            <div class="col-6 col-md-6 pr-1">
              <div class="form-group mb-2">
                <select
                  name="expmonth"
                  class="form-control required"
                  data-error-message="Please select a valid expiry month!"
                >
                  <option value="">Month</option>
                  <option value="01">(01) January</option>
                  <option value="02">(02) February</option>
                  <option value="03">(03) March</option>
                  <option value="04">(04) April</option>
                  <option value="05">(05) May</option>
                  <option value="06">(06) June</option>
                  <option value="07">(07) July</option>
                  <option value="08">(08) August</option>
                  <option value="09">(09) September</option>
                  <option value="10">(10) October</option>
                  <option value="11">(11) November</option>
                  <option value="12">(12) December</option>{" "}
                </select>
              </div>
            </div>
            <div class="col-6 col-md-6 pl-1">
              <div class="form-group mb-2">
                <select
                  name="expyear"
                  class="form-control required"
                  data-error-message="Please select a valid expiry year!"
                >
                  <option value="">Year</option>
                  <option value="23">2023</option>
                  <option value="24">2024</option>
                  <option value="25">2025</option>
                  <option value="26">2026</option>
                  <option value="27">2027</option>
                  <option value="28">2028</option>
                  <option value="29">2029</option>
                  <option value="30">2030</option>
                  <option value="31">2031</option>
                  <option value="32">2032</option>
                  <option value="33">2033</option>
                  <option value="34">2034</option>
                  <option value="35">2035</option>
                  <option value="36">2036</option>
                  <option value="37">2037</option>
                  <option value="38">2038</option>
                  <option value="39">2039</option>
                  <option value="40">2040</option>
                  <option value="41">2041</option>
                  <option value="42">2042</option>{" "}
                </select>
              </div>
            </div>
          </div>
          <div class="input-group form-label-group">
            <input
              type="tel"
              name="CVV"
              id="cvv"
              class="required form-control"
              data-validate="cvv"
              maxlength="3"
              data-error-message="Please enter a valid CVV code!"
              placeholder="CVV"
            />
            <div class="input-group-append whats-this">
              <span class="input-group-text" id="cvvAppend">
                <i class="fa-solid fa-circle-question"></i>
              </span>
            </div>
          </div>
        </div>

        <h5>STEP 3: SHIPPING INFORMATION</h5>
      </div>
      <div class="formBlue res">
        <div class="form-group form-label-group mb-2">
          <input
            type="text"
            spellcheck="false"
            autocorrect="off"
            name="firstName"
            id="inputFirstName"
            class="form-control remove-class required"
            placeholder="First Name"
            data-error-message="Please enter your first name!"
          />
        </div>
        <div class="form-group form-label-group mb-2">
          <input
            type="text"
            spellcheck="false"
            autocorrect="off"
            name="lastName"
            id="inputLastName"
            class="form-control remove-class required"
            placeholder="Last Name"
            data-error-message="Please enter your last name!"
            value=""
          />
        </div>
        <div class="form-group form-label-group mb-2">
          <input
            type="text"
            spellcheck="false"
            autocorrect="off"
            name="shippingAddress1"
            id="inputAddress"
            class="form-control required remove-class mb-2 pac-target-input"
            placeholder="Address"
            data-error-message="Please enter your address!"
            value=""
            autocomplete="off"
          />
          <input
            type="text"
            spellcheck="false"
            autocorrect="off"
            name="shippingAddress2"
            id="inputAddress"
            class="form-control"
            placeholder="Apt, Suite, Unit, Building (optional)"
            value=""
          />
        </div>
        <div class="form-group form-label-group mb-2">
          <input
            type="text"
            spellcheck="false"
            autocorrect="off"
            name="shippingCity"
            id="inputCity"
            class="form-control remove-class required"
            placeholder="City"
            data-error-message="Please enter your city!"
            value=""
          />
        </div>
        <div class="form-group mb-2">
          <select
            name="shippingState"
            type="text"
            placeholder="Your State"
            class="form-control required remove-class"
            data-error-message="Please select your state!"
            data-selected="AL"
          >
            <option value="" selected="selected">
              Select State
            </option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AS">American Samoa</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="AE">Armed Forces Middle East</option>
            <option value="AA">Armed Forces Americas</option>
            <option value="AP">Armed Forces Pacific</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District of Columbia</option>
            <option value="FM">Federated States of Micronesia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="GU">Guam</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="MP">Northern Mariana Islands</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="PR">Puerto Rico</option>
            <option value="MH">Republic of Marshall Islands</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VI">Virgin Islands of the U.S.</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
        </div>
        <div class="form-group mb-2">
          <select
            id="country-select"
            name="shippingCountry"
            class="form-control required remove-class no-error"
            data-selected="US"
            data-error-message="Please select your country!"
          >
            <option value="">Select Country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
          </select>
        </div>
        <div class="form-group form-label-group mb-2">
          <input
            type="tel"
            name="shippingZip"
            id="inputZip"
            class="form-control required remove-class"
            placeholder="Zip Code"
            data-error-message="Please enter a valid zip code!"
          />
        </div>
        <div class="form-group form-label-group mb-2">
          <input
            type="email"
            name="email"
            id="inputEmail"
            class="form-control required remove-class"
            placeholder="Email"
            data-error-message="Please enter a valid email!"
          />
        </div>
        <div class="form-group form-label-group mb-2">
          <input
            type="tel"
            name="phone"
            id="inputPhone"
            class="form-control required remove-class"
            placeholder="Phone"
            data-min-length="10"
            data-max-length="15"
            data-error-message="Please enter a valid contact number!"
            maxlength="10"
            onkeyup="/"
          />
        </div>
      </div>
      <div class="formBlue res text-white">
        <div class="js_choose_billing">
          <div class="w_radio">
            <input
              type="radio"
              id="radio_same_as_shipping"
              name="billingSameAsShipping"
              value="yes"
              checked="checked"
            />
            <label for="radio_same_as_shipping">
              Billing Address same as Shipping
            </label>
            <i class="icon-check"></i>
          </div>
          <div class="w_radio">
            <input
              type="radio"
              id="radio_different_shipping"
              name="billingSameAsShipping"
              value="no"
            />
            <label for="radio_different_shipping">
              Billing Address different as Shipping
            </label>
            <i class="icon-check"></i>
          </div>
        </div>
        <label class="fieldToggle" id="fieldToggle">
          <input
            type="checkbox"
            id="address_differs_check"
            name="billShipSame"
            checked=""
          />
          <span class="togship"></span>
          <span>Billing address same as shipping address</span>
        </label>
        <div class="shipaddress billing-info">
          <div class="clearall"></div>
          <div class="form-group form-label-group mb-2">
            <input
              type="text"
              spellcheck="false"
              autocorrect="off"
              name="billingFirstName"
              id="inputFirstName"
              class="form-control remove-class-billing"
              placeholder="Billing First Name"
              data-error-message="Please enter your billing first name!"
              value=""
            />
          </div>
          <div class="form-group form-label-group mb-2">
            <input
              type="text"
              spellcheck="false"
              autocorrect="off"
              name="billingLastName"
              id="billingLastName"
              class="form-control remove-class-billing"
              placeholder="Billing Last Name"
              data-error-message="Please enter your billing last name!"
              value=""
            />
          </div>
          <div class="form-group form-label-group mb-2">
            <input
              type="text"
              spellcheck="false"
              autocorrect="off"
              name="billingAddress1"
              id="inputAddress"
              class="form-control remove-class-billing mb-2"
              placeholder="Billing Address"
              data-error-message="Please enter your billing address!"
              value=""
            />
            <input
              type="text"
              spellcheck="false"
              autocorrect="off"
              name="billingAddress2"
              id="inputAddress"
              class="form-control"
              placeholder="Apt, Suite, Unit, Building (optional)"
              value=""
            />
          </div>
          <div class="form-group form-label-group mb-2">
            <input
              type="text"
              spellcheck="false"
              autocorrect="off"
              name="billingCity"
              id="inputCity"
              class="form-control remove-class-billing"
              placeholder="Billing City"
              data-error-message="Please enter your billing city!"
              value=""
            />
          </div>
          <div class="form-group mb-2">
            <select
              id="billing_country"
              class="field-all billing-country remove-class-billing"
              name="billingCountry"
              data-error-message="Please select your  billing Country!"
              data-selected="US"
            >
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
            </select>
          </div>
          <div class="form-group mb-2">
            <select
              name="billingState"
              type="text"
              placeholder="Billing State"
              class="form-control remove-class-billing"
              data-error-message="Please select your billing state!"
              data-selected="AL"
            >
              <option value="" selected="selected">
                Select State
              </option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AS">American Samoa</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="AE">Armed Forces Middle East</option>
              <option value="AA">Armed Forces Americas</option>
              <option value="AP">Armed Forces Pacific</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District of Columbia</option>
              <option value="FM">Federated States of Micronesia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="GU">Guam</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="MP">Northern Mariana Islands</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="PR">Puerto Rico</option>
              <option value="MH">Republic of Marshall Islands</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VI">Virgin Islands of the U.S.</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>
          <div class="form-group form-label-group mb-2">
            <input
              type="tel"
              name="billingZip"
              id="inputZip"
              class="form-control remove-class-billing"
              placeholder="Billing Zip"
              data-error-message="Please enter a valid billing zip code!"
              value=""
            />
          </div>
        </div>
      </div>

      <h5>STEP 4: ADD-ONS</h5>
      <div class="add-box">
        <div class="chiller_cb">
        <input
            type="checkbox"
            id="checkStatus"
            class="cb-check-status"
            data-price="26.97"
          />
          <label for="checkStatus2" class="expship m-0">
            <strong> Yes, give me remotes! </strong>
          </label>
          <span></span>
        </div>
        <p>
          <span class="ylw">One-Chance Offer:</span> By placing your order
          today, we'll add a remote for each heater unit for only an additional
          <span
            class="font-weight-bold text-success cb-clickbump-price-2"
            id="warranty-price-2"
          >
            $17.97
          </span>
          <span>and ship it with your order for FREE. </span>
        </p>
      </div>
      <div class="add-box">
        <div class="chiller_cb">
          <input
            type="checkbox"
            id="checkStatus"
            class="cb-check-status"
            data-price="26.97"
          />
          <label for="checkStatus" class="expship m-0">
            <strong>Yes, I Want Protection! </strong>
          </label>
          <span></span>
        </div>
        <p>
          <span class="ylw">One-Chance Offer:</span> By placing your order
          today, you can have one time replacement warranty for up to 3 years
          for only an additional
          <span
            class="warranty-price font-weight-bold text-success"
            id="warranty-price"
          >
            $26.97
          </span>
          <span>
            This additional warranty means your product will be replaced no
            questions asked for up to 3 years.{" "}
          </span>
        </p>
      </div>
      <ContentButtonRigth/>
    </div>
  );
}
