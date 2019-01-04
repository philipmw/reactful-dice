import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import { Die } from "./Die";

configure({ adapter: new Adapter() });

describe("Die", () => {
  it("renders the correct character for value 4", () => {
    const die = shallow(
        <Die value={4}/>);
    expect(die.contains("⚃")).toBeTruthy();
  });

  it("renders the correct character for undefined", () => {
    const die = shallow(
        <Die value={undefined}/>);
    expect(die.contains("☕︎")).toBeTruthy();
  });

  it("generates random values between 1 and 6", () => {
    const vs = (Array(1000))
        .fill(0) // so map can work
        .map(() => Die.getRandomValue());
    // no values out of range
    expect(vs.every((v: number) => v >= 1 && v <= 6)).toBeTruthy();
    // all six expected values are present
    [1, 2, 3, 4, 5, 6].forEach((n) => {
      expect(vs.find((v: number) => v === n)).toBeTruthy();
    });
  });
});
