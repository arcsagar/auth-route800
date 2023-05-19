import { NavLink } from "react-router-dom";

import Button from "../common/Button/Button"
import NavLinkButton from "../common/Button/NavLinkButton";
import ReactDOM from "react-dom";
import PopUp from "../common/PopUp/PopUp";
import { useOktaAuth } from '@okta/okta-react'
import { useState } from "react";

const Header = () => {
    const [showPop, setShowPop] = useState<boolean>(false);
    const loginPage = [{btName:'Home',path: '/home'}, {btName: 'Search Book', path: '/search'}];
    
    const {oktaAuth, authState} = useOktaAuth();

    if(!authState) {
        return (
         <div> 
          <h1>Loading ....</h1>
         </div>
        )
      }

      const handleLogOut = async () => oktaAuth.signOut(); 
      // console.log('authstae', authState);
      
    const loginButton = loginPage.map((loginBt) => {
        return  <NavLinkButton btName={loginBt.btName} path={loginBt.path} key={loginBt.btName} />
    })


    const  popUpComp = ReactDOM.createPortal(<PopUp
         popFun={() => {
        setShowPop(false)
    }}/>, document.getElementById('popup') as HTMLElement)


    const showPopUp = () => {
        setShowPop(true)
        // console.log()
    }
    
    return (
        <nav className="flex flex-row bg-green-300 p-1 py-4">
       <div className="flex flex-row justify-around w-1/2">
        <span className=" text-teal-600 w-24 rounded "> My First Project Book Library </span>
      {loginButton}
       {/* <NavLink to='/home'> home </NavLink> */}
       </div>
       <div className=" w-1/2 grid  justify-items-end"> 


       {!authState.isAuthenticated ? 
         <NavLinkButton 
         btName="sign In"
         path="/login"
         />
        : 
        <Button 
        btName="sign Out"
        btClass='bg-red-700 w-24 rounded'
        btFunc={handleLogOut}
        />
        }

       {/* <Button 
       btName='sign Up' 
       btClass='bg-cyan-700 w-24 rounded'
        btFunc={showPopUp}/>
       {showPop && popUpComp} */}
       </div>
      </nav>
    )
}

export default Header;