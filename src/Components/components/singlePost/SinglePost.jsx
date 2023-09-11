import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "./singlePost.css";
import moment from "moment/moment";

export default function SinglePost() {
  const location = useLocation();
  const pathname = location.pathname.split("/")[2];

  // const { id } = useParams();
  const [items, setitems] = useState({});
  const getPost = async () => {
    try {
      let res = await axios.get(
        "https://blog-backend-6gsn.onrender.com/api/posts/getpost/" + pathname
      );
      // handle success
      if (res.status === 200) {
        console.log(res.data);
        setitems(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(items, "333");

  useEffect(() => {
    getPost();
  }, [pathname]);

  let username = JSON.parse(sessionStorage.getItem("username"));

  // Post Edit
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [updatemode, setupdatemode] = useState(false);
  const [photo, setphoto] = useState("");
  const updatePost = async (e) => {
    e.preventDefault();
    try {
      const config = {
        url: `/update/${items._id}`,
        method: "put",
        baseURL: "https://blog-backend-6gsn.onrender.com/api/posts",
        headers: { "content-type": "multipart/form-data" },
        data: {
          username: username?.username,
          title: title,
          desc: desc,
          // photo: photo,
        },
      };
      await axios(config).then(function (res) {
        if ((res.status = 200)) {
          console.log(res.data.success);
          window.location.reload();
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handledelete = async () => {
    try {
      await axios.delete(
        `https://blog-backend-6gsn.onrender.com/api/posts/delete/${items?._id}`,
        {
          data: {
            username: username?.username,
          },
        }
      );
      window.location.replace("/");
    } catch (error) {
      console.log(error);
      alert("post is not delete");
    }
  };

  // console.log(username?.username);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={`https://blog-backend-6gsn.onrender.com/Images/${items?.photo}`}
          alt=""
        />
        {updatemode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => settitle(e.target.value)}
          />
        ) : (
          <>
            <h1 className="singlePostTitle">
              {items?.title}
              {items?.username == username?.username && (
                <div className="singlePostEdit">
                  <i
                    className="singlePostIcon far fa-edit"
                    onClick={() => {
                      setupdatemode(true);
                    }}
                  ></i>
                  <i
                    className="singlePostIcon far fa-trash-alt"
                    onClick={handledelete}
                  ></i>
                </div>
              )}
            </h1>
          </>
        )}

        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to={`/?user=${items?.username}`}>
                {items?.username}
              </Link>
            </b>
          </span>
          <span> {moment(items?.createdAt).format("MMM Do YY")}</span>
        </div>
        {updatemode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
            style={{ borderBottom: " 1px solid #b09e9e87" }}
          />
        ) : (
          <p className="singlePostDesc">{items?.desc}</p>
        )}
        {updatemode && (
          <button
            className="singlePostButton"
            onClick={(e) => {
              updatePost(e);
            }}
          >
            Update
          </button>
        )}
      </div>
    </div>
  );
}
