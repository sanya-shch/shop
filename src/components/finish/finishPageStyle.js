import styled from "styled-components";

export const Container = styled.div`
    height: calc(100vh - 4rem);
    color: ${props => props.theme.color};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Text = styled.p`
    margin-top: 10vh;
    font-size: 10vw;
`;