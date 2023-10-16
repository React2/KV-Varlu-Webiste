import React from "react";
import CarLogo from "../../Images/carIcon.png"
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { MdLocationOn } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import Agra from "../../Images/Agra.png";
import Hayderabad from "../../Images/Hayderabad.png"
import Mumbai from "../../Images/Mumbai.png";
import newDelhi from "../../Images/newDelhi.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import carLoginImage from "../../Images/loginImage.png"

const NavBar = () => {
  const [showDropDown, setShowDropDown] = useState(false);
function MyDropdown() {
  return (
    <>
      <div className="dropdownProfile">
        <div className="location-div">
          <MdLocationOn color={"001B39"} size={20} />
          <p>Select Your City</p>
        </div>
        <div className="search-box">
          <CiSearch color="black" className="search-icon" size={20} />
          <input type="text" placeholder="search" />
        </div>
        <div className="countries-div hyderabad-div">
          <img src={Hayderabad} alt="hyderabad" />
          <p>Hayderabad</p>
        </div>
        <div className="countries-div">
          <img src={newDelhi} alt="hyderabad" />
          <p>New Delhi</p>
        </div>
        <div className="countries-div">
          <img src={Mumbai} alt="hyderabad" />
          <p>Mumbai</p>
        </div>
        <div className="countries-div">
          <img src={Agra} alt="hyderabad" />
          <p>Agra</p>
        </div>
      </div>
    </>
  );
  }

    function OffCanvasExample({ name, ...props }) {
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);


      return (
        <>
          <button onClick={handleShow} className="loginButton">
            {name}
          </button>
          <Offcanvas show={show} onHide={handleClose} {...props}>
            <Offcanvas.Header>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <img src={carLoginImage} alt="image-car-service" className="login-image" />
              <p className="Login-Text">Login </p>
              <div className="Number-Input">
                <p className="first-place-Number">+91</p>
                <input placeholder="Mobile Number" type="text" />
              </div>
              <button className="coninuue-button">Continue</button>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      );
    }

   





  return (
    <>
      <></>
      <div className="Navbar-Parent">
        <div className="car-parent">
          <img src={CarLogo} alt="car logo" />
          <p>CAR SERVICE</p>
          <div className="locationDiv">
            <MdLocationOn color="white" size={20} />
            <p>Hayderabad</p>
            {showDropDown && <MyDropdown />}

            <RiArrowDropDownLine
              color="white"
              size={30}
              onClick={(e) => setShowDropDown((prev) => !prev)}
            />
          </div>
        </div>
        <div className="button-section">
          <p>Spares</p>
          <p>Blog</p>
          <p>Home</p>
         
            {["end"].map((placement, idx) => (
              <OffCanvasExample
                key={idx}
                placement={placement}
                name={"Login"}
              />
            ))}
         
        </div>
      </div>
    </>
  );
};

export default NavBar;
