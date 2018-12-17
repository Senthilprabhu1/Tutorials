import React, { Component } from 'react';
import Form from './Components/Form';
import {Link, Router, Switch} from 'reat-router-dom';
import Login from './Components/Login';
//import Login from './Component/Login';
//import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Form  />
      </div>
    );
  }
}

export default App;
