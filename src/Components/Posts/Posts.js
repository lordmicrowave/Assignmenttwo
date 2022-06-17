import React from "react";
import "./Posts.scss";
import { Post, Postone, Posttwo, Postthree, Postfour, Postfive } from "../";



const Posts = () => {
  return (
    <div className="app__posts">
      <Post />
      <Postone />
      <Posttwo />
      <Postfour />
      <Postthree />
      <Postfive />
    </div>
  );
};

export default Posts;
