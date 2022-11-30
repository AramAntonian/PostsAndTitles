import { useContext,  useMemo } from "react";
import dataContext from "../context/PostAndTitles";

function GetTitles(){
    const data = useContext(dataContext)

    const getData = useMemo(()=> data.map((el)=>
        <li key = {Math.random()}>{el.title}</li>
    
    ),[data])

        return (
        
        <ol className="GetTitles">
            {
               getData
            }
        </ol>
        )

}


export default GetTitles