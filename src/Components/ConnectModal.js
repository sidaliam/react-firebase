import React, { useState } from 'react';
import SignUp from './SignUp';
import Login from './Login'

const ConnectModal = () => {
    const[signUp,setsignUp]=useState(true)
    return (
        <div className='connect-modal'>
            <div className="header-btn">
                <button style = {{background : signUp ? "rgb(28,28,28)" : "rgb(83,83,83)"}} onClick={()=>setsignUp(true)}> s'inscrire </button>
                <button style = {{background : signUp ? "rgb(83,83,83)" : "rgb(28,28,28)"}} onClick={()=>setsignUp(false)} > se connecter </button>
            </div>
        {signUp ? <SignUp/> : <Login/>}
        </div>
    );
};

export default ConnectModal;