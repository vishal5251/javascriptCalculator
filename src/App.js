import React, { Component } from "react";
import "./App.css";

const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const ops = ["/", "*", "+", "-"];
const ids = {
  7: "seven",
  8: "eight",
  9: "nine",
  4: "four",
  5: "five",
  6: "six",
  1: "one",
  2: "two",
  3: "three",
  0: "zero",
  "/": "divide",
  "*": "multiply",
  "+": "add",
  "-": "subtract",
};
class App extends Component {
  state = {
    lastPressed: undefined,
    calc: "0",
    operation: undefined,
  };

  handleClick = (e) => {
    const { calc, lastPressed } = this.state;
    const { innerText } = e.target;


    switch (innerText) {
      case "AC": {
        this.setState({
          calc: "0",
        });
        break;
      }
      case "=": {
        const evaluated = eval(calc);
        this.setState({
          calc: evaluated
        });
        break;
      }
      case ".": {
        const splitted = calc.split(/[\+\-\*\/]/);
        const last = splitted.slice(-1)[0];
        if (!last.includes(".")) {
          this.setState({
            calc: calc + ".",
          });
        }
        break;
      }
      default: {
        let e = undefined;
        if (ops.includes(innerText)) {
          if (ops.includes(lastPressed) && innerText !== "-") {
            const lastNumberIdx = calc.split('').reverse()
            .findIndex(char => char !== ' ' && nums.includes(+char));
            e = calc.slice(0, calc.length - lastNumberIdx) + ` ${innerText} `;
          } else {
            e = `${calc} ${innerText} `;
          }
        } else {
          e = calc === "0" ? innerText : calc + innerText;
        }
        this.setState({
          calc: e,

        });
      }
    }

    this.setState({
      lastPressed: innerText
    })
  };

  render() {
    const { calc, currentNumber } = this.state;

    return (
      <div className="calculator">
        <div className="display" id="display">
          {calc}
        </div>
        <div className="nums-container">
          <button
            className="ac dark-grey big-h"
            id="clear"
            onClick={this.handleClick}
          >
            AC
          </button>
          {nums.map((num) => (
            <button
              className={`light-grey ${num === 0 && `big-h`}`}
              key={num}
              onClick={this.handleClick}
              id={ids[num]}
            >
              {num}
            </button>
          ))}
          <button
            className="light-grey"
            id="decimal"
            onClick={this.handleClick}
          >
            .
          </button>
        </div>
        <div className="ops-container">
          {ops.map((op) => (
            <button
              className="orange"
              key={op}
              onClick={this.handleClick}
              id={ids[op]}
            >
              {op}
            </button>
          ))}

          <button
            className="orange"
            id="equals"
            onClick={this.handleClick}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default App;
