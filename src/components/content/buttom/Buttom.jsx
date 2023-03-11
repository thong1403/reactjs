import React from "react";
import "./Buttom.css";
import imgButtom from "../../img/ups.png";

export default function Buttom() {
  return (
    <div className="col-12 buttom-content">
      <h1>Frequently Asked Questions</h1>
      <p className="center-content">How to use Alpha Heater?</p>
      <div className="container-video">
        <video
          src="https://video.getalphaheater.com/faq-video.mp4"
          width="60%"
          height="360"
          className="s1-vdo-img"
          controls
        ></video>
      </div>
      <p className="center-content"> How long will Shipping take?</p>
      <p className="p">
        <img src={imgButtom} alt="" className="img-content-buttom" />
        This is an American-owned business that doesn't believe it should take
        45 days to receive your product from China. Orders are sent from our New
        Jersey warehouse via USPS, FedEx, UPS, or DHL for international
        customers depending on speed and efficiency of delivery. Product will be
        shipped within 48 business hours. Please allow between 5-7 days for
        standard delivery. You will be emailed a tracking link after your order
        is shipped. Thank you for your purchase!
      </p>
      <p className="center-content"> How Safe is this Heater?</p>
      <p>
        When the internal device temperature is higher than 122F, the device
        will automatically reduce its temperature to 104F. The device will shut
        off automatically if the temperature goes above 122F three times in
        succession.
      </p>
      <p className="center-content">What if the Heater Falls Over?</p>
      <p>
        If the device falls over, it will stop heating, blow out room
        temperature air for 30 seconds to emergency cool the unit, and cut off
        the power supply.
      </p>

      <p className="center-content">
        How Do I Reset My Heater If It Tips Over or Overheats?
      </p>
      <div>
        <p>
          <b>Step 1:</b> Remove the obstruction or situation that caused the
          unit to tip over or overheat.
        </p>
        <p>
          <b>Step 2:</b> Turn off the heater to the OFF position.
        </p>
        <p>
          <b>Step 3:</b> Unplug the heater from the wall outlet and wait 5-10
          minutes for the heater to cool.
        </p>
        <p>
          <b>Step 4:</b> Plug the heater back in and resume operation. If the
          heater continues to malfunction, you may have a defective unit, do not
          continue its operation, please call customer service for an immediate
          replacement. Thank you.
        </p>
      </div>
      <p className="center-content">
        How Many Amps and Watts Does This Heater Use?
      </p>
      <p>650W (Low) - 1200W (High)</p>
      <p className="center-content">
        How Large of an Area Does This Heater Cover?
      </p>
      <p>This heater can heat rooms up to 350 square feet.</p>
      <p className="center-content">Will This Heater Raise My Utility Bill?</p>
      <p>
        No, this unit is considered energy efficient. The rate of any increase
        in utilities would depend entirely on how often you use this heater. The
        heater takes up about the same amount of energy as a standard hair blow
        dryer on its highest setting, which is 1200W. If your electricity
        company charges an average of 10 cents per kilowatt-hour, then it would
        cost about 12 cents per hour the unit is operational. For further
        information, please contact your local utility company.
      </p>
      <p className="center-content">Can I Use This Heater In a Bathroom?</p>
      <p>
        Most heaters should not be used in bathrooms or wet areas. Only heaters
        that are UL rated for bathroom use should be used in bathrooms.
      </p>
      <p className="center-content">
        Is This Heater Safe Around Children and Pets?
      </p>
      <p>
        Yes, as long as the appropriate amount of caution and care is taken when
        this heater is in operation, it is perfectly safe. This includes using
        extreme caution when a heater is used by or near children or pets. As a
        general rule, you should never leave any heater on unattended. Heaters
        are used to produce heat and its surface might be hot to the touch.
      </p>
      <p className="center-content">
        Can I Plug My Heater Into a Timer or Power Strip?
      </p>
      <p>
        We do not recommend plugging your heaters into anything other than your
        wall outlet. The reason for this is due to the amount of electricity
        used by heaters, which may be greater than what the timer or power strip
        is designed for.
      </p>
      <p className="center-content">
        Can I Use an Extension Cord With This Heater?
      </p>
      <p>
        No, never use with an extension cord or relocatable power tap
        (outlet/powerstrip). Always plug heaters directly into a wall
        outlet/receptacle. Do not plug any other electrical devices into the
        same outlet/receptacle as your heater.
      </p>
      <p className="center-content">
        If I Do Not Have Polarized Plugs Can I Use An Adapter?
      </p>
      <p>
        We do not recommend using adapters to plug in heaters. A professional
        should be contacted on proper electrical uses.
      </p>
    </div>
  );
}
