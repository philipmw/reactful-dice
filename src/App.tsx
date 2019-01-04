import * as React from "react";

import { Dice } from "./Dice";
import { Die } from "./Die";
import { GameStatus } from "./GameStatus";
import { IAppState } from "./IAppState";

export class App extends React.PureComponent<{}, IAppState> {
  private static readonly DIE_VALUE_WAIT_MS: number = 2000;
  private static readonly SNAKE_EYES_DICE_QTY_MIN: number = 4;
  private static readonly SNAKE_EYES_DICE_QTY_VAR: number = 3;
  private static readonly SNAKE_EYES_DICE_ROLLS_VAR: number = 4;

  private static mean(...vs: number[]): number {
    return vs.reduce((a: number, v: number) => a + v) / vs.length;
  }

  public constructor(props: {}) {
    super(props);
    const snakeEyesTargetDice: number =
        App.SNAKE_EYES_DICE_QTY_MIN + Math.floor(Math.random() * App.SNAKE_EYES_DICE_QTY_VAR);
    const snakeEyesTargetRolls: number =
        // We want probability of success to be a bit less than 50%.
        // Calculate it like: 3/6 + 3/6 + 3/6 + ...however many dice, then subtract a bit (VAR)
        Math.floor(App.mean(Die.MIN_VALUE, Die.MAX_VALUE)) * snakeEyesTargetDice
        - Math.floor(Math.random() * App.SNAKE_EYES_DICE_ROLLS_VAR);
    this.state = {
      dice: [],
      snakeEyesTargetDice,
      snakeEyesTargetRolls,
      timesRolled: 0,
    };
  }

  public render(): JSX.Element {
    return <div id="app">
      <button id="add" onClick={this.onAddDie}>add die</button>
      <Dice dice={this.state.dice}
            onDelete={this.onDeleteDie}
            onReroll={this.onRerollDie}/>
      <GameStatus snakeEyesTargetDice={this.state.snakeEyesTargetDice}
                  snakeEyesTargetRolls={this.state.snakeEyesTargetRolls}
                  dice={this.state.dice}
                  timesRolled={this.state.timesRolled}/>
    </div>;
  }

  private readonly onAddDie = (): void => {
    let newIdx: number;
    this.setState(
        (prevState: IAppState) => {
          newIdx = prevState.dice.length;

          return {
            dice: prevState.dice.concat(undefined),
          };
        },
        () => { this.rollAndSetCallback(newIdx); });
  }

  private readonly onDeleteDie = (i: number): void => {
    this.setState((prevState: IAppState) => {
      prevState.dice.splice(i, 1);

      return {
        dice: [...prevState.dice],
      };
    });
  }

  private readonly onRerollDie = (i: number): void => {
    this.setState(
        (prevState: IAppState) => {
          const newDice: number[] = [...prevState.dice];
          newDice[i] = undefined;

          return {
            dice: newDice,
          };
        },
        () => { this.rollAndSetCallback(i); });
  }

  private rollAndSetCallback(i: number): void {
    window.setTimeout(
        () => {
          this.setState((prevState: IAppState) => {
            const newDice: number[] = [...prevState.dice];
            newDice[i] = Die.getRandomValue();

            return {
              dice: newDice,
              timesRolled: prevState.timesRolled + 1,
            };
          });
        },
        App.DIE_VALUE_WAIT_MS);
  }
}
