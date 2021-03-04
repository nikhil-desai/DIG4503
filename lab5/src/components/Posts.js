import React, { useEffect, useState } from "react";
import axios from "axios";

import Post from "../components/Post";
import GoToButton from "../components/GoToButton";

const Posts = () => {
  // setting the state vars
  const [posts, setPosts] = useState();
  // getting the api data w/ axios
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      const resPosts = res.data;
      setPosts(resPosts);
    });
  }, []);
  // presenting the data w/ jsx
  return (
    <div>
      <h1>Posts</h1>
      <div style={{ display: "flex", alignItems: "baseline" }}>
        {posts && posts.map((post, id) => <Post {...post} key={id} />)}
      </div>
      <GoToButton />
    </div>
  );
};

export default Posts;
