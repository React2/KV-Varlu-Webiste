import React from 'react'
import NavBar from '../Components/Navbar/Navbar'
import SideBar from '../Components/SideBar/SideBar'
import FirstLanding from '../Components/FirstLanding/FirstLanding';

const Home = () => {
  return (
    <div className='Home-Parent-div'>
        <FirstLanding />
        <SideBar />
    </div>
  );
}

export default Home
