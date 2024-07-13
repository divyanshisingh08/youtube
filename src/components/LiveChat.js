import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateStrings } from "../utils/helper";

const LiveChat = () => {
  const [livemessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      console.log("API POLLING");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateStrings(20) + "👌",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  });

  return (
    <>
      <div className="w-full h-[400px] border border-black ml-2 p-2 bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {/* //We should not use Indexes as key but here as it is made up data we dont have key  */}
        <div>
          {chatMessages?.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      <form
        className="w-full p-2 ml-2 border border-black rounded-lg flex"
        onSubmit={(e) => {
          e.preventDefault();
          // console.log("LIVE MESSAGE", livemessage)
          dispatch(
          addMessage({
            name:"Divyanshi",
            message:livemessage,
          })
        );
        setLiveMessage("")
        }}
      >
        <input
          className="w-80 px-2"
          type="text"
          value={livemessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}

        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
