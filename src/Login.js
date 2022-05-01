import React from "react";
import { Button } from "@mui/material";
import "./Login.css";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Login({ login }) {
  const [user, setUser] = useContext(UserContext);
  const signIn = () => {
    //sign in
    signInWithPopup(auth, provider)
      .then((result) => {
        login();
        setUser({
          username: result.user.displayName,
          photourl: result.user.photoURL,
        });
        console.log(result.user);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login-left">
        <div className="login-logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png"
            alt=""
          />
        </div>
        <h3>Connect with friends and the world around you on Facebook.</h3>
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <input
            type="text"
            placeholder="Email or phone number"
            className="login-input"
          ></input>
          <input
            type="text"
            placeholder="Password"
            className="login-input"
          ></input>
          <Button type="submit" onClick={signIn}>
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
