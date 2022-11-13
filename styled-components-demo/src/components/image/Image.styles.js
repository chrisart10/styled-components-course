import styled,{keyframes} from "styled-components";

const rotate = keyframes`
from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(3600deg);
    }
`

export const AnimatedLogo  = styled.img`
    height: 40vmin;
    pointer-events: none;
    animation: ${rotate} infinite 30s linear;
`