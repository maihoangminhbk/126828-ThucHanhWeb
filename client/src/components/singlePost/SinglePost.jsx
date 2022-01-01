import axios from "axios";
import { useEffect, useState } from "react";
import {useLocation} from "react-router";
import {Link} from "react-router-dom"
import "./singlePost.css"

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        const getPost = async () => {
          const res = await axios.get("/posts/" + path);
          setPost(res.data);
          setTitle(res.data.title);
          setDesc(res.data.desc);
        };
        getPost();
      }, [path]);

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                    <img 
                    className="singlePostImg" 
                    src={post.photo} 
                    alt="" 
                    />
                )}
                <h1 className="singlePostTitle">
                    <b>{post.title}</b>
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author:
                    <Link to={`/?user=${post.username}`} className="link">
                        <b> {post.username}</b>
                    </Link>
                </span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="singlePostDesc">
                    {post.desc}
                </p>
            </div>
        </div>
    )
}
