import React from "react";
import SideBarRow from "./SideBarRow";
import "./SideBar.css";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import PeopleIcon from "@mui/icons-material/People";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { ExpandMoreOutlined } from "@mui/icons-material";
import { useContext } from "react";
import { UserContext } from "./UserContext";
function SideBar() {
  const [user, setUser] = useContext(UserContext);
  return (
    <div className="sidebar">
      <SideBarRow src={user.photourl} title={user.username} />
      <SideBarRow Icon={PeopleIcon} title="Friends" />
      <SideBarRow Icon={GroupsIcon} title="Group" />
      <SideBarRow Icon={VideoLibraryIcon} title="Videos" />
      <SideBarRow Icon={EmojiFlagsIcon} title="Pages" />

      <SideBarRow Icon={BookmarkIcon} title="Saved" />
      <SideBarRow Icon={StorefrontIcon} title="Marketplace" />

      <SideBarRow Icon={ExpandMoreOutlined} title="More" />
    </div>
  );
}

export default SideBar;
