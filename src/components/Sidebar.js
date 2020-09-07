import React from 'react';

import HomeSharpIcon from "@material-ui/icons/HomeSharp";
import WhatshotSharpIcon from "@material-ui/icons/WhatshotSharp";
import SubscriptionsSharpIcon from "@material-ui/icons/SubscriptionsSharp";
import VideoLibrarySharpIcon from "@material-ui/icons/VideoLibrarySharp";

import './Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar">
        <div className='sidebar-menu'>
      <div className="home"><HomeSharpIcon className='icon' style={{fontSize: '20px'}} /><div className='menu-title'>Home</div></div>
      <div className="trending"><WhatshotSharpIcon className='icon' style={{fontSize: '20px'}} /><div className='menu-title'>Trending</div> </div>
      <div className="subscriptions"><SubscriptionsSharpIcon className='icon' style={{fontSize: '20px'}} /><div className='menu-title'>Subscriptions</div></div>
      <hr/>
      <div className="library"><VideoLibrarySharpIcon className='icon' style={{fontSize: '20px'}} /><div className='menu-title'>Library</div></div>
        </div>
    </div>
  );
}
export default Sidebar;