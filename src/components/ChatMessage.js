import React from 'react'
import { FaUserCircle } from "react-icons/fa";

// const ChatMessage = ({name,message}) => {
//   return (
//     <>
//     <div className='flex items-center shadow-sm p-2'>
//        <img
//           className="h-8"
//           src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
//           alt="user"
//         />
//         <span className='font-bold px-2'>{name}</span>
//         <span>{message}</span>
//     </div>
   
//     </>
//   )
// }
const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex gap-2  p-2 items-center">
      <FaUserCircle className="text-2xl" />
      <p className="text-sm font-medium">{name}</p>
      <p className="text-sm break-all">{message}</p>
    </div>
  );
};
export default ChatMessage
