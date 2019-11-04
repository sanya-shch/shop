import styled from "styled-components";

export const Nav = styled.nav`
    z-index: 1;
    position: sticky;
    top: 0;
    height: 4rem;
    background-image: linear-gradient(
        to left,
        rgb(113, 183, 230),
        rgb(155, 89, 182)
    );
    display: flex;
    flex-direction: row;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    h1, h2 {
        padding-left: 1vw;
        padding-right: 5vw;
        color: ${props => props.theme.color};
    }
    div.btn {
        padding-right: 1rem;
    }
`;

export const Button = styled.svg`
    width: 3rem;
    height: 3rem;
`;

export const BtnContainer = styled.div`
    display: flex;
    flex-direction: row;
    button {
        background-color: transparent;
        color:${props => props.theme.color};
        width: 2rem;
    }
`;