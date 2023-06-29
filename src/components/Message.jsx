import React from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";

const Message = (props) => {
  const { currentUser } = UserAuth();
  return (
    <>
      <div>
        <div
          className={`chat ${
            props.message.uid === currentUser.uid ? "chat-end" : "chat-start"
          }`}>
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src={props.message.avatar} />
            </div>
          </div>
          <div className="chat-header">
            {props.message.name}
            <time className="text-xs opacity-50">
              {props.message.createdat &&
                props.message.createdat.toDate().toLocaleString()}
            </time>
          </div>
          <div className="chat-bubble">{props.message.text}</div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
      </div>
    </>
  );
};

export default Message;
