import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  let username = JSON.parse(sessionStorage.getItem("username"));
  function removeStorage() {
    sessionStorage.removeItem("username");
    window.location.assign("/login");
  }
  const [showimg, setshowimg] = useState(false);
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>

          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {username && (
            <li className="topListItem" onClick={removeStorage}>
              LOGOUT
            </li>
          )}
        </ul>
      </div>
      <div className="topRight">
        {username ? (
          <Link className="link" to="/settings">
            {showimg ? (
              <img className="topImg" src="../user.png" alt="" />
            ) : (
              <img
                className="topImg"
                src={`https://blog-backend-6gsn.onrender.com/Images/${username?.profileImg}`}
                alt=""
              />
            )}
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        {/* <i className="topSearchIcon fas fa-search"></i> */}
        {username?.username}
      </div>
    </div>
  );
}
