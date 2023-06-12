import { ArrowDropUp, Notifications, Search } from "@mui/icons-material";
import "./navbar.scss";
import React from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (Window.onscroll = null);
  };
  
  return (
    <div className={isScrolled?"navbar scrolled":"navbar"}>
          <div className="container">
              <div className="left">
                  <img src="https://www.shutterstock.com/shutterstock/videos/1089898673/thumb/10.jpg?ip=x480" alt="" />
                  <span>Homepage</span>
                  <span>Series</span>
                  <span>Movies</span>
                  <span>New and Popular</span>
                  <span>My List</span>
              </div>
              <div className="right">
                  <Search className="icon"/>
              <span>KIDZ</span>
              <Notifications className="icon"/>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcjOSeFVWaG9WUYKQ0dGWWqFD55bVOkUluxNxD7ZMKjb2REP7C7KRwXkya2s0FYwZ1hiU&usqp=CAU" alt="" />
                  <div className="profile">
                      <ArrowDropUp className="icon" />
                      <div className="option">
                          <span>Settings</span>
                          <span>Logout</span>
                    </div>
                  </div>
              </div>
       </div>
    </div>
  )
}

export default Navbar
