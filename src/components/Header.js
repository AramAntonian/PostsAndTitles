import {  useEffect, useMemo, useState } from "react"
import { Outlet,Link } from "react-router-dom"
import './style.css'


function Header({userId,setUserId}){
    const [input,setInput] = useState("")
    const [data,setData] = useState([])
    const [button,setButton] = useState("Button")
    const [isLogged,setIsLogged] = useState(false)


    
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then(rep => rep.json()).then(repo => setData(repo))
    },[])



    const userName = useMemo(()=>{
        if(userId !== ""){
            return data[userId ].username 
        }
        else return ""
    }
    ,[userId]
    )
    useEffect( ()=>{
        if(data.length){
            const result = data.map((e)=>
            e.email === input? true:false 
            )
             if(result.includes(true)){
                setUserId(data[result.indexOf(true)].id )
                return  setButton("Link")
            }
            else{
              return  setButton("Button")
            }

     }},[input])



    return (
        <div className = "cont">
        <header >
        
        {
            !isLogged?
           (
           <div className="input">
                    <input type = "text" value = {input} onChange = {(e)=>setInput(e.target.value)} />
                   {  
                  button === "Link"?<Link
                   to = '/posts'
                   className = "button" 
                   onClick={()=>(setIsLogged(true))}
                   >
                   login
                   </Link>
                    :<input type = "button" className = "button"onClick = {()=> alert('invalid email!')} value = "login"/>

                }
             
            </div>
            ):
            (
                <div className="userName">
                    <p>{userName}</p>
                    <Link to = "/" className="button" onClick = {()=> setIsLogged(false)}>logout</Link>
                </div>
            )
        }
            
            
        </header>      
        <main className="main">
            <Outlet />
        </main>
        <footer>
            Emails:<br />
            Sincere@april.biz <br />
            Shanna@melissa.tv
        </footer>
        </div>
    )
}



export default Header
