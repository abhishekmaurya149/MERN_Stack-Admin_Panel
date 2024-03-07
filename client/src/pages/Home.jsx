//  import { Analytics } from "../components/Analytics";
import ProtfolioPic from '../../public/images/portfolio.png'

import { NavLink } from "react-router-dom"



export const Home = () => {
  return (
    <>
    
        <div className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the World Best IT Company</p>
              <h1>Welcome to Abhishek Technical</h1>
              <p>   Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no further! At Thapa Technical,
                we specialize in providing innovative IT services and solutions
                tailored to meet your unique needs.
              </p>

              <div className="btn-group btn">
                <NavLink to='/contact'>
                  <button className="btn">connect now</button>
                </NavLink>
                <NavLink to='/sercices'>
                  <button className="btn secondary-btn">learn more</button>
                </NavLink>
              </div>
            </div>

            {/* hero images */}
            <div className="hero-image">
              <img
                src= {ProtfolioPic}
                alt="coding together"
                width='500'
                height='500'
                loading='lazy'
              />
            </div>
          </div>
        </div>
      

      {/* 2nd section */}
      {/* <Analytics /> */}
      <section className="section-analytics">
        <div className="container grid grid-four-cols">                  
        <div className="div1">
          <h2>50+</h2>
          <p>registered companies</p>
        </div>
        <div className="div1">
          <h2>100,00+</h2>
          <p>Happy Clients</p>
        </div>
        <div className="div1">
          <h2>500+</h2>
          <p>Well known Developers</p>
        </div>
        <div className="div1">
          <h2>24/7</h2>
          <p>service</p>
        </div>
        </div>
      </section>


      {/* 3rd section */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images */}
          <div className="hero-image">
              <img
                src= {ProtfolioPic}
                alt="coding together"
                width='500'
                height='500'
                loading='lazy'
              />
            </div>

            <div className="hero-content">
              <p>We are the World Best IT Company</p>
              <h1>Welcome to Abhishek Technical</h1>
              <p>   Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no further! At Thapa Technical,
                we specialize in providing innovative IT services and solutions
                tailored to meet your unique needs.
              </p>

              <div className="btn-group btn">
                <NavLink to='/contact'>
                  <button className="btn">connect now</button>
                </NavLink>
                <NavLink to='/sercices'>
                  <button className="btn secondary-btn">learn more</button>
                </NavLink>
              </div>
            </div>

        </div>
      </section>









    </>
  )
}

export default Home
