import SignUp from '../SignUp/SignUp';
import './Auth.module.css';
import Login from '../Login/Login';
import React, { useState } from 'react';
const Auth = () => {
  const [login,setLogin]=useState(true);
  const [showSendingModal, setShowSendingModal] = useState(false);

  const loginHandler = ()=>{
    setLogin(true);
  }
   const signHandler = ()=>{
    setLogin(false);
  }

    return (
   <React.Fragment>
    <div>
  <div className="d-flex justify-content-center align-items-center flex-column" style={{ height: '100vh' }}>
    {/* <div className='auth-Toggle'>
      <span className={login ? "auth-login active" : "auth-login"} onClick={loginHandler}>Login</span>
      <span className={!login ? "auth-signup active" : "auth-signup"} onClick={signHandler}>SignUp</span>
    </div> */}
    {!login && <SignUp signup={loginHandler} showModal={setShowSendingModal}></SignUp>}
    {login && <Login login={signHandler} showModal={setShowSendingModal}></Login>}
    {showSendingModal && <div className='Auth-load-modal'>
      <div class="Auth-loader"></div>
      </div>}
  </div>
</div>
    </React.Fragment>
  )
}

export default Auth;