import React from "react";

const BlogCover = ({ title, content, view }) => {
  //const { title, content } = props;

  return (
    <div className="flex flex-col h-64 bg-slate-400 w-48">
      <h3>{title}</h3>
      <p>{content}</p>
      <p>{view}</p>
    </div>
  );
};

export default BlogCover;
