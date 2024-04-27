import React from 'react'

const Bloglist = ({blogs}:any) => {
  return (
    <>
         {
                (blogs.length>=1)?(
                    <div>
                        
                        {
                            blogs.map((blog:any)=>{
                                return(
                                    <div key={blog.id}>
                                        <h2>{blog.title}</h2>
                                        <p>{blog.body}</p>
                                        <h5>{blog.author}</h5>
                                    </div>
                                )
                            })
                        }
                    </div>
                ):(
                    <div style={{width:'100%',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>

                        <p>Empty Blog</p>
                    </div>
                )
            }
    </>
  )
}

export default Bloglist