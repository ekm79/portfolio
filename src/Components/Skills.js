import React from 'react';
import Styled from 'styled-components';

const ListItem = Styled.li `
    color: black;
    text-align: left;
`;

class Skills extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul>
                <ListItem>Polished. uncluttered, and responsive websites utilizing HTML, CSS, and Javascript</ListItem>
                <ListItem>Efficient single-page applications using React and Redux</ListItem>
                <ListItem>Clean, easy-to-use databases with SQLite and node.js</ListItem>
                <ListItem>Simple Android apps with Java</ListItem>
                </ul>
            </div>
        )
    }
}

export default Skills;