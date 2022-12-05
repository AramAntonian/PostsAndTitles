import {   useMemo } from "react";
import { Link } from "react-router-dom";
import {v4 as uuidv4} from "uuid"


function GetTitles({userId,data}){



    const getData = useMemo(()=> data.map((el)=>
        <><Link className="Links" key = {uuidv4} to = {`/posts/${el.id}`}><p>{el.id}{ +el.id === 1? "st":+el.id === 2? "nd":+el.id === 3? "rd":"th"}  post</p></Link></>
    
    ),[data])
    
        return (
        
        <div className="GetTitles">
            {
                userId? getData: ""
            }
        </div>
        )

}


export default GetTitles
