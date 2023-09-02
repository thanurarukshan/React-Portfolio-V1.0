import "./Homepage.css";
import React from 'react';


function Homepage() {
  

  return (
    <div className="container">
        <div className="container-sub">
            <span className="container-sub01">Hello there👋</span>
            <span className="container-sub02">I'm</span>
            <span className="container-sub03">Thanura Rukshan</span>
            <span className="container-sub04">I am an Information and Communication Engineering Undergraduate <br/>at <b>SLTC Research University</b></span>
            <a href="#aboutMe" className="container-sub05">More . . </a>
        </div>
        <div>
            <img className="container-sub06" alt="Thanura Rukshan" src="./me-new.png" />
        </div>
    </div>
  )
}

export default Homepage