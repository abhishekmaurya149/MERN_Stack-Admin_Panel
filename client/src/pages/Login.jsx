 import { useState } from "react";
 import { useNavigate } from "react-router-dom";
import RegistrationPic from '../../public/images/list.png'
// import {useAuth} from "../store/auth";


export const Login = () => {

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',    
  });

  // const { saveTokenInLocalStr } = useAuth();

  const navigate = useNavigate();

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
const handleSubmit = async (e) => {
  e.preventDefault();
  try {     
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(user),
    });
    
    console.log("respose data: ", response);
  
    if (response.ok) {
      const responseData = await response.json();
      alert("login sucsseful");
      setUser({ email: "",  password: ""});
      navigate("/");
      console.log("after login: ", responseData);
      // saveTokenInLocalStr(responseData.token);
      NavigationPreloadManager("/");
    }   else {
      console.log("invalid credinsial");
    }        
  } catch (error) {
    console.log("Error", error);    
  }
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
