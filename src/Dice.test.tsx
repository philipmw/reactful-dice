import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import { Dice } from "./Dice";
import { Die } from "./Die";

configure({ adapter: new Adapter() });

describe("Dice", () => {
  it("renders as many Die elements as there are dice", () => {
    const dice = shallow(
        <Dice dice={[1, 2, 3]} onDelete={() => {}} onReroll={() => {}}/>);

    expect(dice.find(Die)).toHaveLength(3);
  });

  it("renders loading/loaded class", () => {
    const dice = shallow(
        <Dice dice={[1, undefined]} onDelete={() => {}} onReroll={() => {}}/>);

    const dashboards = dice.find(".dice .dashboard");
    expect(dashboards.at(0).is(".loaded")).toBeTruthy();
    expect(dashboards.at(0).is(".loading")).toBeFalsy();

    expect(dashboards.at(1).is(".loading")).toBeTruthy();
    expect(dashboards.at(1).is(".loaded")).toBeFalsy();
  });
});
