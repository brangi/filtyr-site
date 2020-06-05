import React, {  /*useEffect*/ useState }  from 'react';
import {API_URL} from '../config/constants'
import { useHistory } from "react-router";

const Signup = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  if(localStorage.getItem("auth-access"))history.replace('/dash');

  const handleSignup = async () => {
    try{
        const apiResponse = await fetch (`${API_URL}/user/signup`, {
          headers: {
            'Content-type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({ email: email, password: password }),
          credentials: 'include'
        });
      //const response = await apiResponse.json();
      if(apiResponse.status === 200) {
        localStorage.setItem('auth-access', 'on');
        history.replace('/dash')
        } else {
          //Display error
          //console.log({response})
        }
    } catch (error) {
      console.log(error)
    }
  };

  return <section>
    <div className="split left">
      <div className="centered">
        <div className="container-reg">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr/>
          <label htmlFor="email"><b>Email</b></label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            id="email" required />

          <label htmlFor="psw"><b>Password</b></label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required/>
          <hr/>

          <p>By creating an account you agree to our <a href="/">Terms & Privacy</a>.</p>
          <button className="registerbtn" onClick={handleSignup}>Sign Up</button>
        </div>
        <div className="container-reg signin">
          <p>Already have an account? <a href="/login">Log In</a>.</p>
        </div>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
          <h2>John Doe</h2>
          <p>Some text here too.</p>
      </div>
    </div>
  </section>
};
export default Signup;