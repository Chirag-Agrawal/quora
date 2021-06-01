import React, { useState } from "react";
import Navbar from './Navbar'
import Left from './Left.js';
import  Right  from "./Right.js";
import Question from './Question'
import Register from './Register';

const HomePage = () => {
    const [isSignedIn, setIsSignedIn] = useState('false')
  const [userId, setUserId] = useState(0);
  const [name, setName] = useState('');


  const onRouteChange = (route) => {
      if (route === 'home'){
        setIsSignedIn(true);
      }
      else {
        setIsSignedIn(false);
      }
  }

  const loadUser = (data) => {
    setUserId(data.id);
    setName(data.fname);
  }
    return (
        <div>
        {/*
               < Navbar onRouteChange={onRouteChange} name={name}/>
        < Left userId={userId}/>
        < Right className="app__right" userId={userId}/>
        < Question userId={userId}/>
        */ }
     
        {
          (isSignedIn=== true) ?( 
            <div className="app">   
           < Navbar onRouteChange={onRouteChange} name={name}/>
        < Left userId={userId}/>
        < Right className="app__right" userId={userId}/>
        < Question userId={userId}/>
         
           </div>
          )
           :(
             <div>
                <Register onRouteChange={onRouteChange} loadUser={loadUser}/>
             </div>
           )

        }
        </div>
    )
}

export default HomePage
