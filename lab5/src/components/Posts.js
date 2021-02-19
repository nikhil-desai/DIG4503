import React, { useEffect, useState } from "react";
import axios from "axios";

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
      {posts &&
        posts.map((post) => {
          const { id, title, body } = post;
          return (
            <div key={id}>
              <div style={{backgroundColor:'#E1E879', margin:'4px 20px'}}>
                <h2>{title}</h2>
              </div>
              <div style={{textAlign: 'left', padding:'4px 20px'}}>
                <p>{body}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Posts;
