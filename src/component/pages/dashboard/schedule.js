import React, { useState } from "react";
import { RiImageAddFill } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import './schedule.css';
import { Link } from "react-router-dom";
export default function Schedule() {
  const [imageUrl, setImageUrl] = useState("");
  const [showUploadIcon, setShowUploadIcon] = useState(true);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImageUrl(reader.result);
      setShowUploadIcon(false); // Hide the upload icon once the image is uploaded
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <div className="container">
        <div className="col-lg-1">&nbsp;</div>
        <div
          className="col-lg-10 border w-100 col-md-10 "
          style={{ backgroundColor: "#f3f3f3", borderRadius: "10px" }}
        >
          <h4
            className="text-center mt-2"
            style={{ fontSize: "18px", fontWeight: "900", lineHeight: "1.5" }}
          >
            Signup form for Lawyer Users
          </h4>
          <h6
            className="text-center mt-2"
            style={{ fontSize: "15px", fontWeight: "400", lineHeight: "1.5" }}
          >
            Fill in the Information Carefully
          </h6>
          <div className="ml-5 px-4">
            <h3
              className="text-left mt-2  text-capitalize text-center-mobile"
              style={{ fontSize: "20px", fontWeight: "900", lineHeight: "1.5" }}
            >
              Lawyer personal Data
            </h3>
          </div>
          <div className=" mt-3 px-3" style={{ marginLeft: "50px" }}>
            {imageUrl ? (
              <img
                src={imageUrl}
                className="rounded-circle"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  border: "5px solid yellow",
                }}
                alt="Profile"
              />
            ) : (
              <label htmlFor="imageUpload">
                <RiImageAddFill
                  style={{ fontSize: "48px", color: "#ccc", cursor: "pointer" }}
                />
                <span className="text-capitalize px-2">upload profile</span>
              </label>
            )}
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </div>
        
          <div className="row mt-4 p-2">
            <div className="col-md-3 px-4">
            <label style={{ fontSize: "14px", fontWeight: "400", lineHeight: "1.5" }}>Enter name</label>
                <input type="text" className="input-field" placeholder="enter your name" style={{ border: "none", borderBottom: "2px solid #e2e4e5", width: "100%", backgroundColor: "transparent" , outline: "none"}} />

            </div>
            <div className="col-md-3 px-4">
<label style={{ fontSize: "14px", fontWeight: "400", lineHeight: "1.5" }}>License Number</label>
                <input type="text" className="input-field"  placeholder=" License Number " style={{ border: "none", borderBottom: "2px solid #e2e4e5", width: "100%", backgroundColor: "transparent" , outline: "none"}} />
               
            </div>
            <div className="col-md-3 px-4">
            <label style={{ fontSize: "14px", fontWeight: "400", lineHeight: "1.5" }}>Specialization</label>
                <input type="text" className="input-field" placeholder=" Specialization" style={{ border: "none", borderBottom: "2px solid #e2e4e5", width: "100%", backgroundColor: "transparent" , outline: "none"}} />
               
            </div>
            <div className="col-md-3 px-4">
            <label style={{ fontSize: "14px", fontWeight: "400", lineHeight: "1.5" }}>Bar Association</label>
                <input type="text" className="input-field" placeholder="Bar Association" style={{ border: "none", borderBottom: "2px solid #e2e4e5", width: "100%", backgroundColor: "transparent" , outline: "none"}} />
               
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-3 px-4">
            <label style={{ fontSize: "14px", fontWeight: "400", lineHeight: "1.5" }}>Email ID</label>
                <input type="email" className="input-field" placeholder="valid email" style={{ border: "none", borderBottom: "2px solid #e2e4e5", width: "100%", backgroundColor: "transparent" , outline: "none"}} />

            </div>
            <div className="col-md-3 px-4">
                <label style={{ fontSize: "14px", fontWeight: "400", lineHeight: "1.5" }}>Contact number</label>
                <input type="tel" className="input-field" placeholder="Contact number" style={{ border: "none", borderBottom: "2px solid #e2e4e5", width: "100%", backgroundColor: "transparent" , outline: "none"}} />
               
            </div>
            <div className="col-md-3 px-4">
            <label style={{ fontSize: "14px", fontWeight: "400", lineHeight: "1.5" }}>Experience Years</label>
                <input type="text" className="input-field" placeholder="Experience Years" style={{ border: "none", borderBottom: "2px solid #e2e4e5", width: "100%", backgroundColor: "transparent" , outline: "none"}} />
               
            </div>
            <div className="col-md-3 px-4">
            <label style={{ fontSize: "14px", fontWeight: "400", lineHeight: "1.5" }}>Education</label>
                <input type="text" className="input-field"placeholder="Education"  style={{ border: "none", borderBottom: "2px solid #e2e4e5", width: "100%", backgroundColor: "transparent" , outline: "none"}} />
               
            </div>
          </div>
          <div className="row mt-4 p-3">
          <label style={{ fontSize: "14px", fontWeight: "400", lineHeight: "1.5" }}>Date of Birth</label>
                <br />
                <input type="date" className=""  style={{ border: "none", borderBottom: "2px solid #e2e4e5", width: "100%", backgroundColor: "transparent" , outline: "none"}} />
          </div>
          <div className="mb-3 mt-4 px-4 text-end">
                
          <Link to="/Twoschedule">   <button type="button" className=" btn text-white" style={{ background: "#ffc32a", fontSize: "16px", fontWeight: "500" }}>
                    Go Next<span className="" style={{ marginLeft: "30px", width: "12px", height: "8px", top: "8px", left: "6px" }}>
                      <FaArrowRightLong />
                    </span>
                  </button></Link>
             
              </div>
        </div>
        <div className="col-lg-1">&nbsp;</div>
      </div>
    </div>
  );
}
