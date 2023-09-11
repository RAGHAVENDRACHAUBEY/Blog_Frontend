import axios from "axios";
import { useState } from "react";

import "./login.css";

export default function Login() {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");

  const signin = async (e) => {
    e.preventDefault();
    try {
      const config = {
        url: "/api/auth/login",
        method: "post",
        baseURL: "https://blog-backend-6gsn.onrender.com",
        headers: { "content-type": "application/json" },
        data: {
          username: name,
          password: password,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        console.log(res.data);
        console.log(res.data.success);
        sessionStorage.setItem("username", JSON.stringify(res.data.username));
        window.location.assign("/");
      }
    } catch (error) {
      alert(error.res, "error");
      console.log(error.res);
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={signin}>
        <label>UserName</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your Username..."
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button className="loginButton" type="submit">
          Login
        </button>
      </form>
      <button
        className="loginRegisterButton"
        onClick={() => {
          window.location.assign("/register");
        }}
      >
        Register
      </button>
    </div>
  );
}
