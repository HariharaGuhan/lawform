import React, { useState } from "react";
import "./usersign.css";
import user from "../../assets/profileuser.webp";
import { MdOutlineMail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RiImageAddFill } from "react-icons/ri";

export default function Usersign() {
  const [imageUrl, setImageUrl] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");
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

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleDobChange = (event) => {
    setDob(event.target.value);
  };

  const isFormValid = () => {
    return imageUrl.trim()!=="" && username.trim() !== "" && email.trim() !== "" && phoneNumber.trim() !== "" && dob.trim() !== "";
  };

  return (
    <div>
      <div className="container" style={{ fontFamily: "Figtree-Medium" }}>
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4 mt-4  border" style={{ backgroundColor: "#f3f3f3", borderRadius: "10px" }}>
            <form>
              <h4 className="text-center mt-2" style={{ fontSize: "18px", fontWeight: "900", lineHeight: "1.5" }}>
                Signup form for Users
              </h4>
              <h6 className="text-center mt-2" style={{ fontSize: "15px", fontWeight: "400", lineHeight: "1.5" }}>
                Fill in the Information Carefully
              </h6>
              <p className="text-center mt-2" style={{ fontSize: "14px", fontWeight: "400", lineHeight: "1.5" }}>
                These Contacts are used to Inform about orders
              </p>
              <h3 className="text-left mt-2 ml-5" style={{ fontSize: "20px", fontWeight: "900", lineHeight: "1.5" }}>
                Personal Data
              </h3>
              <div className=" text-center mt-3">
               
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
                    <RiImageAddFill style={{ fontSize: "48px", color: "#ccc", cursor: "pointer" }} />
                  </label>
                )}
                <input id="imageUpload" type="file" accept="image/*" onChange={handleImageChange} style={{ display: "none" }} />
              </div>
              <div className="mb-3">
                <label style={{ fontSize: "14px", fontWeight: "400", lineHeight: "1.5" }}>Enter username</label>
                <input type="text" className="input-field1" placeholder="Enter a valid username" value={username} onChange={handleUsernameChange} style={{ border: "none", borderBottom: "2px solid #e2e4e5", width: "100%", backgroundColor: "transparent" , outline: "none"}} />
              </div>
              <div className="mb-3">
                <label className="lb-icon">
                  <MdOutlineMail style={{ display: email ? "none" : "inline" }} />
                </label>
                <input type="email" className="input-field1" placeholder="Enter a valid Email Id" value={email} onChange={handleEmailChange} style={{ border: "none", borderBottom: "2px solid #e2e4e5", width: "100%", backgroundColor: "transparent" , outline: "none"}} />
              </div>
              <div className="mb-3">
              <div className="input-icon">
                <label className="lb-icon">
                  <IoCallSharp style={{ display: phoneNumber ? "none" : "inline" }} />
                </label>
                <input type="tel" placeholder="Enter 10 digit Mobile Number"pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required maxLength="12" className="input-field" value={phoneNumber} onChange={handlePhoneNumberChange} style={{ border: "none", borderBottom: "2px solid #e2e4e5", width: "100%", backgroundColor: "transparent" , outline: "none"}} />
                </div>
              </div>
              <div className="mb-3">
                <label style={{ fontSize: "14px", fontWeight: "400", lineHeight: "1.5" }}>Date of Birth</label>
                <br />
                <input type="date" className="input-field1" value={dob} onChange={handleDobChange} style={{ border: "none", borderBottom: "2px solid #e2e4e5", width: "100%", backgroundColor: "transparent" , outline: "none"}} />
              </div>

              <div className="mb-3 mt-4 px-4 text-end">
                <Link to="/signupusersecond">
                  <button type="button" disabled={!isFormValid()} className=" btn text-white" style={{ background: "#ffc32a", fontSize: "16px", fontWeight: "500" }}>
                    Go Next<span className="" style={{ marginLeft: "30px", width: "12px", height: "8px", top: "8px", left: "6px" }}>
                      <FaArrowRightLong />
                    </span>
                  </button>
                </Link>
              </div>
            </form>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </div>
  );
}
