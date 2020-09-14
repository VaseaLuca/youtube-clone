import React, {useState} from "react";

import "./SidebarRow.css";

function SidebarRow({ selected, Icon, title }) {
  const [isSelected, setIsSelected] = useState(false)
  return (
    <div onClick={()=> setIsSelected(true)} className={`sidebar-row ${isSelected && 'active'} ${selected && "active"}`}>
      <Icon className="icon" style={{ fontSize: "20px" }} />
      <div className="menu-title">{title}</div>
    </div>
  );
}

export default SidebarRow;
