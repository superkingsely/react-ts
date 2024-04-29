import React, { useState } from 'react'
import '../Create/Additem.css'
import { Navigate, useNavigate } from 'react-router-dom'
const Additem = () => {
  const navigate=useNavigate()

  const [title,setTitle]=useState('')
  const [body,setBody]=useState('')
  const [author,setAuthor]=useState('')

  const handlesubmit=(e:any)=>{
    
   const prev= e.preventDefault()
    console.log({title,body,author})
    const blog={title,body,author}

    const fetchData=async()=>{
     const res=await fetch('http://localhost:8000/blogs',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(blog)
     })
     const data=await res.json()
     const comment=await console.log('blog added oh')
    }
    fetchData();
    navigate('/')
    
  }
  return (
    <div className="react-form">

        <form onSubmit={(e)=>handlesubmit(e)}>
          <h1>Add a New Blog</h1>
          <label htmlFor="">Blog title:</label>
          <input type="text"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
           />
          <label htmlFor="">Blog body:</label>
          <textarea 
          value={body} 
          onChange={(e)=>setBody(e.target.value)}
          />
          <label htmlFor="">Blog author</label>
          <select 
          value={author}
          onChange={(e)=>setAuthor(e.target.value)}
          >
            <option value="luwigi">luwigi</option>
            <option value="cj">cj</option>
          </select>
          <br />
          <button>Add Blog</button>
        </form>
    </div>
  )
}

export default Additem