import React from 'react';

import './SidebarRow.css'

function SidebarRow({ selected, Icon, title }) {
  return (
    <div className={`sidebar-row ${selected && 'selected'}`} >
      <Icon className="icon" style={{ fontSize: "20px" }} />
      <div className="menu-title">{title}</div>
    </div>
  );
}

export default SidebarRow;