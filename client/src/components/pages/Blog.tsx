import React, { useEffect, useState } from "react";
import mockPosts from "../../mocks/mockPosts";
import PostsType from "../../@types/PostsType";
import axios from "axios";
import BlogPosts from "./BlogPosts";

const FETCH_URL = `http://localhost:8000/posts`;

const Blog = () => {
  const [postsList, setPostsList] = useState<PostsType[]>(() => mockPosts);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(FETCH_URL);
        console.log(data);
        setPostsList([...data]);
      } catch (error: any) {
        console.error(error.message);
      }
    };

    fetchPosts();
  }, [postsList]);

  return (
    <section className="blog">
      <div className="container">
        <BlogPosts postsList={postsList} />
      </div>
    </section>
  );
};

export default Blog;
