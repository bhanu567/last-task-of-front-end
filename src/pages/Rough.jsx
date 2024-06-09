import React, { useRef } from "react";

const Rough = () => {
  const emailRef = useRef();
  return (
    <div>
      <input type="email" ref={emailRef}></input>{" "}
      <button
        onClick={() => {
          console.log(emailRef.current.value);
        }}
      >
        click
      </button>
    </div>
  );
};

export default Rough;
