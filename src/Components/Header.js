import React from 'react';
import Styled from 'styled-components';
import { fadeIn } from './../Styles/KeyFrames';
import About from './About';

const Head = Styled.header `
background-image: radial-gradient(circle, #708090, #282c34);
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;

`;

const HeaderContainer = Styled.div `
display: flex;
justify-content: space-around;

width: 70%;
height: 400px;
border: 1px solid white;
background: #282c34;
overflow-y: auto;
padding: 20px;


`;

const HeaderText = Styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
word-wrap: break-word;
font-size: calc(10px + 2vmin);
color: white;
font-family: 'Montserrat', sans-serif;
animation: ${fadeIn} 3s ease-in;
`;

const Name = Styled.h1 `
@media (max-width: 500px) {
  font-size: 28px;
}
`;


const images = [
  "/images/selfie.jpg"
]

const HeaderDisplay = Styled.div `
display: flex;
  &:hover {
    display: none
  }
`;

const AboutDisplay = Styled.div `
display: none;
  &:hover {
    diplay: flex
    cursor: none;
  }
`;

const Rule = Styled.hr `
  width: 60%;
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    }
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    return (
        <Head >
          <HeaderContainer>
            {/* {props.toggleAbout ?  */}
            {this.state.isHidden &&
          <HeaderText>
            <Name>Erin K Meredith</Name>
            <Rule></Rule>
            <h5>Software Engineer</h5>
            <button onClick={this.toggleHidden.bind(this)}>About me</button>
          </HeaderText> }
          {!this.state.isHidden && <About toggleHidden={this.toggleHidden} isHidden={this.state.isHidden}/>}
          </HeaderContainer>
        </Head>
    )
  }
}

export default Header;