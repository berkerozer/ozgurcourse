import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("berker");
  return (
    <div className="flex flex-col">
      <h2>Form</h2>
      <p>Value : {name}</p>
      <div className="flex flex-col pt-4">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setName(event.target.name.value);
          }}
        >
          <label htmlFor="name">Name</label>
          <br />
          <input
            className=" border-2"
            type="text"
            id="name"
            name="name"
            onChange={(event) => {
              setName(event.target.value);
            }}
            value={name}
          />
          <button type="submit" className=" bg-slate-500">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
