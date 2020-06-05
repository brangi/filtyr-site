/*
   Login
  const googleSuccess = async (gmailResponse) => {
    try{
      if(gmailResponse.profileObj) {
        const apiResponse = await fetch (`${API_URL}/user/signup/social`, {
          headers: {
            'Content-type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({
            email: gmailResponse.profileObj.email,
            method: 'google'
          })
        });
        if(apiResponse.status === 200 || 409) {
          history.replace('/dash')
        }
      }
    } catch (error) {
      console.log(error)
    }
  };

  const googleError = response => {
    console.error(response) // eslint-disable-line
  };

  const responseFacebook = async (response) => {
    console.log({response})
    try{
      if(response && response.userID) {
        const apiResponse = await fetch (`${API_URL}/user/signup/social`, {
          headers: {
            'Content-type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({
            fbId: response.userID,
            method: 'facebook'
          })
        });
        if(apiResponse.status === 200 || 409) {
          history.replace('/dash')
        }
      }
    } catch (error) {
      console.log(error)
    }
  };

  const componentClicked = () => {
    console.log('Facebook btn clicked');
  };

  /*
<GoogleLogin
  onSuccess={googleSuccess}
  onFailure={googleError}
  clientId={googleConfig.web.client_id}>
  <span>Sign up with Google</span>
</GoogleLogin>
<FacebookLogin
  appId="609012529971893"
  autoLoad={false}
  fields="name,email"
  cssClass="btn-fb fb"
  textButton={"Signup with Facebook"}
  onClick={componentClicked}
  callback={responseFacebook} />

   ========================================================================
     const googleSuccess = async (gmailResponse) => {
    try{
      if(gmailResponse.profileObj) {
        const apiResponse = await fetch (`${API_URL}/user/login/social`, {
          headers: {
            'Content-type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({
            email: gmailResponse.profileObj.email,
            method: 'google'
          })
        });
        if(apiResponse.status === 200 || 409) {
          history.replace('/dash')
        }
      }
    } catch (error) {
      console.log(error)
    }
  };

  const googleError = response => {
    console.error(response) // eslint-disable-line
  };

  const responseFacebook = async (response) => {
    console.log({response});
    try{
      if(response && response.userID) {
        const apiResponse = await fetch (`${API_URL}/user/login/social`, {
          headers: {
            'Content-type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({
            fbId: response.userID,
            method: 'facebook'
          })
        });
        if(apiResponse.status === 200 || 409) {
          history.replace('/dash')
        }
      }
    } catch (error) {
      console.log(error)
    }
  };

  const componentClicked = () => {
    console.log('Facebook btn clicked');
  }


 */
