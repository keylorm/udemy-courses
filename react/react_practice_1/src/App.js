import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users:[
      {username:'keylor'},
      {username:'rosa'},
      {username:'carlos'},
    ],
  };

  switchStateHandler = (newUser) =>{
    this.setState({
      users: [
        { username: newUser },
        { username: 'rosa' },
        { username: 'carlos' },
      ],
    });
  }

  changeStateHandler = (event) => {
    this.setState({
      users: [
        { username: 'keylor' },
        { username: event.target.value },
        { username: 'carlos' },
      ],
    });
  }

  render() {
    
    return (
      <div className="App">
        <UserOutput click={this.switchStateHandler.bind(this,'keylor_m')} username={this.state.users[0].username} p1="p1" p2="p2"/>
        <UserInput  change={this.changeStateHandler} username={this.state.users[1].username} />
        <UserOutput username={this.state.users[1].username} p1="p3" p2="p4"/>
        <UserOutput username={this.state.users[2].username} p1="p5" p2="p6"/>
      </div>
    );
  }
}

export default App;
