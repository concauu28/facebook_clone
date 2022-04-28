import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  function loginuser() {
    setUser(() => "tien");
  }
  return (
    <div className="app">
      {!user ? (
        <Login login={loginuser} />
      ) : (
        <div>
          {" "}
          <Header />
          <div className="app_body">
            <SideBar />
            <Feed />
            <Widgets />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
