import React from "react";
import PostsType from "../../@types/PostsType";

type BlogPostsType = {
  postsList: PostsType[];
};

const BlogPosts: React.FC<BlogPostsType> = ({ postsList }) => {
  return (
    <ul>
      {postsList?.map((post) => (
        <li className="card__body" key={post._id}>
          <p className="text--title">{post.title}</p>
          <p className="text--paragraph">{post.body}</p>
          <p className="text--paragraph">{post.author}</p>
        </li>
      ))}
    </ul>
  );
};

export default BlogPosts;
