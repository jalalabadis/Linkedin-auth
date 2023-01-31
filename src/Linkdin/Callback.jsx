import React, { useEffect, useState } from 'react'
import { LinkedInCallback } from 'react-linkedin-login-oauth2';
import { useSearchParams } from 'react-router-dom';

function Callback() {
  const [searchparms]= useSearchParams('');
  const [Code] = useState(searchparms.get('code'));
useEffect(()=>{
if(Code){
  if (window.opener != null && !window.opener.closed) {
  window.opener.postMessage(Code, '*');
  }
  window.close();
}
},[Code]);
  return (
    <LinkedInCallback/>
  )
}

export default Callback