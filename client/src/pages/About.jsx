 import AboutImg from "../../public/images/about.png"
 import { useAuth } from "../store/auth";
 

const About = () => {
 
  const {user} = useAuth();
 


  return (
    <>
    <div className="about">
    <div className="aboutPage">
      <div className="aboutLeft">
        <img  src={AboutImg}  alt="" />
      </div>
      <div className="aboutRight">
        <h1>About Page</h1>
        <h2>Welcome, {user ? user.username : `to Our Website`} </h2>
        <p>Welcome, How to Store JWT Token in Local 
          Storage using Context API for 
          Authentication in MERN STACK in Hindi</p>
          <p>Welcome, How to Store JWT Token in Local 
          Storage using Context API for 
          Authentication in MERN STACK in Hindi</p>
      </div>
    </div>
    </div>
    </>
  )
}

export default About
