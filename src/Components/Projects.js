import React from 'react';
import Styled from 'styled-components';
import {ListItem,
    SubContainer,
    StandardText,
    SubHead,
    ProjectLink,
    ProjectHead} from './../Styles/SharedStyles';

const icons = [
"/images/icons8-android-os-filled-100.png",
"/images/icons8-css-100.png",
"/images/icons8-java-100.png",
"/images/icons8-javascript-100.png",
"/images/icons8-python-filled-100.png",
"/images/icons8-react-native-filled-100.png",
"/images/icons8-source-code-filled-100.png",
"/images/icons8-sql-filled-100.png",
"/images/icons8-user-groups-filled-100.png",
"/images/redux.png",
"/images/bootstrap.png"
]

const IconBlock = Styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30%
    margin: 10px 0;
    @media(max-width: 768px) {
        flex-direction: row;
        width: 100%;
        margin-bottom: 0;
    }
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

const ProjectCard = Styled.div `
    display: flex;
    width: 40%;
    height: auto;
    border-radius: 15%;
    background: white;
    padding: 0 20px;
    justify-content: space-between;
    margin: 30px 0;
    border: 3px solid #708090;
    @media (max-width: 768px) {
        width: 60%;
        flex-direction: column;
        justify-content: space-around;
    }
    @media(max-width: 500px) {
        width: 80%;
        flex-direction: column;
        justify-content: center;
    }
    
`;

const ProjectContainer = Styled.div `
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    @media(max-width: 768px) {
        flex-direction: row;
        justify-content: space-around;
    }
    
`;

const ProjectText = Styled.div `
    display: flex;
    flex-direction: column;
    width: 60%;
    padding-right: 20px;
    @media (max-width: 768px) {
        width: 90%;
        margin: 0;
        padding-top: 0;
        padding-bottom: 20px;
        justify-content: flex-start;
    }
`;

class Projects extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SubContainer projects>
                <SubHead>Projects</SubHead>
                <ProjectContainer>
                    <ProjectCard> {/* group icon */}
                        <IconBlock>
                            <Icon src={icons[8]}/>
                            <Icon src={icons[5]}/> 
                            <Icon src={icons[9]}/> 
                        </IconBlock>
                        <ProjectText>
                            <ProjectHead>Lambda Student Blog</ProjectHead>
                            <StandardText>Team hackathon project utilizing React/Redux frontend and MongoDb backend</StandardText>
                            <StandardText>July 2018</StandardText>
                            <ProjectLink href="http://lambda-blog.surge.sh/" target="blank">Visit project</ProjectLink>
                            <ProjectLink href="https://github.com/ekm79/lambda-blog" target="blank">Git Repo</ProjectLink>
                        </ProjectText>
                </ProjectCard>

                <ProjectCard> {/* HTML icon */}
                    <IconBlock>
                    <Icon src={icons[6]}/>
                        <Icon src={icons[1]}/>
                        <Icon src={icons[3]}/>
                        <Icon src={icons[10]}/>
                    </IconBlock>
                    <ProjectText>
                        <ProjectHead>Smith & Jones</ProjectHead>
                        <StandardText>HTML, CSS, Javascript with Bootstrap</StandardText>
                        <StandardText>May, 2018</StandardText>
                        <ProjectLink href="http://iu-project.surge.sh" target="blank">Visit project</ProjectLink>
                        <ProjectLink href="https://github.com/ekm79/User-Interface-Project-Week" target="blank">Git Repo</ProjectLink>
                        </ProjectText>
                </ProjectCard>

                <ProjectCard> {/* database/server icon */}
                    <IconBlock>
                            <Icon src={icons[3]}/>
                            <Icon src={icons[5]}/>
                            <Icon src={icons[7]}/>
                            <Icon src={icons[9]}/> 
                    </IconBlock>
                    <ProjectText>
                        <ProjectHead>Lambda Notes</ProjectHead>
                        <StandardText>React with Redux frontend with Node.js backend</StandardText>
                        <StandardText>August 2018</StandardText>
                        <ProjectLink href ="http://lambda-notes-ekm.surge.sh" target="blank">Visit project</ProjectLink>
                        <ProjectLink href="https://github.com/ekm79/lambda-notes-front-end" target="blank">Git Repo(frontend)</ProjectLink>
                        <ProjectLink href="https://github.com/ekm79/back-end-project-week" target="blank">Git Repo(backend)</ProjectLink>
                        </ProjectText>
                </ProjectCard>

                <ProjectCard> {/* Python/React icon */}
                    <IconBlock>
                            <Icon src={icons[3]}/>
                            <Icon src={icons[4]}/>
                            <Icon src={icons[5]}/>
                            <Icon src={icons[9]}/> 
                    </IconBlock>
                    <ProjectText>
                        <ProjectHead>Adventure</ProjectHead>
                        <StandardText>Adventure game integrating React frontend with Python backend</StandardText>
                        <StandardText>September 2018</StandardText>
                        <ProjectLink href="https://inspiring-noyce-d2055b.netlify.com" target="blank">Visit project</ProjectLink>
                        <ProjectLink href="https://github.com/ekm79/LambdaMUD-Client" target="blank">Git Repo(frontend)</ProjectLink>
                        <ProjectLink href="https://github.com/ekm79/LambdaMUD-Project" target="blank">Git Repo(backend)</ProjectLink>
                    </ProjectText>
                </ProjectCard>

                <ProjectCard> {/* C++ icon */}
                    <IconBlock>
                            <Icon src={icons[3]}/>
                            <Icon src={icons[5]}/>
                    </IconBlock>
                    <ProjectText>
                        <ProjectHead>Conway's Game of Life</ProjectHead>
                        <StandardText>Cellular automata simulation in a React frontend</StandardText>
                        <StandardText>October 2018</StandardText>
                        <ProjectLink href="http://ekm_gameoflife.surge.sh " target="blank">Visit project</ProjectLink>
                        <ProjectLink href="https://github.com/ekm79/Conways-Life" target="blank">Git Repo</ProjectLink>
                    </ProjectText>
                </ProjectCard>

                <ProjectCard> {/* React/Wordpress icon */}
                <IconBlock>
                            <Icon src={icons[3]}/>
                            <Icon src={icons[5]}/>
                            <Icon src={icons[9]}/> 
                        </IconBlock>
                    <ProjectText>
                        <ProjectHead>Vegan Michiana</ProjectHead>
                        <StandardText>Integrating React/Redux frontend with WordPress backend</StandardText>
                        <StandardText>January 2019</StandardText>
                        <ProjectLink href="https://vegan-michiana.surge.sh/" target="blank">Visit project</ProjectLink>
                        <ProjectLink href="https://github.com/ekm79/vegan-michiana" target="blank">Git Repo</ProjectLink>
                    </ProjectText>
                </ProjectCard>

                {/* <ProjectCard> {/* Android icon
                    <IconBlock>
                            <Icon src={icons[0]}/>
                            <Icon src={icons[2]}/>
                            <Icon src={icons[7]}/>
                    </IconBlock>
                    <ProjectText>
                        <ProjectHead>Android project?</ProjectHead>
                        <ProjectLink>none yet.</ProjectLink>
                    </ProjectText>
                </ProjectCard> */}
                </ProjectContainer>
            </SubContainer>
        )
    }
}

export default Projects;
