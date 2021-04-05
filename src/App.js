import React, { Component } from 'react';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';
import './App.css';

class App extends Component {

  state = {
    flowers: [
      {flowerName: 'Lily'},
      {flowerName: 'Rose'},
      {flowerName: 'Lilac'}
    ]
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>Favorite Flowers</h1>
        <UserInput />
        <UserOutput />
      </header>
    </div>
  );
}
}
export default App;
