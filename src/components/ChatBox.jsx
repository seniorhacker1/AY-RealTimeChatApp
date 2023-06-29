import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const messageEndref=useRef();
  const scrollToend=()=>{
    messageEndref.current.scrollIntoView({behavior:"smooth"})
  }
  useEffect(scrollToend,[messages])

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdat"),
      
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return ()=> unsubscribe;
  }, []);
  return (
    <>
      <div className="pb-44 px-20 containerwrap">
        {messages.map((message) => {
          return <Message key={message.id} message={message} />;
        })}
      </div>
      <div ref={messageEndref}></div>
    </>
  );
};

export default ChatBox;
