import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list-group mb-4">
      {posts.map((post) => (
        <li key={post.id} className="list-group-item text-center">
          <img src={post.image_url} alt={post.name} width="50" />
          <div>
            <p class="font-weight-bold">{post.name}</p>
          </div>
          <div>{post.description}</div>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
