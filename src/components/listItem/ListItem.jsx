//import ReactPlayer from "react-player/youtube";
import { Add, PlayArrow, ThumbDown, ThumbUp } from "@mui/icons-material"
import "./listItem.scss"
import React from 'react'

export default function ListItem({index}) {
  const [isHovered, setIsHovered] = React.useState(false);
  const trailer = "https://www.youtube.com/watch?v=o0r78gpGkaM";
  return (
    <div className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src="https://e0.pxfuel.com/wallpapers/886/965/desktop-wallpaper-demon-slayer-top-ultra-demon-slayer-demon-slayer-demon.jpg" alt="" />
      {isHovered && (
  <>
      <video url={trailer} autoPlay={true} loop />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow className="icon"/>
          <Add className="icon"/>
          <ThumbUp className="icon"/>
          <ThumbDown className="icon"/>
        </div>
        <div className="itemInfoTop">
          <span>1 hour 14 mins</span>
          <span className="limit">+16</span>
          <span>1999</span>
        </div>
        <div className="desc">
          The Straw Hat Pirates' first foray into the New World sends them to an island of fire.
        </div>
        <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );  
}
