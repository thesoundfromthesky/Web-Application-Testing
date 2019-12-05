import React from "react";

/*
### Display

- display the count of `balls` and `strikes` for the at-bat.
- should be updated when the user records activity on the `Dashboard` component.

*/
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
