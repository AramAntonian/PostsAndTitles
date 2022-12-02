import Header from './components/Header.js'
import PostAndTitles from './context/PostAndTitles.js'
import GetPosts from './components/GetPosts.js'
import GetTitles from './components/GetTitles.js'
import {useState,useEffect} from "react"
import {v4 as uuidv4} from "uuid"
 
function App() {
  const [userId,setUserId] = useState("")
  const [posts,setPosts] = useState([])
  
  
  useEffect(()=>{
    if(userId !== "")
      fetch(`https://jsonplaceholder.typicode.com/posts`).then(rep => rep.json())
      .then(repo => setPosts(repo.filter(el =>{
        el.key = uuidv4()
        el.handleShow = handleShow
        el.letShow = {
          display: "none",
        }
        return el.userId === userId
      })))
  
        function handleShow(event){
          console.log(event.target.id)
          setPosts(data => data.map((el)=>{
              if(el.key === event.target.id)
                  el.letShow = {
                      display:"block",
                  }
              return el
          }))
      }

      
    
  },[userId])
  console.log(posts)
  return (
    <>
      <Header userId = {userId} setUserId = {setUserId} />
      <PostAndTitles.Provider value = {posts}>
        <GetTitles  />
        <GetPosts />
      </PostAndTitles.Provider>
    </>
  );
}

export default App;
