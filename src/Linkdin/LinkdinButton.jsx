import React, { useEffect, useState } from 'react'
import '../Linkdin/Linkedin.css'
import {  useNavigate } from 'react-router-dom';

function LinkdinButton() {
 
  
  const Navigate= useNavigate();
  const [Authorization]=useState(sessionStorage.getItem('Authorization'));


  const  linkedInLogin  = () => {
    var oauthUrl = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id='+process.env.REACT_APP_CLIENT_ID+'&scope=r_liteprofile&state=123456&redirect_uri='+process.env.REACT_APP_REDIRECT_URI;
    var width = 450,
      height = 730,
      left = window.screen.width / 2 - width / 2,
      top = window.screen.height / 2 - height / 2;

    window.open(
      oauthUrl,
      "Linkedin",
      "menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=" +
        width +
        ", height=" +
        height +
        ", top=" +
        top +
        ", left=" +
        left
    );
  };

useEffect(()=>{
  if(Authorization){
    Navigate('/user')
    };

    window.addEventListener( "message",function (e) {
      if(e.origin === '/callback'){ return; }
      if(typeof e.data !== 'object' && e.data !== null){
        const myObj = JSON.parse(e.data);
        console.log(myObj.code);
      sessionStorage.setItem('Authorization', e.data);
      Navigate('/user');
    }}, false);
},[Authorization, Navigate]);



  return (

    <div  onClick={linkedInLogin} className="social-button" id="linkedin-connect"> <span>Connect with LinkedIn</span></div>

  )
}

export default LinkdinButton