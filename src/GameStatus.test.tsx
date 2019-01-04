import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import { GameStatus } from "./GameStatus";

configure({ adapter: new Adapter() });

describe("GameStatus", () => {
  it("renders expected string in early gameplay", () => {
    const gs = shallow(
        <GameStatus dice={[1, 2]}
                    snakeEyesTargetDice={4}
                    snakeEyesTargetRolls={12}
                    timesRolled={2}/>);

    expect(gs.text()).toEqual(
        "You rolled the dice 2 times so far. Can you get snake eyes with 4 dice in 12 rolls or fewer?");
  });

  it("renders expected string when you win", () => {
    const gs = shallow(
        <GameStatus dice={[1, 1, 1, 1]}
                    snakeEyesTargetDice={4}
                    snakeEyesTargetRolls={12}
                    timesRolled={12}/>);

    expect(gs.text()).toEqual(
        "SNAKE EYES in 12 rolls!  You win!");
  });

  it("renders expected string when you lose by not having snake-eyes", () => {
    const gs = shallow(
        <GameStatus dice={[1, 1, 2, 1]}
                    snakeEyesTargetDice={4}
                    snakeEyesTargetRolls={12}
                    timesRolled={13}/>);

    expect(gs.text()).toEqual(
        "No snake eyes for you. ☹︎");
  });

  it("renders expected string when you lose having snake-eyes too late", () => {
    const gs = shallow(
        <GameStatus dice={[1, 1, 1, 1]}
                    snakeEyesTargetDice={4}
                    snakeEyesTargetRolls={12}
                    timesRolled={13}/>);

    expect(gs.text()).toEqual(
        "Snake eyes, but in 13 rolls.  You lose. ☹︎");
  });
});
