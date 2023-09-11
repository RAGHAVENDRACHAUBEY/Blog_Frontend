import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState } from "react";
import axios from "axios";

export default function Settings() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [photo, setphoto] = useState("");
  let username = JSON.parse(sessionStorage.getItem("username"));
  const editProdcut = async (e) => {
    e.preventDefault();
    try {
      const config = {
        url: "/edituser",
        method: "put",
        baseURL: "https://blog-backend-6gsn.onrender.com/api/auth",
        headers: { "content-type": "multipart/form-data" },
        data: {
          userId: username._id,
          username: name,
          email: email,
          password: password,
          profileImg: photo,
        },
      };
      await axios(config).then(function (res) {
        if ((res.status = 200)) {
          console.log("success");
          window.location.reload();
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const [imageURL, setImageURL] = useState("");
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    console.log(selectedImage, "images aa gya");

    if (selectedImage) {
      const imageURL = URL.createObjectURL(selectedImage);
      setImageURL(imageURL);
    }
  };

  function removeStorage() {
    sessionStorage.removeItem("username");
    window.location.assign("/login");
  }

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete" onClick={removeStorage}>
            Delete Account
          </span>
        </div>
        <form className="settingsForm" onSubmit={editProdcut}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={imageURL} alt="" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              accept="image/*"
              type="file"
              style={{ display: "none" }}
              onChange={(e) => {
                handleImageChange(e);
                setphoto(e.target.files[0]);
              }}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder="raghav"
            name="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="raghav@gmail.com"
            name="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
