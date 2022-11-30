import { useEffect, useMemo, useRef, useState } from "react"
import './style.css'

function Header({userId,setUserId}){
    const inputRef = useRef()
    const [data,setData] = useState([])
    
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then(rep => rep.json()).then(repo => setData(repo))
    },[])


    function handleLogin(){
        const result = data.map((e)=>
            e.email === inputRef.current.value? true:false 
        )
        if(result.includes(true)){
            setUserId(data[result.indexOf(true)].id )
            
        }
        else{
            alert("invalid email!")
            
        }
        inputRef.current.value = ""     
    }
    const userName = useMemo(()=>{
        if(userId !== ""){
            return data[userId ].username 
        }
        else return ""
    }
    ,[userId]
    )

    return (
        <header >
            <div className="input">
                <input type = "text" ref = {inputRef}/>
                <button onClick = {handleLogin}>login</button>
            </div>
    
            <div className = "userName">{userName} </div>
        </header>
    )
}


export default Header