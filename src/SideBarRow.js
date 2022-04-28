import React from "react";
import "./SideBarRow.css";
import { Avatar } from "@mui/material";
function SideBarRow({ src, Icon, title }) {
  return (
    <div className="sidebarrow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}

export default SideBarRow;
