import React, {  /*useEffect*/ }  from 'react';
import { GoogleLogin } from 'react-google-login';
import googleConfig from '../config/google/dev'
import {API_URL} from '../config/constants'

const Register = () => {
  const success = async (gmailResponse) => {
    //console.log(gmailResponse.profileObj);
    try{
      if(gmailResponse.profileObj) {
        const apiResponse = await fetch (`${API_URL}/user/signup`, {
          headers: { 'Content-type': 'application/json' },
          method: 'POST',
          body: JSON.stringify({
            email: gmailResponse.profileObj.email,
          })
        });
        const result = await apiResponse.json();
      }
    } catch (error) {
      console.log(error)
    }
  };

  const error = response => {
    console.error(response) // eslint-disable-line
  };
  return <section>
    <div className="split left">
      <div className="centered">
        <GoogleLogin onSuccess={success} onFailure={error} clientId={googleConfig.web.client_id}>
          <span>Sign up with Google</span>
        </GoogleLogin>
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
export default Register;