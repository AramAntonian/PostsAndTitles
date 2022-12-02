import {  useEffect, useMemo, useRef, useState } from "react"
import './style.css'


function Header({userId,setUserId}){
    const inputRef = useRef()
    const [data,setData] = useState([])
    const buttonRef = useRef()

    
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
        inputRef.current.focus()    
    }
    const userName = useMemo(()=>{
        if(userId !== ""){
            return data[userId ].username 
        }
        else return ""
    }
    ,[userId]
    )
    const hint= useMemo(()=>{
        if(data.length){
            
            return [data[0].email,data[1].email]
        }
        else return ""
    }
    ,[data]
    )   


    return (
        <div className = "cont">
        <header >
            <div className="input">
                <input type = "text" ref = {inputRef} onKeyDown = {(e)=>{
                    if(e.keyCode === 13)
                    buttonRef.current.focus()
                }}/>
                <button onClick = {handleLogin} ref = {buttonRef}>login</button>
            </div>
    
            <div className = "userName">{userName} </div>
        </header>
        <footer className="hint">
            {hint[0]}<br />
            {hint[1]}
        </footer>
        </div>
    )
}


export default Header
