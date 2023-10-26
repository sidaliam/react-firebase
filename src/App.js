import React, { useState } from 'react';
import ConnectModal from './Components/ConnectModal';
import  {onAuthStateChanged,signOut} from 'firebase/auth';
import { auth } from './utils/firebase.config';
import CreatePost from './Components/CreatePost';

const App = () => {
  const [user,setuser]=useState(null)

  onAuthStateChanged(auth,(currentuser)=>{
    setuser(currentuser)
  });
  const handlelogout= async()=>{
    await signOut(auth)

  }
  return (
    <div>
      <div className="app-header">
      {user&&(
          <div className="user-infos">
            <span> {user?.displayName[0]}</span>
            <h4> {user?.displayName}</h4>
            <button onClick={()=>handlelogout()}> se deonnecter </button>
            
          </div>
        )}
      
        {user ? <CreatePost/> : <ConnectModal/>}
        
      </div>
      <div className="posts-container"></div>
    </div>
  );
};

export default App;