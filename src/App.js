import React, { Component } from 'react';
import Validation from './validation/Validation';
import CharComponent from './Char/CharComponent';
import './App.css';

class App extends Component {

  state = {
    content: ''
  }

  handleOnChange = (e) => {
   this.setState({[e.target.name]: e.target.value})
  }

  deleteCharacterHandler = (index) => {
    const text = this.state.content.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({content: updatedText})
  }


  render(){

    const charList = this.state.content.split('').map((char, index) => {
      return <CharComponent 
      character={char} 
      key={index}
      clicked={()=> this.deleteCharacterHandler(index)}/>
    })
  return (
      <div style ={{textAlign: "center", height: '100vh'}}>
        <form onSubmit = {this.handleOnSubmit} style={{marginTop: '50vh'}}>
          <input 
          type = 'text' 
          name = 'content' 
          value = {this.state.content} 
          onChange = {this.handleOnChange}
          />
          <p>{this.state.content}</p>
          <Validation inputLength={this.state.content.length}/>
          {charList}
      </form>
    </div>
  );
}
}
export default App;
