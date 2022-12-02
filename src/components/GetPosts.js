import { useContext,  useMemo } from "react";
import dataContext from "../context/PostAndTitles";

function GetPosts(){
    const data = useContext(dataContext)
    const getData = useMemo(()=> data.map((el)=>
    <li key = {el.key} style = {el.letShow} id = {el.key} >{el.id}{ +el.id === 1? "st":+el.id === 2? "nd":+el.id === 3? "rd":"th"}:{el.title}<ul key = {Math.random()}>{el.body}</ul></li>

    ),[data])
 
        return (
        <ol className="GetPosts">
            {
                getData
            }
        </ol>
    )

}


export default GetPosts
