import React from "react";

const Child = React.memo(() => {
    console.log("Child Component");

  return <div>This is the Child Component</div>;
});
export default Child;
