import React, { useState } from "react";
import "./App.css";

import { Dashboard, Display } from "./components";
function App() {
  const [record, setRecord] = useState({ strikes: 0, balls: 0 });
  return (
    <div className="App">
      <Display record={record} />
      <Dashboard />
    </div>
  );
}

export default App;
