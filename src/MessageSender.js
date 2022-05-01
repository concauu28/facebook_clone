import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./MessageSender.css";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import db from "./firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import {
  doc,
  onSnapshot,
  collection,
  query,
  setDoc,
  addDoc,
  orderBy,
} from "firebase/firestore";
import { useContext } from "react";
import { UserContext } from "./UserContext";
function MessageSender() {
  const [user, setUser] = useContext(UserContext);
  const [Input, setInput] = useState("");
  const [ImgURL, setImgURL] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const docRef = addDoc(collection(db, "posts"), {
      message: Input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photourl,
      username: user.username,
      image: ImgURL,
    });
    // const q = query(db, orderBy("timestamp", "desc"));
    setInput("");
    setImgURL("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender-top">
        <Avatar src={localStorage.getItem("photourl")} />
        <form>
          <input
            value={Input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What's on your mind "
            className="messageSender-input"
          />
          <input
            value={ImgURL}
            onChange={(e) => setImgURL(e.target.value)}
            placeholder="Image,URL(optional)"
          />
          <button type="submit" onClick={handleSubmit}>
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender-bottom">
        <div className="messageSender-option">
          <VideocamIcon style={{ color: "red " }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender-option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender-option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
