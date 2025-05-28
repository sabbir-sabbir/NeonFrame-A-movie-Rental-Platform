import React from 'react'
import { FaFireAlt } from "react-icons/fa";
import { MdCreateNewFolder } from "react-icons/md";
import { IoCalendar } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";

const Sidebar = () => {

const sideBarData = [
  {
      id: 1,
      icon: <FaFireAlt/>,
      text: "Trending"
  },
  {
      id: 2,
      icon: <MdCreateNewFolder/>,
      text: "New Releases"
  },
  {
      id: 3,
      icon: <IoCalendar/>,
      text: "Coming Soon"
  },
  {
      id: 4,
      icon: <MdFavoriteBorder/>,
      text: "Favorites"
  },
  {
      id: 5,
      icon: <FaRegClock/>,
      text: "Watch Later"
  }
];

  return (
   <>
   <div className=" flex flex-col gap-2 ">
    {
      sideBarData.map((data)=> (
        <div key={data.id}>
          <div className="flex items-center gap-2 hover:text-white hover:bg-[#06d6a0] hover:px-3 py-3 rounded-md hover:gap-4 transition-all duration-300">
              <span className="text-[25px]  " >{data.icon}</span>
 <a className="font-semibold tracking-wide" href="#">{data.text}</a>
          </div>
          
        </div>
       
      ))
    }
   </div>
   </>
  )
}

export default Sidebar