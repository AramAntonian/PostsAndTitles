import Header from './components/Header.jsx'
import GetPosts from './components/GetPosts.jsx'
import GetTitles from './components/GetTitles.jsx'
import {useState,useEffect} from "react"
import { Route, Routes } from 'react-router-dom'

 
function App() {
  const [userId,setUserId] = useState("")
  const [posts,setPosts] = useState([])
  
  
  useEffect(()=>{
    if(userId !== "")
      fetch(`https://jsonplaceholder.typicode.com/posts`).then(rep => rep.json())
      .then(repo => setPosts(repo.filter(el => el.userId === userId
      )))
  },[userId])

  return (
    <>
    <Routes>
      <Route path = "/" element = {<Header  userId={userId} setUserId = {setUserId}/>}>
        <Route path= "posts" element = {<GetTitles  userId = {userId} data = {posts} />} />
        <Route path = "posts/:id" element = {<GetPosts data = {posts}/>}/>
      </Route>
    </Routes>
     
    </>
  );
}

export default App;
