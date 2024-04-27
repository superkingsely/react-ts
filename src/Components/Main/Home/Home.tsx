import React from 'react'
import Bloglist from './Bloglist'
import useFetch from '../../../Services/usefetch'

const Home = () => {
    const {data:blogs,ispending,error}=useFetch('http://localhost:8000/blogs')
  return (
    <section id='home'>
        <div className="home-content">
            {ispending && <div>Loading....</div>}
            {blogs && <Bloglist blogs={blogs}/>}
            {error && <div>{error}</div>}
        </div>
    </section>
  )
}

export default Home