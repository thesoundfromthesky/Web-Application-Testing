import React from "react";
import { render } from "@testing-library/react";
import { Display } from "./Display";

describe("Display component", () => {
  const record = { balls: 0, strikes: 0 };
  let getByText;

  beforeEach(() => {
    getByText = render(<Display record={record} />).getByText;
  });
  
  it("haves Record Board", () => {
    const recordBoard = getByText(/Record Board/i);
    expect(recordBoard).toBeInTheDocument();
  });

  it("properly counts ball", () => {
    const { balls } = record;
    const ballCounter = getByText(/balls:/i);
    expect(ballCounter).toHaveTextContent(`balls:${balls}`);
  });

  it("properly counts strike", () => {
    const { strikes } = record;
    const strikeCounter = getByText(/strikes:/i);
    expect(strikeCounter).toHaveTextContent(`strikes:${strikes}`);
  });
});
