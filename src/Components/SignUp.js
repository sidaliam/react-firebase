import React, { useRef, useState } from "react";
import { auth } from "../utils/firebase.config";

const SignUp = () => {
  const registeremail = useRef();
  const registerpassword = useRef();
  const[displayName,setdisplayName]=useState("");
  const handleregister = (e) => {
    e.preventDefault();
    try {
      auth
        .createUserWithEmailAndPassword(
          registeremail.current.value,
          registerpassword.current.value
        )
        .then(async (userAuth) => {
          await userAuth.user.updateProfile({
            displayName,
          })
          console.log(userAuth)
          window.location.reload();
        });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="signup-container">
      <div className="signup">
        <h3> s'inscrire </h3>
        <form onSubmit={(e) => handleregister(e)}>
          <input type="text" placeholder="Pseudo" required  onChange={(e)=> setdisplayName(e.target.value)}/>
          <input
            type="email"
            placeholder="email"
            required
            ref={registeremail}
          />
          <input
            type="password"
            placeholder="mot de passe"
            required
            ref={registerpassword}
          />
          <input type="submit" value="valider l'inscription" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
