import React, { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      const resPosts = res.data;
      setPosts(resPosts);
    });
  }, []);
  return (
    <div>
      {posts &&
        posts.map((post) => {
          const { id, title, body } = post;
          return (
            <div key={id}>
              <div>
                <h1>{title}</h1>
              </div>
              <div>
                <p>{body}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Posts;
