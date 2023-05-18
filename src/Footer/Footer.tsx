import React from "react";
import Button from "../common/Button/Button";

const Footer = () => {
    const loginPage = ['Home', 'Search Book']
    const loginButton = loginPage.map((btName) => {
        return  <Button key={btName} btName={btName} />
    })
  return (
    <footer className="bg-green-300 text-white py-4">
      <nav className="flex flex-row bg-green-300 p-1">
       <div className="flex flex-row justify-around w-1/2">
        <span className=" text-teal-600 w-24 rounded "> Book Library </span>
    
       </div>
       <div className=" w-1/2  justify-items-end flex flex-row">
      {loginButton}
        </div>
      </nav>
     
    </footer>
  );
};

export default Footer;