import React from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";
import { Link } from "react-router-dom";
import WatchPage from "./WatchPage";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import { Home } from "@mui/icons-material";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-48 ">
      
      <ul className="text-xl">
        <li>
          <HomeRoundedIcon />
          <Link to="/">Home</Link>
        </li>
        <li>
          Shorts</li>
        <li>
        <SubscriptionsRoundedIcon/>
          Subscriptions</li>
        <li>Live</li>
      </ul>

      <h1 className="font-bold pt-5 text-xl">Explore</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className="font-bold pt-5 text-xl">You</h1>
      <ul>
        <li>History</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
        <li>Playlist</li>
      </ul>
    </div>
  );
};

export default Sidebar;
