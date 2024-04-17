import logo from "img/music-player-headphones-svgrepo-com (2).svg"
import Button from "./Button"
import SearchLogo from "img/search-svgrepo-com.svg"
import like from "img/like-heart.svg"
import createPlaylist from "img/create.svg"
import yourPlaylist from "img/playlist-minimalistic-2-svgrepo-com.svg"
import login from "img/login-logo.svg"
import register from "img/register.svg"
import {Link} from "react-router-dom"
 

const logos = [SearchLogo, like, createPlaylist, yourPlaylist, register, login ];
const logoNames = ["Search", "Favorites", "Create Playlist", "Your Playlist", "Sign up","Login"];
const routes = ["/search", "/favorites", "/create", "/playlist", "/register", "/login"];

export default function SideBar()
{
    return(
        <aside className="w-50 bg-sidebar border-r border-white border-opacity-15 flex flex-col">
            
            <img src={logo} className="px-9 mt-3" />

            <span className="px-7 mb-12 " >Music Player App</span>


            {logos.map((data,index)=>(
                <Link key={index} to={routes[index]}>
                <Button key={index} svg={data} name={logoNames[index]}/>
                </Link>
                ))}
                
        </aside>

    )
}