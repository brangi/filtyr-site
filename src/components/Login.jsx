import React, { useState  /*useEffect*/ } from 'react';
import { API_URL } from '../config/constants';
import { useHistory } from "react-router";
const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if(localStorage.getItem("auth-access"))history.replace('/dash');

  const handleSignup = async () => {
    try{
      const apiResponse = await fetch (`${API_URL}/user/login`, {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ email: email, password: password }),
        credentials: 'include'
      });
      //const response = await apiResponse.json();
      if(apiResponse.status === 200) {
        // const user  = await fetch(`${API_URL}/user/profile`,{credentials: 'include'});
        //console.log(user);
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
          <h1>Log In</h1>
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
            name="psw" id="psw"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required/>
          <hr/>
          <button className="registerbtn" onClick={handleSignup}>Log In</button>
        </div>
        <div className="container-reg signin">
          <p>Need an account? <a href="/signup">Sign Up</a>.</p>
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
export default Login;