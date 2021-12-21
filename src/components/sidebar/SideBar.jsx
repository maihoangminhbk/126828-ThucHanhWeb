import "./sidebar.css"

export default function SideBar() {
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
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
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
