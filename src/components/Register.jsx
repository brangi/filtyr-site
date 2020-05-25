import React, {  /*useEffect*/ }  from 'react';
import { GoogleLogin } from 'react-google-login';
import googleConfig from '../config/google/dev'
const success = response => {
  console.log(response) // eslint-disable-line
};

const error = response => {
  console.error(response) // eslint-disable-line
};
const Register = () => {
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