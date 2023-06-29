import React from 'react'
import { UserAuth } from '../context/AuthContext';

const NavBar = () => {
  const {currentUser,Logout}=UserAuth();
  const HandlelogOut=async ()=>{
    try{
     await Logout()
  }catch(error){
    console.log('Error in logout', error)
  }
  }
  return (
    <>
      <div className="navbar fixed z-30 bg-base-100">
        <div className="containerwrap flex justify-between">
          <a className="btn btn-ghost normal-case text-xl">AY-instantChat</a>
        { currentUser ?   <button className='btn btn-primary' onClick={HandlelogOut}>Log out</button>: " "}
        </div>
      </div>
    </>
  );
}

export default NavBar