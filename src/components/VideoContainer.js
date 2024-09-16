import React, { useEffect, useState } from 'react'
import { YOUTUBE_API_MOST_POPULAR } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openMenu } from '../utils/menuSlice';


const VideoContainer = () => {
const dispatch=useDispatch()
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
    dispatch(openMenu())
    
  }, []);

  const getVideos = async () => {
    const data = await fetch( YOUTUBE_API_MOST_POPULAR );
    const json = await data.json();
    setVideos(json.items);
  };


  return (
    <div className="flex flex-wrap justify-center ">
    
      {videos.map(video=>
      (<Link key={video.id} to ={"/watch?v="+ video.id}><VideoCard info={video}/>
    </Link>))}
    </div>
  )
}

export default VideoContainer
