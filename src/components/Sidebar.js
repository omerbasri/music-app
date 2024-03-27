import logo from "img/music-player-headphones-svgrepo-com (2).svg"
import Menu from "components/SideBar/Menu"
import Button from "./Button"
import SearchLogo from "components/svg/search-logo"




export default function SideBar()
{
    return(
        <aside className="w-50 bg-sidebar border-r border-white border-opacity-15 flex flex-col">
            
            <img src={logo} className="px-9 mt-3" />

            <span className="px-7 mb-12 " >Music Player App</span>

            <Button name="hello" 
             svg={<SearchLogo />}/>
    
        </aside>

    )
}