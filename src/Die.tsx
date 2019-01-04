import * as React from "react";

interface IProps {
  value?: number;
}

export class Die extends React.PureComponent<IProps> {
  public static readonly MAX_VALUE: number = 6;
  public static readonly MIN_VALUE: number = 1;

  public static getRandomValue(): number {
    return Math.floor(Math.random() * Die.MAX_VALUE) + Die.MIN_VALUE;
  }

  private static renderDieValue(value?: number): string {
    if (value === undefined) {
      return "☕︎";
    } else if (value < Die.MIN_VALUE || value > Die.MAX_VALUE) {
      return "?";
    } else {
      return String.fromCodePoint("⚀".codePointAt(0) + (value - 1));
    }
  }

  public render(): JSX.Element {
    return <span className="die">
      { Die.renderDieValue(this.props.value) }
    </span>;
  }
}
