import React from "react";

const Post = ({ title, body }) => {
  return (
    <div
      style={{
        backgroundColor: "#398424",
        margin: "10%",
        borderRadius: "25px",
      }}
    >
      <div style={{ backgroundColor: "#79A9E8", padding: "1%" }}>
        <h2>{title}</h2>
      </div>
      <div style={{ textAlign: "left", padding: "20px 100px" }}>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Post;
