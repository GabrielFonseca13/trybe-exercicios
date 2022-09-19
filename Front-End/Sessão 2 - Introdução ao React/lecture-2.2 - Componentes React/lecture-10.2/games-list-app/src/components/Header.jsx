import React from 'react';
import './Header.css'

class Header extends React.Component{
  render(){
    // console.log(this.props);
    return <header>
      <h1>{this.props.titulo} {this.props.icone}</h1>
    </header>
  }
}
export default Header;