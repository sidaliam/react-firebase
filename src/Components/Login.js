import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import { auth } from '../utils/firebase.config';

const Login = () => {
    const loginemail=useRef()
    const loginpassword=useRef()
    const handlelogin= async (e)=>{
        e.preventDefault();
        try{
            const user =await signInWithEmailAndPassword(
                auth,
                loginemail.current.value,
                loginpassword.current.value
            )

        }
        catch(error){
            console.log(error.message)
        }
        console.log(loginemail.current.value,loginpassword.current.value)
    }
    return (
        <div className="login-container">
            <div className="login">
                <h3> se connecter</h3>
                <form onSubmit={(e)=>handlelogin(e)}>
                    <input type="email" placeholder='email' required ref={loginemail} />
                    <input type="password" placeholder='mot de passe' required ref={loginpassword} />
                    <input type="submit" value="se connecter" />
                </form>
            </div>
        </div>
     
    );
};

export default Login;