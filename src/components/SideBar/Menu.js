import searchlogo from "img/search-svgrepo-com.svg"
import like from "img/like-heart.svg"
import create from "img/create.svg"
import playlist from "img/playlist-minimalistic-2-svgrepo-com.svg"

export default function Menu()
{
    return(

        <nav className="px-7 my-12">
            <ul className="space-y-5 flex flex-col ">
                <li className="flex items-center w-4/6">
                    <img className="max-w-5" src={searchlogo} /> 
                    <button className="px-1 flex items-center text-sm font-semibold text-link hover:text-white ">Search </button> 
                    
                </li>
                <li className="flex items-center w-full">
                    <img className="max-w-4" src={like} />
                    <a href="#" className="px-2 flex items-center text-sm font-semibold text-link hover:text-white">Liked Songs</a>
                </li>
                <li className="flex items-center">
                    <img className="max-w-4" src={create} />
                    <a href="#" className="px-2 flex items-center text-sm font-semibold text-link hover:text-white">Create Playlist</a>
                </li>
                <li className="flex items-center">
                    <img className="max-w-4" src={playlist} />
                    <a href="#" className="px-2 flex items-center text-sm font-semibold text-link hover:text-white">Your Playlists</a>
                </li>
            </ul>

        </nav>


    )
}
