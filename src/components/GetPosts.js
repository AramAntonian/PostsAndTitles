import { Link, useParams } from "react-router-dom";


function GetPosts({data}){
    const {id} = useParams()
    const elem = data.filter((el)=> +id === +el.id )[0]

        return (
        <div className="GetPosts">
            <p >{elem.title}</p>
            <p>{elem.body}</p>

        <Link to = "/posts" className="Links">Back to Posts</Link>    
        </div>
    )

}


export default GetPosts
