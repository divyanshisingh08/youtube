import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { closeMenu } from "../utils/menuSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
   <div className="flex flex-col"> 
   <div className="px-10 flex ">
    <div>
      <iframe
      className="rounded-lg"
        width= "750px"
        height= "400px"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
</div>
<div className="w-full">
  <LiveChat/>
</div>
    </div>
    <CommentsContainer/>
    </div>
    
  );
};
 
export default WatchPage;
