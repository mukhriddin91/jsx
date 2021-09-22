//import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

//create a react component
const App = () => {

  const buttonText = { text: 'Click Me!' };
  const labelText = 'Enter your name:';

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text"/>
      <button style={{backgroundColor: 'blue', color: 'white'}}>
        {buttonText.text}
      </button>
    </div>
  );
};

//take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
