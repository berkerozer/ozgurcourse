import React from "react";

const classnames = `
  text-4xl
  font-extrabold
  font-mono
  bg-slate-200
  w-full
  h-100
  md:w-1/6
  hover:bg-slate-600
  cursor-pointer
  transition-all
`;

const Sidebar = () => {
  return <h4 className={classnames}>Sidebar</h4>;
};

export default Sidebar;
