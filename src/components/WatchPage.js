// import React from "react";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { closeMenu } from "../utils/menuSlice";
// import { useSearchParams } from "react-router-dom";
// import CommentsContainer from "./CommentsContainer";
// import LiveChat from "./LiveChat";

// const WatchPage = () => {
//   const [searchParams] = useSearchParams();
//   console.log(searchParams.get("v"));
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(closeMenu());
//   }, []);
//   return (
//    <div className="flex flex-col"> 
//    <div className="px-10 flex ">
//     <div>
//       <iframe
//       className="rounded-lg"
//         width= "750px"
//         height= "400px"
//         src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
//         title="YouTube video player"
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         referrerPolicy="strict-origin-when-cross-origin"
//         allowFullScreen
//       ></iframe>
// </div>
// <div className="w-full">
//   <LiveChat/>
// </div>
//     </div>
//     <CommentsContainer/>
//     </div>
    
//   );
// };
 
// export default WatchPage;



import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu} from "../utils/menuSlice";
import VideoPreview from "./VideoPreview";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  useEffect(() => {
    dispatch(closeMenu());
  
  }, []);

  return (
    <div className=" md:flex md:flex-wrap md:justify-center w-1/4 md:w-full mt-4">
      <VideoPreview videoId={videoId} />
      <div className="hidden md:block w-1/4  rounded-xl border h-[30rem] shadow-sm">
        <p className="border-b p-2">Live Chat</p>
        <div className="bg-gray-50">
          <LiveChat />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;

