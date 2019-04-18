import React, { Component } from 'react';
import './App.css';
import Skills from './Components/Skills';
import Styled from 'styled-components';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import {Route} from 'react-router-dom';


const Container = Styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Sticky = Styled.div `
  position: fixed;
  left 0;
  margin: 30px;
  @media (max-width: 500px) {
    position: absolute;
  }
`;

const StickyBG = Styled.div `
display: hidden;
@media (max-width: 500px) {
  display: visible;
  background-color: white;
  opacity: 0.5;
  width: 100vw;
  height: 90px;
  margin: 10px;
  position: fixed;
}
`;

class App extends Component {
  constructor() {
    super();
    this.state= {
      toggleAbout: false
    }
  }

  toggleAbout = () => {
    this.setState({toggleAbout: !this.state.toggleAbout})
  }

  // componentDidMount() {
  //   var h1 = parseInt(this.refs.header.offsetHeight);
  //   window.addEventListener('scroll', this.handleScroll);
  // };
  
  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // };
  



  render() {
    return (
        <div>
         
            <Sticky>
              <Contact />
            </Sticky>
           
          <Header toggle={this.toggleAbout} toggleAbout={this.state.toggleAbout}/>
          <Container>
            <Skills />
            <Projects />
            {/* <Contact /> */}
          </Container>
          {/* <Route path="/resume" component={Resume} /> */}
        </div>
    );
  }
}



export default App;
