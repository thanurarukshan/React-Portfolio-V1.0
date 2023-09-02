import "./Aboutme.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

function Aboutme() {
  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <div className="main-container ">
        <span className="main-container-aboutme" id="aboutMe" data-aos ="zoom-in">About me</span>
        <p data-aos ="zoom-in">Hey there! I am an engineering undergraduate with an IT background.  I'm self-motivated and also a fun and friendly person who is always willing to try new things. I work well in groups as well as on my own because I like to set goals for myself that I will achieve and because I have good listening and communication skills. </p>
        <span className="main-container-skills" data-aos ="zoom-in">Skill-Set</span>
        <table className="table" data-aos ="zoom-in">
          <thead>
            <tr>
              <th scope="col">Section</th>
              <th scope="col">Technology</th>
              <th scope="col">Level</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">IT</th>
              <td>Python</td>
              <td>Intermediate</td>
            </tr>
            <tr>
              <th scope="row">IT</th>
              <td>JavaScript</td>
              <td>Intermediate</td>
            </tr>
            <tr>
              <th scope="row">IT</th>
              <td>Java</td>
              <td>Beginner</td>
            </tr>
            <tr>
              <th scope="row">IT</th>
              <td>HTML</td>
              <td>Intermediate</td>
            </tr>
            <tr>
              <th scope="row">IT</th>
              <td>CSS</td>
              <td>Intermediate</td>
            </tr>
            <tr>
              <th scope="row">IT</th>
              <td>React.js</td>
              <td>Beginner</td>
            </tr>
            <tr>
              <th scope="row">IT</th>
              <td>Node.js</td>
              <td>Beginner</td>
            </tr>
            <tr>
              <th scope="row">IT</th>
              <td>Express.js</td>
              <td>Beginner</td>
            </tr>
            <tr>
              <th scope="row">IT</th>
              <td>MYSQL</td>
              <td>Intermediate</td>
            </tr>
            <tr>
              <th scope="row">IT</th>
              <td>phpmyadmin</td>
              <td>Beginner</td>
            </tr>
            <tr>
              <th scope="row">Graphic Designing</th>
              <td>Adobe Photoshop</td>
              <td>Professional</td>
            </tr>
            <tr>
              <th scope="row">Graphic Designing</th>
              <td>Adobe Illustrator</td>
              <td>Beginner</td>
            </tr>
            <tr>
              <th scope="row">Graphic Designing</th>
              <td>Adobe Premiere-Pro</td>
              <td>Intermediate</td>
            </tr>
            <tr>
              <th scope="row">Graphic Designing</th>
              <td>Adobe After-Effects</td>
              <td>Intermediate</td>
            </tr>
            
          </tbody>
        </table>
    </div>
  )
}

export default Aboutme