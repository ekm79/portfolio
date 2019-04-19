import Styled from 'styled-components';
import { slideInLeft } from './KeyFrames';

export const ListItem = Styled.li `
    color: white;
    text-align: left;
    font-family: 'Raleway', sans-serif;
    transform: translate(100px, 10px);
    animation: ${slideInLeft} 0.8s forwards;   
    :before{
        content: '✓ '
    }
`;

export const SubContainer = Styled.div `
    width: 50%;
    height: ${props=>props.projects ? "1200px" : "350px"};
    background: #282c34;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    padding: 50px;
    @media (max-width: 768px) {
        padding: 10px;
        width: 80%;
        height: ${props=>props.projects ? "2500px" : "550px"};
        justify-content: space-around;
    }
    @media (max-width: 1064px) {
        width: 70%;
    }
`;

export const List = Styled.ul `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 80%;
    list-style: none;
`;

export const SubHead = Styled.h3 `
    color: white;
    margin: 20px;
    font-size: calc(10px + 2vmin);
    font-family: 'Montserrat', sans-serif;
    background-image: radial-gradient(circle, #708090, #282c34);
    
`;

export const ProjectLink = Styled.a `
    color: black;
    text-align: left;
    font-family: 'Raleway', sans-serif;
    word-wrap: break-word;
`;

export const ProjectHead = Styled.h5 `
    text-align: left;
    font-family: 'Raleway', sans-serif;
    font-size: 22px;
    margin-bottom: 15px;
    @media(max-width: 768px) [
        margin: 0;
        padding:0;
    ]
   
`;

export const StandardText = Styled.p `
    text-align: left;
    font-family: 'Raleway', sans-serif;
    margin-bottom: 10px;
    @media(max-width: 500px) {
        margin: 0;
    }
`;