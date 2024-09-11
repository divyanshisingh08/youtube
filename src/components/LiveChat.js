


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";

import ChatMessage from "../components/ChatMessage";
import { addMessage } from "../utils/chatSlice";
import {
  generateRandomCompliment,
  generateRandomName,
} from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [userMessage, setUserMessage] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newMessage = {
       
        name: generateRandomName(),
        message: generateRandomCompliment(),
      };
      dispatch(addMessage(newMessage));
    }, 2000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
  
      name: "User name",
      message: userMessage,
    };
    dispatch(addMessage(newMessage));
    setUserMessage("");
  };

  const handleChange = (e) => {
    setUserMessage(e.target.value);
  };

  return (
    <div>
      <div className="w-full  p-2  border shadow-lg bg-slate-100 rounded-lg overflow-y-scroll  h-[200px] md:h-[410px]  flex flex-col-reverse border-black">
        {chatMessages.map((message, i) => (
          <ChatMessage key={i} {...message} />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="bg-white flex p-2 gap-2 rounded-xl items-center">
          <FaUserCircle className="md:text-4xl " />

          <input
            className="outline-none border-b-2 w-full border-blue-200"
            placeholder="Say something..."
            value={userMessage}
            name="userMessage"
            onChange={handleChange}
          />
          <button type="submit" className="bg-none border-none">
            <AiOutlineSend className="w-10 cursor-pointer" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default LiveChat;