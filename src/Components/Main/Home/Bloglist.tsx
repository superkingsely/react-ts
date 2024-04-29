import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../Home/Home.css";
const Bloglist = ({ blogs }: any) => {
  const navigate = useNavigate();
  const [bblogs, setBblogs] = useState(blogs);
  // const {id}=useParams()
  // use params can only work on the detail page
  console.log("bblogs=", bblogs);
  const handledelete = (id: any) => {
    
    const newblog = bblogs.filter((blog: any) => {
      return blog.id !== id;
    });
    console.log("del", id, "blog=", bblogs, "nw blog= ", newblog);
    setBblogs(newblog);

    const deldata = async () => {
        const res = await fetch(`http://localhost:8000/blogs/${id}`, {
          method: "DELETE",
        });
      };
      deldata();

  };
  return (
    <>
      {bblogs.length >= 1 ? (
        <div>
          {bblogs.map((blog: any) => {
            return (
              <div key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                  <h2>{blog.title}</h2>
                  <p>{blog.body}</p>
                  <h5>{blog.author}</h5>
                </Link>
                <button
                  onClick={() => {
                    handledelete(blog.id);
                  }}
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>Empty Blog</p>
        </div>
      )}
    </>
  );
};

export default Bloglist;
