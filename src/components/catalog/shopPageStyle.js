import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 2rem;
    justify-content: space-evenly;
    justify-items: center;
    background-color: white;
    margin: 1rem 2rem;
    color: ${props => props.theme.color};
`;