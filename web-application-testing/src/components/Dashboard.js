import React from "react";

/*
### Dashboard

- provide a button that the person in charge can press 
  every time there is a `strike`, `ball`, `foul` or `hit`.
- there is **NO** need to specify the 
  type of hit (single, double, etc).
- changes recorded on this component should 
  update the information shown by the `Display` component.

Feel free add other components and organize and name your 
components any way you want to satisfy the requirements. 
**Make it up and make it happen developer!**.
*/
export function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <button>strike</button>
        <button>ball</button>
        <button>foul</button>
        <button>hit</button>
      </div>
    </div>
  );
}
