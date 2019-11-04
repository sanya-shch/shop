import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 20rem;
    padding: 1rem;
    -webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.2);
    box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.2);
    display: grid;
    grid-gap: 1rem;
    @media (max-width: 360px) {
        width: 90vw;
    }
`;

export const Img = styled.img `
    width: 100%;
`;

export const Button = styled.svg`
    position: absolute;
    bottom: 1rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
`;