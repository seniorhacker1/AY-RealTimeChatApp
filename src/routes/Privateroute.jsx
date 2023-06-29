import React, { Children } from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export const Privateroute = ({ children }) => {
  const {currentUser}=UserAuth();
  if (!currentUser){
return <Navigate to="/" replace={true} />
  }else {return children};
};
