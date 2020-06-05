import React, { useEffect  /*useEffect*/ } from 'react';
import { API_URL } from '../../config/constants';
import { useHistory } from "react-router";

const DashHome = () => {
  const history = useHistory();

  useEffect( () => {
    fetch(`${API_URL}/user/profile`,{credentials: 'include'})
      .then(res =>{
        if(res.status === 401){
          localStorage.removeItem('auth-access');
          history.replace('/login')
        }
      })
  }, [history]);


  return <section>
    <div className="sidenav">
      <a href="/dash">About</a>
      <a href="/dash">Services</a>
      <a href="/dash">Clients</a>
      <a href="/dash">Contact</a>
    </div>
    <div className="main-dash">
      <h2>Sidenav Example</h2>
      <p>This sidenav is always shown.</p>
    </div>
  </section>
};
export default DashHome;