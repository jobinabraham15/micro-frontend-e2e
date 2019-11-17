import * as React from "react";
import myImage from "./logo.svg";

export default class Main extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={myImage} className="App-logo" alt="logo" />
          <p>
            This the order microfrontend
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
