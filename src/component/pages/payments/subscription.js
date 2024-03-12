import React, { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import "./subscription.css";
export default function Subscription() {
    const [selectedButton, setSelectedButton] = useState('annual');
    const [isVisible, setIsVisible] = useState(true);
  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  const handleCloseAll = () => {
    // Logic to close all elements
    // For example, you can reset selectedButton and hide the component
    setSelectedButton('');
    setIsVisible(false);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  if (!isVisible) {
    return <div><a href="#" onClick={toggleVisibility}>Look</a></div>;
  }

  return (
    <div className="container-fluid" style={{ fontFamily: "Figtree-Medium" }}>
      <div className="row">
        <div className="col-lg-1"></div>
        <div
          className="col-lg-10"
          style={{
            border: "2px solid #f3f3f3",
            borderRadius: "10px"
            
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-7 mt-4">
                <h4 className="text-center">Choose the right plan for team</h4>
              </div>
              <div className="col-lg-3 mt-3 text-end">
                <span className="" onClick={handleCloseAll}>
                  <IoCloseSharp />
                </span>
              </div>
            </div>
          </div>
          <div className="container">
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4 mt-3 w-25"height="100px" style={{ background: '#d9d9d9',border: "2px solid #f3f3f3",borderRadius: "10px"}}>
          <div className="row">
            <div className="col-md-6">
             <h5  className="mt-2 pay-button">
                Monthly pay</h5>
            </div>
            <div className="col-md-6">
             <h5  className="mt-2 pay-button">
                Annual pay</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
          <div className="container mt-5 w-100 justify-content-between">
            <div className="row ps-4 gap-2">
              <div className="col-md-1"></div>
              <div className="col-md-2">
                <div
                  class="card"
                  style={{
                    width: " 255px",
                    height: "260px",
                    padding: "18px 20px 18px 20px",
                    background: "#fff8e7",
                    borderRadius: "11px",
                  }}
                >
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{ fontWeight: "900", fontSize: "20px" }}
                    >
                      Your plan
                    </h5>
                    <h6
                      class="card-subtitle mt-2 "
                      style={{ fontWeight: "900", fontSize: "24px" }}
                    >
                      ₹599
                    </h6>
                    <p
                      class="card-text mt-2"
                      style={{ fontWeight: "900", fontSize: "13px" }}
                    >
                      1 to 9 members have this plan
                    </p>
                    <p
                      className="mt-2"
                      style={{ fontWeight: "500", fontSize: "13px" }}
                    >
                      Per company/month
                    </p>
                    <button
                      className="btn btn text-center col-lg-12"
                      style={{
                        fontWeight: "500",
                        fontSize: "12px",
                        background: "#e1e1e1",
                      }}
                    >
                      Current plan
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-2">
                <div
                  class="card"
                  style={{
                    width: " 255px",
                    height: "260px",
                    padding: "18px 20px 18px 20px",
                    background: "#fff8e7",
                    borderRadius: "11px",
                  }}
                >
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{ fontWeight: "900", fontSize: "20px" }}
                    >
                      Upgrade plan
                    </h5>
                    <h6
                      class="card-subtitle mt-1 "
                      style={{ fontWeight: "900", fontSize: "24px" }}
                    >
                      ₹999
                    </h6>
                    <p
                      class="card-text mt-2 "
                      style={{ fontWeight: "900", fontSize: "11px" }}
                    >
                      10 to 29 members have this plan
                    </p>
                    <p
                      className="mt-2"
                      style={{ fontWeight: "500", fontSize: "13px" }}
                    >
                      Per company/month
                    </p>
                    <button
                      className="btn btn text-center col-lg-12"
                      style={{
                        fontWeight: "500",
                        fontSize: "12px",
                        background: "#ffc32a",
                      }}
                    >
                      Upgrade your team
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-2">
                <div
                  class="card"
                  style={{
                    width: " 255px",
                    height: "260px",
                    padding: "18px 20px 18px 20px",
                    background: "#fff8e7",
                    borderRadius: "11px",
                  }}
                >
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{ fontWeight: "900", fontSize: "20px" }}
                    >
                      Your plan
                    </h5>
                    <h6
                      class="card-subtitle mt-2 "
                      style={{ fontWeight: "900", fontSize: "24px" }}
                    >
                      ₹1999
                    </h6>
                    <p
                      class="card-text mt-2"
                      style={{ fontWeight: "900", fontSize: "13px" }}
                    >
                      30+ members have this plan
                    </p>
                    <p
                      className="mt-2"
                      style={{ fontWeight: "500", fontSize: "13px" }}
                    >
                      Per company/month
                    </p>
                    <button
                      className="btn btn text-center col-lg-12"
                      style={{
                        fontWeight: "500",
                        fontSize: "12px",
                        background: "#ffc32a",
                      }}
                    >
                      Upgrade your team
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-5 p-3">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <p className="text-decoration-underline more-det">More details and all features</p>
                </div>
            </div>
          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
}
