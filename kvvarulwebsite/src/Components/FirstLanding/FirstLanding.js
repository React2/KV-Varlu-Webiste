import React from 'react'
import NavBar from '../Navbar/Navbar'
import humanStar from "../../Images/HumanStar.png"
import Star from "../../Images/Star.png";


const FirstLanding = () => {
  return (
    <div className="LandingImage">
      <NavBar />
      <div>
        <div>
          <h1>Experience The Best Car Services In Hyedrabad</h1>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec
            egestas ligula. Nulla facilisi. Phasellus faucibus ligula id mauris
            varius, eget faucibus lorem fringilla. Vivamus ut felis porta,
            luctus libero eget, feugiat velit. Sed aliquet leo et ex sodales,{" "}
          </p>
        </div>
        <div>
          <div>
            <div>
              <img src="" alt="starLogo" />
            </div>
            <div>
              <h1>4.7</h1>
              <p>Based on 100000+ Reviews</p>
            </div>
            <div></div>
          </div>
          <div>
            <div>
              <img src={humanStar} alt="humanLogo" />
            </div>
            <div>
              <h1>2,50,000</h1>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstLanding
