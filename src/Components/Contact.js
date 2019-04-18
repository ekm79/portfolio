import React from 'react';
import Styled from 'styled-components';
import {Link} from 'react-router-dom';


const ContactContainer = Styled.div `
    display: flex;
    justify-content: space-between;
    height: 150px;
    width: 10vw;
    flex-direction: column;
    padding-bottom: 50px;
    @media (max-width: 500px) {
        flex-direction: row;
      }
`;

const Button = Styled.button `
    width: 200px;
    height: 50px;
    border: 1px solid black;
    background: #282c34;
    color: white;
    font-size: 18px;
`;

const Icon = Styled.img `
    color: white;
    width: 70px;
    height: 70px;
    @media (max-width: 500px) {
        width: 40px;
        height: 40px;
    }
`;

const Name = Styled.h2 `

`;

const Links = Styled.div `
    display: flex;
    justify-content: space-around;
`;

const Contact = props => {
    return (
        <ContactContainer>
        
        
                <a href="http://www.linkedin.com/in/erin-meredith-18a9a0166" target="blank"><Icon src="/images/linkedin.png"/></a>
                <a href="mailto:ekmeredith@att.net" ><Icon src="/images/Envelope.png"/></a>
                <a href="https://github.com/ekm79" target="blank" ><Icon src="/images/github.png"/></a>
                {/* <a href="/images/Resume03-19.pdf" target="blank"><Icon src="/images/res-icon.png" /> </a> */}
    
         </ContactContainer> 
    )
}

export default Contact;