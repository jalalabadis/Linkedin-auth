import React, { useEffect, useState } from 'react'
import { LinkedInCallback } from 'react-linkedin-login-oauth2';
import { useSearchParams } from 'react-router-dom';

function Callback() {
  const [searchparms]= useSearchParams('');
  const [Code] = useState(searchparms.get('code'));
useEffect(()=>{
if(Code){
  var JsonsData = {
    'code': Code,
    'id':54,
    'action':'do_logout'
};
  if (window.opener != null && !window.opener.closed) {
  window.opener.postMessage(JSON.stringify(JsonsData), '*');
  }
  window.close();
}
},[Code]);
  return (
    <LinkedInCallback/>
  )
}

export default Callback