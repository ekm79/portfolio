import React from 'react';
import Styled from 'styled-components';

const AboutDisplay = Styled.div `
    display: flex
    padding: 20px;
    align-items: flex-start;
    
`;

const Text = Styled.div `
    display: flex;
    flex-direction: column;
    color: white;
    font-family: 'Montserrat', sans-serif;
`;


const Selfie = Styled.img `
  border-radius: 50%;
  width: 30%;
  height: 70%;
`;

const About = props => {
    return(
        <AboutDisplay>
            <Text>
            <h1>Erin Meredith</h1>
            <h4>Software Developer</h4>
            <p>Hello! I'm Erin. I am an artist, writer, and vegan with a love of Star Wars, Monty Python, and 
                Disney. In 2018, I enrolled in the Web Development program at Lambda school in pursuit of a 
                successful and satisfying career. That led to positions as Section Lead and Teaching Assistant 
                in Android Development. Now I am seeking to strengthen and expand my skills while providing 
                my services to a local business or organization in my community. Could it be yours? Contact me 
                and we'll speak about what I can do for you!
                </p>
            </Text>
            <Selfie src="/images/selfie.jpg" />
            
        </AboutDisplay>
    )
}

export default About;