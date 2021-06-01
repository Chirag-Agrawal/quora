import Navbar from './Navbar'
import './App.css';
import Left from './Left.js';
import  Right  from "./Right.js";
import Question from './Question'
import HomePage from './HomePage.js'
import React, { useState } from "react";
import Register from './Register';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import {Link} from 'react-router-dom';
import AddQuestion from './AddQuestion'
import Profile from './Profile'
import Spaces from './Spaces'



function App() {
  /*const [isSignedIn, setIsSignedIn] = useState('false')
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
  }*/
  return (
    <>
      <Router>
        {/*
          (isSignedIn=== true) ?( 
            <div className="app">   
          {/*   < Navbar onRouteChange={onRouteChange} name={name}/>
        < Left userId={userId}/>
        < Right className="app__right" userId={userId}/>
        < Question userId={userId}/>
                 <HomePage onRouteChange={onRouteChange} name={name} userId={userId} />
         
           </div>
          )
           :(
             <div>
                <Register onRouteChange={onRouteChange} loadUser={loadUser}/>
             </div>
           )

       */ }
       <Switch>
         <Route exact path='/' component={HomePage} />
         <Route path='/register' component={Register} />
         <Route path='/addquestion' component={AddQuestion} />
         <Route path='profile' component={Profile} />
         <Route path='/spaces' component={Spaces} />
       </Switch>
        
       </Router>
      </>  
  );
}

export default App;
