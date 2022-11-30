import { useContext,  useMemo } from "react";
import dataContext from "../context/PostAndTitles";

function GetPosts(){
    const data = useContext(dataContext)
    const getData = useMemo(()=> data.map((el)=>
    <li key = {Math.random()}>{el.body}</li>

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