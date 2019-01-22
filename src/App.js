import React, { Component } from 'react';
import './App.css';
import Skills from './Components/Skills';
import Styled from 'styled-components';
import Header from './Components/Header';


class App extends Component {
  render() {
    return (
        <div>
          <Header />
          <Skills />
        </div>
    );
  }
}

export default App;
