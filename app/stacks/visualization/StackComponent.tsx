"use client";
import React, { Component, FormEvent, ChangeEvent } from "react";
import Stack from "../utils/Stack"; 


interface StackComponentState {
  stack: Stack<string>;  // Assuming stack holds string items
  maxStackSize: number;
  inputStackSize: number;
}

class StackComponent extends Component<{}, StackComponentState> {
  private inputRef: React.RefObject<HTMLInputElement>;

  constructor(props: {}) {
    super(props);
    this.state = {
      stack: new Stack<string>(),
      maxStackSize: 5,  // Default maximum stack size
      inputStackSize: 5, // Default input for stack size
    };

    this.inputRef = React.createRef();
  }

  handleStackSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newSize = parseInt(event.target.value, 10);
    if (!isNaN(newSize) && newSize >= 0) {
      this.setState({ inputStackSize: newSize, maxStackSize: newSize });
    }
  };

  handlePush = (event: FormEvent) => {
    event.preventDefault();
    const { stack, maxStackSize } = this.state;
    const value = this.inputRef.current?.value;

    if (maxStackSize === 0) {
      alert("Underflow Alert: Stack size is set to zero! You cannot push items.");
      return;
    }

    if (value) {
      if (stack.items.length >= maxStackSize) {
        alert("Overflow Alert: Stack is full! You cannot push more items.");
      } else {
        stack.push(value);
        this.setState({ stack });
        if (this.inputRef.current) {
          this.inputRef.current.value = "";
        }
      }
    } else {
      alert("Please enter a value to push onto the stack.");
    }
  };

  handlePop = (event: FormEvent) => {
    event.preventDefault();
    const { stack } = this.state;

    if (stack.items.length === 0) {
      alert("Underflow Alert: Stack is empty! You cannot pop any items.");
    } else {
      stack.pop();
      this.setState({ stack });
    }
  };

  render() {
    return (
      <div className="stack-container">
        <style>{`
          .stack-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 50px;
            font-family: Arial, sans-serif;
          }
          .stack-title {
            color: rgb(97, 97, 247);
            margin: 20px;
          }
          .stack-items {
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
            margin: 20px;
          }
          .stack-item {
            width: 30px;
            height: 30px;
            background: #a3fc9d;
            border-radius: 5px;
            margin: 10px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .stack-buttons {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin: 20px;
          }
          .stack-button {
            margin: 0 10px;
            background: #f8e1ee;
            width: 200px;
            border-radius: 5px;
            padding: 10px;
            font-size: 18px;
            color: rgb(0, 0, 0);
            cursor: pointer;
          }
          .push-button {
            background: #f8e1ee;
          }
          .pop-button {
            background: #bbfdd8;
          }
          .stack-stats {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 20%;
            border: #000 solid 1px;
            border-radius: 5px;
            box-shadow: 5px 5px 0px #000;
            padding: 10px;
          }
          .stack-input {
            width: 100%;
            height: 30px;
            border-radius: 5px;
            border: 1px solid #000;
            padding: 5px;
            margin: 10px 0;
          }
          .stack-size-input {
            width: 100px;
            margin: 10px;
            padding: 5px;
            border-radius: 5px;
            border: 1px solid #000;
          }
        `}</style>

        <h1 className="stack-title">Stack Data Structure</h1>

        <div>
          <label htmlFor="stackSizeInput">Enter Stack Size: </label>
          <input
            type="number"
            id="stackSizeInput"
            value={this.state.inputStackSize}
            onChange={this.handleStackSizeChange}
            min="0"
            className="stack-size-input"
          />
        </div>

        <form onSubmit={this.handlePush}>
          <input
            type="text"
            ref={this.inputRef}
            className="stack-input"
            placeholder="Enter a value to push to the stack"
          />
          <div className="stack-buttons">
            <button
              className="stack-button push-button"
              type="submit"
            >
              Push
            </button>
            <button
              className="stack-button pop-button"
              onClick={this.handlePop}
            >
              Pop
            </button>
          </div>
        </form>

        <h3>Stack Stats:</h3>
        <div className="stack-stats">
          <p className="stack-stat">
            Top Element: {this.state.stack.peek() || "N/A"}
          </p>
          <p className="stack-stat">
            Stack Size: {this.state.stack.items.length} / {this.state.maxStackSize}
          </p>
        </div>

        <div className="stack">
          <h3>Stack Items:</h3>
          <ul className="stack-items">
            {this.state.stack.items.map((item, index) => (
              <li className="stack-item" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default StackComponent;
