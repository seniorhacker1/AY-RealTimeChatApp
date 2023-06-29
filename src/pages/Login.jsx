import React, { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigator=useNavigate();
 const { currentUser, signinWithGoogle } = UserAuth();
 console.log({ currentUser });
 const HandleClick= async () =>{
  try {
    await signinWithGoogle();
  } catch (error) {
    console.log(error)
  }

 }
 console.log({ currentUser });
 useEffect(()=>{
if(currentUser){
  navigator("/chat");

}
 },[currentUser])

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
             join AY ,join conversations ,meet new people , All of that in one shared Room
            </p>
            <button className="btn btn-primary" onClick={HandleClick}>Login with Google </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
