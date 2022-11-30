import Header from './components/Header.js'
import PostAndTitles from './context/PostAndTitles.js'
import GetPosts from './components/GetPosts.js'
import GetTitles from './components/GetTitles.js'
import {useState,useEffect} from "react"
 
function App() {
  const [userId,setUserId] = useState("")
  const [posts,setPosts] = useState([])
  
  
  useEffect(()=>{
    if(userId !== "")
      fetch(`https://jsonplaceholder.typicode.com/posts`).then(rep => rep.json()).then(repo => setPosts(repo.filter(el => el.userId === userId)))
      
    
  },[userId])
  console.log(posts)
  return (
    <>
      <Header userId = {userId} setUserId = {setUserId} />
      <PostAndTitles.Provider value = {posts}>
        <GetTitles />
        <GetPosts />
      </PostAndTitles.Provider>
    </>
  );
}

export default App;
