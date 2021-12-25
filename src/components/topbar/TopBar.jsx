import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
    
    const user = false;
    return (
        <div className="top">
            <div className="topLeft"></div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/" >HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/" >ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/" >CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write" >ADD NEW POST</Link>
                    </li>
                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <div className="topDown" >
                    <img className="topDownImg"
                        src="https://i.pinimg.com/originals/45/ec/4e/45ec4e22c9d48ea0befd8ccc547b5833.png" 
                        alt="" 
                    />     
                    <ul className="topDownContent">
                        <li>{user && "LOGOUT"}</li>
                    </ul>
                </div>
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                        <Link className="link" to="/login" >LOGIN</Link>
                            </li>
                            <li className="topListItem"> 
                        <Link className="link" to="/register" >REGISTER</Link>
                            </li>
                        </ul>
                    )
                }
                
                <i class=" topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
