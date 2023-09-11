import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [category, setcategory] = useState([]);
  const getCate = async () => {
    try {
      let res = await axios.get(
        "https://blog-backend-6gsn.onrender.com/api/cate/allcategory/"
      );
      // handle success
      if (res.status === 200) {
        console.log(res.data);
        setcategory(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(category, "333");

  useEffect(() => {
    getCate();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="../img/blog.webp" alt="" />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {category?.map((r) => {
            return (
              <li className="sidebarListItem">
                <Link className="link" to={`/?cat=${r?.catename}`}>
                  {r?.catename}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
