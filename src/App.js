import React, { useContext, useState } from "react";
import "./App.css";
import Homepage from "./Components/pages/homepage/Homepage";
import Login from "./Components/pages/login/Login";
import Register from "./Components/pages/register/Register";
import Settings from "./Components/pages/settings/Settings";
import Single from "./Components/pages/single/Single";
import Write from "./Components/pages/write/Write";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./Components/components/topbar/Topbar";

function App() {
  let username = JSON.parse(sessionStorage.getItem("username"));
  const [color, setColor] = useState("white");
  const [setting, setsetting] = useState(false);
  return (
    <>
      <div className="" style={{ backgroundColor: color }}>
        {/* <Topbar /> */}
        <BrowserRouter>
          <Topbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/posts" element={<Homepage />} />
            <Route
              path="/register"
              element={username ? <Homepage /> : <Register />}
            />
            <Route
              path="/login"
              element={username ? <Homepage /> : <Login />}
            />
            <Route path="/post/:id" element={<Single />} />
            <Route path="/write" element={username ? <Write /> : <Login />} />
            <Route
              path="/settings"
              element={username ? <Settings /> : <Login />}
            />
            {/* <Route path="/posts">
            <Homepage />
          </Route>
          <Route path="/register">
            {username ? <Homepage /> : <Register />}
          </Route>
          <Route path="/login">{user ? <Homepage /> : <Login />}</Route>
          <Route path="/post/:id">
            <Single />
          </Route>
          <Route path="/write">{user ? <Write /> : <Login />}</Route>
          <Route path="/settings">
            {user ? <Settings /> : <Login />}
          </Route> */}
          </Routes>
        </BrowserRouter>
      </div>
      <div
        className="color changes"
        style={{
          position: "fixed",
          top: "20%",
          right: "10px",
        }}
      >
        <div className="App-logo">
          {" "}
          <i
            class="fa-solid fa-gear"
            style={{ color: "red", fontSize: "20px", cursor: "pointer" }}
            onClick={() => setsetting(!setting)}
          ></i>
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          top: "25%",
          right: "10px",
        }}
      >
        {setting ? (
          <ul
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              listStyle: "none",
              backgroundColor: " white",
              padding: " 5px",
              borderRadius: "5px",
              width: "80px",
            }}
          >
            <li
              onClick={() => {
                setColor("teal");
              }}
              style={{
                backgroundColor: "teal",
                cursor: "pointer",
                border: "1px solid teal",
                height: " 15px",
                width: "15px",
                borderRadius: "50%",
              }}
            ></li>
            <li
              onClick={() => {
                setColor("green");
              }}
              style={{
                backgroundColor: "green",
                cursor: "pointer",
                border: "1px solid teal",
                height: " 15px",
                width: "15px",
                borderRadius: "50%",
              }}
            ></li>
            <li
              onClick={() => {
                setColor("yellow");
              }}
              style={{
                backgroundColor: "yellow",
                cursor: "pointer",
                border: "1px solid yellow",
                height: " 15px",
                width: "15px",
                borderRadius: "50%",
              }}
            ></li>
            <li
              onClick={() => {
                setColor("#c10da2");
              }}
              style={{
                backgroundColor: "#c10da2",
                cursor: "pointer",
                border: "1px solid #c10da2",
                height: " 15px",
                width: "15px",
                borderRadius: "50%",
              }}
            ></li>
            <li
              onClick={() => {
                setColor("brown");
              }}
              style={{
                backgroundColor: "brown",
                cursor: "pointer",
                border: "1px solid brown",
                height: " 15px",
                width: "15px",
                borderRadius: "50%",
              }}
            ></li>
            <li
              onClick={() => {
                setColor("darkorange");
              }}
              style={{
                backgroundColor: "darkorange",
                cursor: "pointer",
                border: "1px solid darkorange",
                height: " 15px",
                width: "15px",
                borderRadius: "50%",
              }}
            ></li>
          </ul>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default App;
