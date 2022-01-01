import { useEffect, useState } from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import "./sidebar.css"

export default function SideBar() {
    const [cats,setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories");
            setCats(res.data);
        };
        getCats();
    },[])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="sidebarImg" src="https://i.pinimg.com/1200x/05/19/c4/0519c49ace0d882a07c76d6a2ae54363.jpg" alt=""/>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue est, viverra eleifend lorem vitae, blandit consequat libero. Nullam sit amet libero eget nisl fringilla egestas et non magna. Nunc eget ligula facilisis felis consequat ullamcorper vitae a augue. Vestibulum ornare orci eget iaculis tristique. 
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link">
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                    </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                </div>
            </div>
        </div>
    )
}
