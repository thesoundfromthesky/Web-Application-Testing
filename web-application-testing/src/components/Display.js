import React from "react";

export function Display(props) {
  const { balls, strikes } = props.record;
  return (
    <div>
      <h1>Record Board</h1>
      <div>balls:{balls}</div>
      <div>strikes:{strikes}</div>
    </div>
  );
}
