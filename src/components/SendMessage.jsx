import { getAuth } from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase";

const SendMessage = () => {
  const [value,Setvalue]=useState("");
  const {currentUser}=getAuth();
  const HandleSubmit=async(e)=>{
    e.preventDefault();
    if(value.trim()===""){
      alert("Please enter a valid message");
      return;
    }
    try{
      const {uid,displayName,photoURL}=currentUser;
      await addDoc(collection(db,"messages"),{
       text:value,
       name:displayName,
       avatar:photoURL,
       createdat:serverTimestamp(),
       uid
      })

    }catch(error){
    console.log(error)
    }

    console.log(value);
    Setvalue("");
  }
  return (
    <div className="bg-gray-200 fixed bottom-0 w-full py-5 shadow-lg ">
      <form onSubmit={HandleSubmit} className="mx-2 containerwrap flex">
        <input value={value}
          className="input w-full focus:outline-none bg-gray-100 rounded-r-none"
          type="text"
          name="message"
          id="message"
          onChange={(e)=>{Setvalue(e.target.value);
          console.log(value)}}
        />
        <button type="submit" className="w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm">
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
