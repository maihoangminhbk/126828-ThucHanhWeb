import "./header.css"
import bgImg from '../image/home-bg.jpg'
export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Smart  for  future !</span>
                <span className="headerTitleLg">Diary Nikki</span>
            </div>
            {/* <img className="headerImg" src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="" /> */}
            <img className="headerImg" src={bgImg}  alt=""/>
        </div>
    )
}
