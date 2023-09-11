import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import axios from "axios";

export default function Homepage() {
  const { search } = useLocation();
  console.log(search);
  const [items, setitems] = useState([]);
  const getPost = async () => {
    try {
      let res = await axios.get(
        "https://blog-backend-6gsn.onrender.com/api/posts/getallpost" + search
      );
      // handle success
      if (res.status === 200) {
        console.log(res.data);
        setitems(res.data.posts);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(items, "222");

  useEffect(() => {
    getPost();
  }, [search]);

  return (
    <>
      <Header />

      <div className="home">
        <Posts items={items} />
        <Sidebar />
      </div>
    </>
  );
}
