import React from 'react';
import Styled from 'styled-components';

const AboutDisplay = Styled.div `
    display: flex;
    flex-direction: column;
    padding: 20px;
    top: 0
    
`;

const AboutHead = Styled.div `
    display: flex;
    justify-content: space-between;
`;

const Text = Styled.div `
    display: flex;
    flex-direction: column;
    color: white;
    font-family: 'Montserrat', sans-serif;
    z-index: 2;
`;

const Paragraph = Styled.p `
    line-height: 1.3; 
`;

const Selfie = Styled.img `
display: inline-block;
align-self: flex-end;
  border-radius: 50%;
  width: 180px;
  height: auto;
  float: right;
  z-index: 0;
`;

const About = props => {
    return(
        <AboutDisplay>
            <AboutHead>
            <Text>
            <h1>Erin Meredith</h1>
            <h4>Software Developer</h4>
            </Text>
            <Selfie src="/images/SWSelfie.jpg" />
            </AboutHead>
            <Text>
            <Paragraph>Thank you for taking to the time to view my portfolio! In addition to being a software developer, 
                I am a passionate vegan, artist, published author, and mother of three teenaged boys. 
                In 2010, I earned a bachelor's degree in dietetics, but found opportunities in the field were scarce. 
                So in 2018, I decided to change direction and enrolled in the Full Stack Web Development program at 
                Lambda School, now known as BloomTech, in pursuit of a successful and satisfying career. That led to 
                positions as Section Lead and Teaching Assistant in their Android Development course. Immediately upon
                completing the program, I accepted a position as a Front End UI/UX developer with Aunalytics, in South
                Bend, Indiana. I spent over four years learning, growing and forming relationships with the company. 
                Now I am seeking to strengthen and expand my skills while providing my services to an organization 
                with values similar to my own. Could it be yours? 
                Contact me and let's speak about what I can do for you!
                </Paragraph>
            </Text>
            
        </AboutDisplay>
    )
}

export default About;