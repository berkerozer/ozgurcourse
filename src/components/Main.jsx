import React from "react";

const Main = (props) => {
  return (
    <>
      <div className="p-4">{props.children}</div>
    </>
  );
};

export default Main;
