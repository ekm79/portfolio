import React from 'react';
import Styled from 'styled-components';

const Head = Styled.header `
background-color: #282c34;
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`;

const HeaderText = Styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
`;

const Selfie = Styled.img `
  border-radius: 50%;
`;

const Header = props => {
    return (
        <Head >
          <HeaderText>
            <h1>Erin K Meredith</h1>
            <h5>Software Developer</h5>
          </HeaderText>
          <Selfie>
            <img src={"/images/selfie"}/>
          </Selfie>
        </Head>
    )
}

export default Header;