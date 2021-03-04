import React from "react";
import Skeleton from "react-loading-skeleton";

const Post = ({ title, body }) => {
  return (
    <div
      style={{
        backgroundColor: "#398424",
        margin: "10%",
        borderRadius: "25px",
        width: "100%",
      }}
    >
      <div style={{ backgroundColor: "#79A9E8", padding: "1%" }}>
        <h2>{title || <Skeleton />}</h2>
      </div>
      <div style={{ textAlign: "left", padding: "20px 100px" }}>
        <p>{body || <Skeleton count={10} />}</p>
      </div>
    </div>
  );
};

export default Post;
