import "./settings.css"
import Sidebar from "../../components/sidebar/SideBar"
export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your account</span>
                    <span className="settingsDeleteTitle">Delete your account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="http://images6.fanpop.com/image/photos/34200000/itachi-chibi-naruto-shippuuden-34225940-468-500.jpg" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle "></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Itachi" />
                    <label>Email</label>
                    <input type="email" placeholder="uchiha@family.com" />
                    <label>Password</label>
                    <input type="password"  />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
