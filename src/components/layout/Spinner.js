import styled from "styled-components";

export default styled.svg`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 15px solid rgba(180, 180, 180, 0.2);
    border-top: 15px solid rgb(113, 183, 230);
    animation: animate 1.5s infinite linear;

    @keyframes animate {
        0% {
            transform: translate(-50%, -50%) rotate(0deg);
    }
        100% {
            transform: translate(-50%, -50%) rotate(360deg);
    }
`;
