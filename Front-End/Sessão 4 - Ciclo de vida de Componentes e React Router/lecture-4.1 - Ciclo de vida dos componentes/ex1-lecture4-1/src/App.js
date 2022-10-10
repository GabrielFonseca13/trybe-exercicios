import React from "react";
import PersonDetails from "./components/PersonDetails";

class App extends React.Component {
  
  render() {
    return(
      <div>
        <h1>PERSONS</h1>
        <PersonDetails />
      </div>
    );
  }
}

export default App;
