import React from "react";

const GoToButton = () => {
  return (
    <div
      style={{
        position: "fixed",
        left: "40%",
        bottom: "10%",
      }}
    >
      <a href="http://www.example.com" target="_blank">
        <button
          style={{
            borderRadius: "25px",
            height: "50px",
            width: "100px",
            backgroundColor: "#B879E8",
            color: "white"
          }}
        >
          Go to Post
        </button>
      </a>
    </div>
  );
};

export default GoToButton;
