import React, { useEffect, useState } from 'react'


const useFetch = (url:any) => {
    const [data,setData]=useState(null)
    const [error,setError]=useState(null)
    const [ispending,setIspending]=useState(true)
    useEffect(()=>{
      console.log('run')
      // fetch('http://localhost:8000/blogs')
      // .then((res)=>res.json())
      // .then((data:any)=>{
      //   console.log(data)
      //   setBlogs(data)
      // })
     
      const data=async()=>{
        try{
          // throw new Error("bad...");
          
          console.log('asyn ran')
          let res=await fetch(url)
          let data= await res.json()
          setData(data)
          setIspending(false)
          setError(null)
        }catch(error:any){
          console.log('eroor=',error.message)
          setError(error.message)
          setIspending(false)
        }
      }
      setTimeout(()=>{
        data();
    
      },3000)
    },[url])

    return {data,ispending,error}
}

export default useFetch