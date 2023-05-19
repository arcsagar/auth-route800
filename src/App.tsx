import React from "react";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Header from "./Header/Header";
import SearchBookComponent from "./components/SearchBookComponent/SearchBookComponent";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";

import CheckOut from "./components/CheckOut/CheckOut";
import { oktaConfig } from "./lib/oktaConfig";
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js'
import { Security, LoginCallback } from '@okta/okta-react'
import LoginWidget from "./Auth/LoginWidget";

const  oktaAuth = new OktaAuth(oktaConfig);

function App() {
  const baseURL = 'http://localhost:8080/api';

  const customeAuthHandler = () => {
    history.push('login')
  };

  const history = useHistory();

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin))
  };
 


  return (
    <div className="App container mx-auto">
      <Security 
      oktaAuth={oktaAuth} 
      restoreOriginalUri={restoreOriginalUri} 
       onAuthRequired={customeAuthHandler}>
     <h1>Rudrani</h1>
     <Header />
     <h1> kshitij</h1>
     <h1> rutuparna</h1>
     <h1>Sagar main-s1</h1>
     <h1>RUDRANI main-r</h1>
      <Switch>
        <Route path='/' exact> 
          <Redirect to='/home'  />
        </Route>
      <Route path='/home' >
             <HomePage/>
       </Route>
   
    <Route path='/book/:id' >
      <CheckOut />
    </Route>
   <Route path='/search'>
   <SearchBookComponent/>
   </Route>

   <Route path='/login' render={
    () => <LoginWidget config={oktaConfig} />
   } />

   <Route path='/login/callback' component={LoginCallback}/>
      </Switch>
      </Security>
    </div>
  );
}

export default App;
