import axios from "axios";
import { useState } from "react";
import "./register.css";

export default function Register() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(false);
  const signup = async (e) => {
    e.preventDefault();
    seterror(false);
    try {
      const config = {
        url: "/api/auth/authentication",
        method: "post",
        baseURL: "https://blog-backend-6gsn.onrender.com",
        headers: { "content-type": "application/json" },
        data: {
          username: name,
          email: email,
          password: password,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        console.log(res.data);
        console.log(res.data.success);
        alert("Signup Success");
        window.location.assign("/login");
      }
    } catch (error) {
      console.log(error.response);
      seterror(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={signup}>
        <label>Username</label>
        <input
          className="registerInput"
          value={name}
          type="text"
          placeholder="Enter your username..."
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <label>Email</label>
        <input
          className="registerInput"
          value={email}
          type="email"
          required
          placeholder="Enter your email..."
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          required
          value={password}
          placeholder="Enter your password..."
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
        {error && <span style={{ color: "red" }}>somthing went wrong</span>}
      </form>
      <button
        className="registerLoginButton"
        onClick={() => {
          window.location.assign("/login");
        }}
      >
        Login
      </button>
    </div>
  );
}
