import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../Services/usefetch";
import "../Home/Home.css";
const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: blog,
    ispending,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
  console.log(blog);
  const Blog: any = blog;
  const handledelete = (id: any) => {
    const deldata = async () => {
      const res = await fetch(`http://localhost:8000/blogs/${id}`, {
        method: "DELETE",
      });
    };
    deldata();
    navigate("/");
  };
  return (
    <div className="details">
        {/* ispending = boolean */}
      {ispending && <div>wait...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <>
          <h1>{Blog.title}</h1>
          <p>{Blog.body}</p>
          <button
            onClick={() => {
              handledelete(Blog.id);
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              navigate('/')
            }}
          >
            Back
          </button>
        </>
      )}
    </div>
  );
};

export default Details;
