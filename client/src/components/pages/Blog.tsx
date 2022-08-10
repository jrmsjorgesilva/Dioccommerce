import React, { useEffect, useState } from "react";
import mockPosts from "../../mocks/mockPosts";
import PostsType from "../../@types/PostsType";
import axios from "axios";

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
        <ul className="card">
          {postsList?.map((post) => (
            <li className="card__body" key={post._id}>
              <p className="text--title">{post.title}</p>
              <p className="text--paragraph">{post.body}</p>
              <p className="text--paragraph">{post.author}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Blog;
