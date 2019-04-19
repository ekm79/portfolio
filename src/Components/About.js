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

const Paragraph = Styled.p `
    line-height: 1.3; 
`;

const Selfie = Styled.img `
  border-radius: 50%;
  width: 25%;
  height: 60%;
`;

const About = props => {
    return(
        <AboutDisplay>
            <Text>
            <h1>Erin Meredith</h1>
            <h4>Software Developer</h4>
            <Paragraph>Thank you for taking to the time to view my portfolio! I am an artist, writer, and vegan 
                with an infatuation with Star Wars, Monty Python, and Disney. In 2010, I earned a bachelor's degree
                in dietetics, but found opportunities in the field were scarce. So in 2018, I decided 
                to change direction and enrolled in the Web Development program at Lambda School in pursuit of a 
                successful and satisfying career. That led to positions as Section Lead and Teaching Assistant 
                in Android Development. Now I am seeking to strengthen and expand my skills while providing 
                my services to a local business or organization in my community. Could it be yours? Contact me 
                and we'll speak about what I can do for you!
                </Paragraph>
            </Text>
            <Selfie src="/images/selfie.jpg" />
            
        </AboutDisplay>
    )
}

export default About;