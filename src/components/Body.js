import React from 'react'
import Sidebar from './Sidebar';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <>
    <Header />
    <div>
       <div className='flex'>
    <Sidebar/>
    <div className="w-full">
    <Outlet/>
    </div>
   
    </div>

    </div>

    </>
  )
}

export default Body



  {/* <MainContainer/>
    <WatchPage/> */}
