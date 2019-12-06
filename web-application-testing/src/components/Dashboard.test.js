import React from "react";
import { act } from "react-test-renderer";
import { render } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import userEvent from "@testing-library/user-event";
import { Dashboard } from "./Dashboard";
import { useRecord } from "../hooks";

describe("<Dashboard/>", () => {
  let record, dispatchRecord;
  let getByText;
  let hooks;
  beforeEach(() => {
    hooks = renderHook(() => useRecord());
    record = hooks.result.current[0];
    dispatchRecord = hooks.result.current[1];
    const dashboard = render(<Dashboard dispatchRecord={dispatchRecord} />);
    getByText = dashboard.getByText;
  });
  it("has Dashboard", () => {
    const dashBoard = getByText(/dashboard/i);
    expect(dashBoard).toBeInTheDocument();
  });

  /*
### Count Rules

- balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
- balls and strikes reset to 0 when a `hit` is recorded.
- a `foul` increases strikes up to 2. With no strikes, a foul makes 
  it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes 
  a foul has no effect, count stays at 2 strikes.
*/
  it("has strike", () => {
    const strike = getByText(/strike/i);
    expect(strike).toBeInTheDocument();
  });

  it("has ball", () => {
    const ball = getByText(/ball/i);
    expect(ball).toBeInTheDocument();
  });

  it("has foul", () => {
    const foul = getByText(/foul/i);
    expect(foul).toBeInTheDocument();
  });

  it("has hit", () => {
    const hit = getByText(/hit/i);
    expect(hit).toBeInTheDocument();
  });
});
