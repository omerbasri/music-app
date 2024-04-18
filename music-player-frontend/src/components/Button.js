export default function Button(props)
{
    return(
    <div className="w-full">
        <ul className="px-7 space-y-5 flex flex-col justify-center hover:bg-hoverSidebar">
             <li className="flex items-center w-4/6  gap-0.5 w-full my-3">
                <img src={props.svg} className="max-w-4"/>
                <button className="px-2 flex items-center text-sm font-semibold text-link ">{props.name}</button>
            </li>
        </ul>
    </div>
    )

}


