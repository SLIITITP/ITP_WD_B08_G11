import "./Bupdate.css"
import React from "react"
import 'react-quill/dist/quill.snow.css'
import { FaChevronLeft } from "react-icons/fa"
import { useState ,useEffect} from "react"
import {  useNavigate ,useParams} from "react-router-dom"
import Editor from "./Editor"

export const Update =()=>{

const[heading,setHeading]= useState('')
const[email,setEmail]= useState('')
const[username,setName]= useState('')
const[content,setContent]= useState('')
const[files,setFiles] = useState('')
const[image,setImage] = useState('')
const[category,setCategory]=useState('')


const history = useNavigate()

const {id} = useParams()  
const[redirect,setRedirect] = useState(false)

//const [blog,setBlogs] = useState({id:"",username:"",content:"",heading:"",image:"",email:""})
  
  useEffect(()=>{
    fetch('http://localhost:8070/blog/'+id)
    
    .then(response =>{
      response.json().then(editInfo =>{

        setName(editInfo.username)
        setEmail(editInfo.email)
        setImage(editInfo.image)
        setContent(editInfo.content)
        setHeading(editInfo.heading)
        setCategory(editInfo.category)
        
      })
    })
  },[])
  /*const loadBlog = async()=>{
      const result = await axios.get('http://localhost:5000/blog/'+id)
      setBlogs(result.data)
  }*/

async function handleUpdate(event)
{
  event.preventDefault()
    const data = new FormData()
    data.set('id',id)
    data.set('username',username)
    data.set('heading',heading)
    data.set('email',email)
    data.set('category',category)
    data.set('content',content)
    if(files?.[0]){
      data.set('file',files?.[0])
    }
    
    const response = await fetch('http://localhost:8070/blog/'+id,{
     method : 'PUT',
        body: data,
        credentials: 'include'
      })
      console.log(response)
     if(response.ok)
     {
      setRedirect(true)
     }
}
if(redirect){
  return history("/myBlogs")
  }
    
    return(<>
    <body id="BUbody" >
    <div><button className="Bback" onClick={()=>{history("/tBView")}}><FaChevronLeft></FaChevronLeft></button></div>
        
        <h1 id="bH1">Update Blog Page</h1><br></br>
        
    <form onSubmit={handleUpdate} id="Bform">
     <br></br> 
     
    <label id="Blabel">BID</label>  <br></br>
    <input type="text" id="Binput" value={id} readOnly/><br></br>
    <label id="Blabel">Username</label>  <br></br>
    <input type="username" id="Binput" placeholder={"Username"} value={username}  onChange={event=> setName(event.target.value)} /><br></br>
    <label id="Blabel">Email</label> <br></br> 
    <input type="email" id="Binput" placeholder={"Email"} value={email} onChange={event=> setEmail(event.target.value)} /><br></br>
    <label id="Blabel">Heading</label>  <br></br>
    <input type="heading" id="Binput" placeholder={"Blog Heading"} value={heading}  onChange={event=> setHeading(event.target.value)} /><br></br>
    <br></br>
    <label id="Blabel">Category</label>  <br></br>
    <select id="selectItems" name="category" placeholder="select category" onChange={event => setCategory(event.target.value)}>
    <option id="bOption" value="Phisic">Phisic</option>
    <option id="bOption" value="Health">Health</option>
    <option id="bOption" value="Diet">Diet</option>
    <option id="bOption" value="Exercises">Exercise</option>
  </select><br></br>
    <label id="Blabel">Image</label><br></br>
    {<img className="imgSize" alt="pic" src={'http://localhost:8070/'+image} width="20%" height="15%"></img>}
    <input type="file"  name="image" className="imgStyle2"
    onChange={ev => setFiles(ev.target.files)}/><br></br>
    
    <Editor theme="snow" 
    onChange={setContent}  value={content}/>
    
    <button className="Bupdate" type="submit">update</button>
    <button className="Bcancel"  onClick={()=>{history("/myBlogs")}}>Cancel</button>
     </form>
     </body>
        </>
    )
    
}
export default Update;