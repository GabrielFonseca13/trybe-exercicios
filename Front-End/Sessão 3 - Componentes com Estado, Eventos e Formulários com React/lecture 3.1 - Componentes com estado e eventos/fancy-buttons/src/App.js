import React from "react";



class App extends React.Component{

  state = {
    clicks1: 0,
    clicks2: 0,
    clicks3: 0,
  };

  // const { clicks1, clicks2, clicks3 } = this.state

  text1 = () => {
   const { clicks1 } = this.state; 
   this.setState((prevState) => ({
      clicks1: prevState.clicks1 + 1,
    }), () => {
      console.log(`Botão 1: ${this.getBtnColor(clicks1)}`);
    });
  };
  
  text2 = () => {
    const { clicks2 } = this.state;
    this.setState((prevState) => ({
     clicks2: prevState.clicks2 + 1
    }), () => {
      console.log(`Botão 2: ${this.getBtnColor(clicks2)}`)
    });
   };
  
   text3 = () => {
    const { clicks3 } = this.state;
    this.setState((prevState) => ({
      clicks3: prevState.clicks3 + 1
    }), () => {
      console.log(`Botão 3: ${this.getBtnColor(clicks3)}`)
    });
   };

    getBtnColor = (num) => num % 2 === 0 ? 'green' : 'red';
    
    

  render() {
    
    const { clicks1, clicks2, clicks3 } = this.state
    return (
      <div>
        <div>
          <button type='button' style={ {backgroundColor: this.getBtnColor(clicks1)} } onClick={this.text1}>{clicks1}</button>
        </div>
        <div>
          <button type='button' style={ {backgroundColor: this.getBtnColor(clicks2)} } onClick={this.text2}>{clicks2}</button>
        </div>
        <div>
          <button type='button' style={ {backgroundColor: this.getBtnColor(clicks3)} } onClick={this.text3}>{clicks3}</button>
        </div>
      </div>
    )  
  }
}

export default App;