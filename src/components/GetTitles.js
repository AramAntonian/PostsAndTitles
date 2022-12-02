import { useContext,  useMemo } from "react";
import dataContext from "../context/PostAndTitles";

function GetTitles(){
    let data = useContext(dataContext)

    const getData = useMemo(()=> data.map((el)=>
        <li key = {el.key} id = {el.key} onClick = {el.handleShow}>{el.id}{ +el.id === 1? "st":+el.id === 2? "nd":+el.id === 3? "rd":"th"}  post</li>
    
    ),[data])

        return (
        
        <ul className="GetTitles">
            {
               getData
            }
        </ul>
        )

}


export default GetTitles
