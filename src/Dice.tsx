import * as React from "react";

import { Die } from "./Die";

interface IProps {
  dice: number[];
  onDelete(i: number): void;
  onReroll(i: number): void;
}

export class Dice extends React.PureComponent<IProps> {
  public render(): JSX.Element {
    return <div className="dice">
      {
        this.props.dice.map((v: number, i: number) =>
            <div className={`dashboard ${(v === undefined ? "loading" : "loaded")}`} key={i}>
              <Die value={v}/>
              <div className="controls">
                <span className="reroll"
                      onClick={(): void => { this.props.onReroll(i); }}
                      title="reroll die">♻︎</span>
                <span className="delete"
                      onClick={(): void => { this.props.onDelete(i); }}
                      title="delete die">⊗</span>
              </div>
            </div>)
      }
    </div>;
  }
}
