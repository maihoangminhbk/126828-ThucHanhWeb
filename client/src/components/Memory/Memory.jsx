// import { useEffect, useState } from "react";
// import Header from "../../components/header/Header";
// import Posts from "../../components/posts/Posts";
// import Sidebar from "../../components/sidebar/Sidebar";
import "./memory.css";
import Slideshow, {plusSlides, currentSlide, showSlides} from "./function.js";
import React from "react";
// import axios from "axios";
// import { useLocation } from "react-router";

export default function Memory() {
    // const [posts, setPosts] = useState([]);
    // const { search } = useLocation();
  
    // useEffect(() => {
    //   const fetchPosts = async () => {
    //     const res = await axios.get("/posts" + search);
    //     setPosts(res.data);
    //   };
    //   fetchPosts();
    // }, [search]);
    return (
        <Slideshow/>
    );
  }
  
