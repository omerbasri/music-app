import logo from "img/music-player-headphones-svgrepo-com (2).svg"
import Menu from "components/SideBar/Menu"

export default function SideBar()
{
    return(
        <aside className="w-50 bg-sidebar border-r border-white border-opacity-15 flex flex-col">
            
            <img src={logo} className="px-9" />

            <span className="px-7" >Music Player App</span>

            <Menu/>
    
        </aside>

    )
}