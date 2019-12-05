import React from "react";
import "./App.css";

import { useRecord } from "./hooks";
import { Dashboard, Display } from "./components";

function App() {
  const [record, dispatchRecord] = useRecord();
  return (
    <div className="App">
      <Display record={record} />
      <Dashboard dispatchRecord={dispatchRecord} />
    </div>
  );
}

export default App;
