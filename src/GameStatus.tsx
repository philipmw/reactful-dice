import * as React from "react";

interface IProps {
  dice: number[];
  snakeEyesTargetDice: number;
  snakeEyesTargetRolls: number;
  timesRolled: number;
}

export class GameStatus extends React.PureComponent<IProps> {
  public render(): JSX.Element {
    if (this.props.dice.length === this.props.snakeEyesTargetDice
      && this.props.dice.every((v: number) => v === 1)) {
      // We are in a snake-eyes situation, folks.
      if (this.props.timesRolled <= this.props.snakeEyesTargetRolls) {
        return <p>SNAKE EYES in { this.props.timesRolled } rolls!  You win!</p>;
      } else {
        return <p>Snake eyes, but in { this.props.timesRolled } rolls.  You lose. ☹︎</p>;
      }
    } else if (this.props.timesRolled >= this.props.snakeEyesTargetRolls) {
      return <p>No snake eyes for you. ☹︎</p>;
    } else {
      return <p>You rolled the dice { this.props.timesRolled } times so far.
        Can you get snake eyes with { this.props.snakeEyesTargetDice } dice
        in { this.props.snakeEyesTargetRolls } rolls or fewer?</p>;
    }
  }
}
