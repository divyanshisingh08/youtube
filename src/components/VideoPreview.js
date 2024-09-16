import React, { useEffect, useState } from "react";
import { VIDEO_API } from "../utils/constants";
// import VideoInfoComponent from "./VideoInfoComponent";
import VideoPreviewShimmer from "./VideoPreviewShimmer";
import CommentsContainer from "./CommentsContainer";
// import Comments from "./Comments";

const VideoPreview = ({ videoId }) => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const data = await fetch(VIDEO_API + videoId);
    const json = await data.json();
    setVideo(json.items[0]);
  };
  // if (video.length === 0) return <VideoPreviewShimmer />;
  return (
    <div className="flex flex-col md:w-3/5 md:mr-3 mb-4">
      <div>
        <iframe
          className="md:h-[30rem] h-60  w-[46rem] rounded-lg"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"

          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
  
      <CommentsContainer />
    </div>
  );
};

export default VideoPreview;