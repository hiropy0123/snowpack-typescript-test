import React from 'react';
import { render } from 'react-dom';
import { Hello } from "./components/Hello";

const App: React.FC = () => {
  return (
    <>
      <h1>Learn snowpack.</h1>
      <h2>this is React Component</h2>
      <Hello />
    </>
  );
};

render(<App />, document.getElementById("root"));