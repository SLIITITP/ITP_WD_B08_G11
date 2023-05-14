
import { FaChevronLeft } from "react-icons/fa"
import React from "react"
import axios from "axios"
import { useNavigate  } from "react-router-dom"
import { useEffect ,useState} from "react"


export const MyBlogs =()=>{
    let history = useNavigate()
    const [blog,setBlogs] = useState([])
   
const[redirect,setRedirect] = useState(false)

    useEffect(()=>{
  
        loadBlogs()
         
      },[])
      const loadBlogs = async()=>{
        const result = await axios.get("http://localhost:8070/blog")
        setBlogs(result.data)
    }


const handleDelete = async (Id,Uname)=>{
   try{ 
        if(window.confirm('Are you sure you want to delete  '+Uname+ "?")){

            const response = await axios.delete('http://localhost:8070/blog/'+Id,{
                   
                 })
           console.log(response)
        }
        if(redirect.ok){
            setRedirect(true)
            return history.push("/tBView")
        }
        
          }
    catch(err){
       console.log(err)   
       }
    
}

return(<>
<div>
<button className="back" onClick={()=>{history.push("/tBView")}}><FaChevronLeft></FaChevronLeft></button></div>
<h1 id="h1">My Blogs</h1>
<br></br>
 <div id="vCards">
{blog.map((B,k)=>{
return(
        <div key={k} id="card" >
            <div key={k}className="container" id="column" > 
                <img id="imgCard" src={'http://localhost:8070/'+B.image} alt="P 1" width="100%"></img>
                <p >Heading:{B.heading} </p>
                <p >Username: {B.username}</p>
                <p >Email: {B.email}</p>
                <p >Category: {B.category}</p>
                
                <br></br>
                <p>Date & Time: {B.createdAt}</p>

                <button id="update" onClick={()=>{history.push("/bUpdate/"+B._id)}}>Update</button>
                <button id="delete" onClick={()=>handleDelete(B._id,B.username)}>Delete</button>

            </div>
        </div>
)       
})}
</div>
</>
)
}
export default MyBlogs;