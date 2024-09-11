import React from 'react'
import MainContainer from './MainContainer'

import Sidebar from './Sidebar';
import WatchPage from './WatchPage';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div>
       <div className='flex'>
    <Sidebar/>
    <div className="w-full">
    <Outlet/>
    </div>
   
    </div>

    </div>
  )
}

export default Body



  {/* <MainContainer/>
    <WatchPage/> */}
