import React from "react";
import YellowStar from "../../Images/yellow-Star.png"
import DropArrow from "../../Images/DropArrow.png"
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsFillStarFill } from "react-icons/bs";
const SideBar = () => {
  return (
    <div className="SideBar-sticky">
      <div className="SideBar-sticky-heading">
        <p>Book Your Car Service Now !</p>
      </div>
      <div>
        <p>Get instant quotes for your car service</p>
      </div>
      <div>
        <div className="rating-div">
          <p>Rating</p>
        </div>
        <div>
          <BsFillStarFill color={"#FBBC04"} size={20} />
          <p>4.7/5</p>
        </div>
      </div>
      <div className="selectCar-btn">
        <p>Select Your Car</p>
        <RiArrowDropDownLine color="#071C2C" size={40} />
      </div>
      <div>
        <input placeholder="Enter Your Number" type="text" />
      </div>
      <div>
        <p>Check Prices For free</p>
      </div>
    </div>
  );
};

export default SideBar;
