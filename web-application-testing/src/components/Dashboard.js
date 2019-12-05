import React from "react";

/*
### Dashboard

- provide a button that the person in charge can press 
  every time there is a `strike`, `ball`, `foul` or `hit`.
- there is **NO** need to specify the 
  type of hit (single, double, etc).
- changes recorded on this component should 
  update the information shown by the `Display` component.
*/
export function Dashboard(props) {
  const { dispatchRecord } = props;
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <button onClick={_ => dispatchRecord("strike")}>strike</button>
        <button onClick={_ => dispatchRecord("ball")}>ball</button>
        <button onClick={_ => dispatchRecord("foul")}>foul</button>
        <button onClick={_ => dispatchRecord("hit")}>hit</button>
      </div>
    </div>
  );
}
