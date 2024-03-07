import { useState } from "react";
import { useAuth } from "../store/auth";
//  import { useNavigate } from "react-router-dom";
import RegistrationPic from '../../public/images/list.png'


// const defaultContactFormData = {
//   username: '',
//   email:'',
//   message:'',
// };

const Contact = () => {

  // const [data, setData] = useState(defaultContactFormData);

  const [contact, setContact] = useState({
    username: '',
    email: '',
    message: '',
  });

 

  const [ userData, setUserData] = useState(true);

  const {user} = useAuth();

  if(userData && user) {
    setContact({
      username:user.username,
      email: user.email,
      message: '',
    });
    setUserData(false);
  }

  // const navigate = useNavigate();

  // let handle the input field value
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });

  }

  // handle form on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
  };

  return (
    <>
      <section> 
          <div className="section-contact">
            <div className="container contact-content ">
              <h1 className="main-heading">Contact Us</h1>
            </div>
            <div className="container contact-content grid grid-two-cols">
              <div className="contact-image reg-img">
                <img
                  src={RegistrationPic}
                  alt="a nurse with a cute look"
                  width={'500'}
                  height={'500'}
                />
              </div>
              {/* our main contact code */}
              <div className="contact-form">
                <h1 className="main-heading mb-3">Contact Form</h1>
                <br />
                <form onSubmit={handleSubmit} >


                  <div >
                    <label htmlFor="username">username</label>
                    <input
                      type="username"
                      name="username"
                      value={contact.username}
                      autoComplete="off"
                      onChange={handleInput}
                      placeholder="username"
                    />
                  </div>

                  <div >
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      value={contact.email}
                      autoComplete="off"
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>
                  <div className="textarea">
                    <label htmlFor="message" >Message</label>
                    <textarea 
                    name="message" 
                    id="message" 
                    cols="30" 
                    rows="4"
                    onChange={handleInput}
                    autoComplete="off"                    
                    ></textarea>
                  </div>

                  <br />
                  <button type="submit" className="btn btn-submit">Contact Now</button>
                </form>
              </div>
            </div>
          </div>
     


        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>


      </section>
    </>
  )
}



export default Contact
