export default function Button(props)
{
    return(
        <ul className="px-7 space-y-5 flex flex-col ">
             <li className="flex items-center w-4/6  gap-2">
                <div className="max-w-4">{props.svg}</div>
                <button className="px-2 flex items-center text-sm font-semibold text-link ">{props.name}</button>
            </li>
        </ul>

    )

}


