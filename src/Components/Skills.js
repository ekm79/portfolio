import React from 'react';
import {ListItem,
        SubContainer,
        List,
        SubHead} from './../Styles/SharedStyles';


class Skills extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SubContainer>
                <SubHead>Skills</SubHead>
                <List>
                    <ListItem>Polished. uncluttered, and responsive websites utilizing HTML, CSS, and Javascript</ListItem>
                    <ListItem>Efficient single-page applications using React and Redux</ListItem>
                    <ListItem>Clean, easy-to-use backend with SQLite and node.js or MySQL and Java with Spring Boot</ListItem>
                    <ListItem>Simple Android apps with Java</ListItem>
                    <ListItem>Leadership experience as a Lead Project Manager</ListItem>
                    <ListItem>Mentored students who needed additional support in Android Development</ListItem>
                    <ListItem>Experience working independently in a remote position</ListItem>
                    <ListItem>Languages and frameworks: HTML • CSS • JavaScript • Java • Python • SQL • React • Redux • Node.js • Bootstrap • Spring • Express • Django</ListItem>
                </List>
            </SubContainer>
        )
    }
}

export default Skills;