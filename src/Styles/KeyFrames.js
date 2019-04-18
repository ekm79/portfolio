import Styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes `
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const slideInLeft = keyframes`
from {
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
  visibility: visible;
}

to {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
`;
