import React from 'react';

import HomeSharpIcon from "@material-ui/icons/HomeSharp";
import WhatshotSharpIcon from "@material-ui/icons/WhatshotSharp";
import SubscriptionsSharpIcon from "@material-ui/icons/SubscriptionsSharp";
import VideoLibrarySharpIcon from "@material-ui/icons/VideoLibrarySharp";
import HistorySharpIcon from "@material-ui/icons/HistorySharp";
import PersonalVideoSharpIcon from "@material-ui/icons/PersonalVideoSharp";
import WatchLaterSharpIcon from "@material-ui/icons/WatchLaterSharp";
import ThumbUpSharpIcon from "@material-ui/icons/ThumbUpSharp";
import ExpandMoreSharpIcon from "@material-ui/icons/ExpandMoreSharp";

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
      <div className='history'><HistorySharpIcon className='icon' style={{fontSize: '20px'}} /><div className='menu-title'>History</div></div>
      <div className="your-videos"><PersonalVideoSharpIcon className='icon' style={{fontSize: '20px'}} /><div className='menu-title'>Your videos</div></div>
        <div className="watch-later"><WatchLaterSharpIcon className='icon' style={{fontSize: '20px'}} /><div className='menu-title'>Watch later</div></div>
          <div className="liked-videos"><ThumbUpSharpIcon className='icon' style={{fontSize: '20px'}} /><div className='menu-title'>Liked videos</div></div>
            <div className="expand"><ExpandMoreSharpIcon className='icon' style={{fontSize: '20px'}} /><div className='menu-title'>Show more</div></div>
        </div>
    </div>
  );
}
export default Sidebar;