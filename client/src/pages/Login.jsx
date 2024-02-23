 import { useState } from "react";
//  import { useNavigate } from "react-router-dom";
import RegistrationPic from '../../public/images/list.png'



export const Login = () => {

  const [user, setUser] = useState({
    email: '',
    password: '',    
  });

  // const navigate = useNavigate();

  // let handle the input field value
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handle form on submit
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(user); 
};

  return (
    <>
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-image reg-img">
              <img
              src= {RegistrationPic}
              alt="a nurse with a cute look"
              width={'400'}
              height={'500'}              
               />               
            </div>
                      {/* our main registration code */}
          <div className="registration-form">
            <h1 className="main-heading mb-3">Login Form</h1>
            <br />
            <form onSubmit={handleSubmit} >
               

              <div >
                <label htmlFor="email">email</label>
                <input 
                type="email"
                name="email"
                value={user.email}
                onChange={handleInput}
                placeholder="email"
                />
              </div>
              
              <div >
                <label htmlFor="password">password</label>
                <input 
                type="password"
                name="password"
                value={user.password}
                onChange={handleInput}
                placeholder="password"
                />
              </div>

              <br />
              <button type="submit" className="btn btn-submit">Login Now</button>
            </form>
          </div>
          </div>
        </div>
      </main>
      </section>      
    </>
  )
}

export default Login
