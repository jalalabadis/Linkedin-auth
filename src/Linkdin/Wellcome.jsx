import React from 'react'
import { useNavigate } from 'react-router-dom';

function Wellcome() {
    const Navigate= useNavigate();
    const handelLogout=async (e)  =>{
        e.preventDefault();
       sessionStorage.clear();

          Navigate('/')
       // 
      }
  return (
    <div>WellCome <button onClick={handelLogout}>Logout</button></div>
  )
}

export default Wellcome