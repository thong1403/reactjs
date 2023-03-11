import React from "react";
import "./TopContent.css";

export default function TopContent() {
  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12 top-content-title">
              <h4>
                <b>SPECIAL OFFER:</b> ALPHA HEATER IS AVAILABLE WITH A{" "}
                <span className="number-60">60%</span> DISCOUNT!
              </h4>
            </div>
            <div className="col-12 top-content-title-two ">
                <h5> <i class="fa-regular fa-circle-check"></i> Your <span className="number-60"> 60% </span>Discount Has Been Applied!</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
