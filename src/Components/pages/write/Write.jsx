import axios from "axios";
import { useState } from "react";
import "./write.css";

export default function Write() {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [cate, setCate] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [photo, setphoto] = useState("");

  let user = JSON.parse(sessionStorage.getItem("username"));
  const addPost = async (e) => {
    e.preventDefault();
    console.log("ghyh", photo);
    try {
      const config = {
        url: "/post",
        method: "post",
        baseURL: "https://blog-backend-6gsn.onrender.com/api/posts",
        headers: { "content-type": "multipart/form-data" },
        data: {
          username: user?.username,
          title: title,
          desc: desc,
          photo: photo,
          category: cate,
        },
      };
      await axios(config).then(function (res) {
        if ((res.status = 200)) {
          console.log(res.data.success);
          window.location.replace("/");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(photo, "<<><><><>");
  // let URL = "https://blog-backend-6gsn.onrender.com/api/posts/post";

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    // console.log(selectedImage, "images aa gya");

    if (selectedImage) {
      const imageURL = URL.createObjectURL(selectedImage);
      setImageURL(imageURL);
    }
  };

  return (
    <div className="write">
      <img className="writeImg" src={imageURL} alt="" />
      <div className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
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
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
          <input
            className="writeInput"
            placeholder="Category"
            type="text"
            autoFocus={true}
            value={cate}
            onChange={(e) => {
              setCate(e.target.value);
            }}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          />
        </div>
        <div className="writeSubmit" onClick={addPost}>
          Publish
        </div>
      </div>
    </div>
  );
}
