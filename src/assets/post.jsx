

import { BsThreeDots } from "react-icons/bs";

import { IoChatboxOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { BiSolidLike } from "react-icons/bi";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";






 export function Mypost() {
  return( <>
       <div className="main">
           <div className="header">
             <div className="profileImg">
               <img src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="profile picture" />
               <div className="profileName">
                 Muhammad Sufiyan <br />
                 <span>Mondoy 12:00 pm</span>
               </div>
             </div>
   
             <div className="profileIcon">
               <BsThreeDots />
             </div>
           </div>
           <div className="caption">
             <p>
               Picture dolor sit amet consectetur adipisicing elit. Modi iste
               debitis et ipsam aut.
             </p>
           </div>
           <div className="postImg">
             <img width={'auto'}
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkXO-OqXt4M47SSRhBwtDwcBe0DtL39elfew&s"
               alt=" post image"
             />
           </div>
           <div className="comment">
             <div className="commentIcon">
               <span className="iconc heart">
                 <FaRegHeart />
               </span>
               <span className="iconc likeC">
                 <BiSolidLike />
               </span>
               <span className="iconc smile">
                 <FaRegFaceSmileBeam />
               </span>
               
               <span className="hello">Hello hye  20 otheras</span>
             </div>
             <div className="commentCont">23 Comments</div>
           </div>
           <div className="iconFooter">
             <div className="likeIcon">
               <AiOutlineLike />
             </div>
             <div className="chatIcon">
               <IoChatboxOutline />
             </div>
             <div className="shareIcon">
               <IoShareSocialOutline />
             </div>
           </div>
         </div>
    
    
    
    
    </>) 
}
// export const Mypost = () => {
//     // Tumhara component code yahan
// }