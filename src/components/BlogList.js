import React from "react";
import Loader from "./Loader";

const BlogList = props => {
  return (
    <>
      <h1>Posts</h1>
      {!props.data ? (
        <p>No Data Found</p>
      ) : (
        <ul>
          {props.data.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Loader(BlogList, () => {
  return fetch("https://jsonplaceholder.typicode.com/posts");
});
