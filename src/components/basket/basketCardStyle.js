import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid #b9b9b9;
    display: grid;
    grid-template-columns: 10rem 2fr 9rem 1fr;
    grid-gap: 2rem;
    align-items: center;
    margin: 2rem;
    padding: 2rem;
    -webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.2);
    box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.2);
    @media (max-width: 1020px) {
         grid-template-columns: 1fr 2fr;
    }
    @media (max-width: 580px) {
         grid-template-columns: 80vw;
         grid-gap: 1rem;
         margin: 1rem;
         padding: 1rem;
    }
`;

export const CountContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    align-items: center;
    @media (max-width: 1020px) {
        width: 9rem;
        grid-column: 1 / 3;
        grid-row: 2;
    }
    @media (max-width: 580px) {
        grid-column: 1;
        grid-row: 3;
        justify-self: center;
    }
`;

export const Img = styled.img `
    width: 100%;
    @media (max-width: 1020px) {
        grid-column: 1 / 2;
        grid-row: 1;
    }
    @media (max-width: 580px) {
        grid-column: 1;
        grid-row: 1;
    }
`;

export const Button = styled.svg`
    width: 3rem;
    height: 3rem;
`;

export const Info = styled.div`
    h4 {
        margin-top: 5px;
        margin-bottom: 5px;
    }
    @media (max-width: 1020px) {
        grid-column: 2 / 4;
        grid-row: 1;
    }
    @media (max-width: 580px) {
        grid-column: 1;
        grid-row: 2;
        justify-self: center;
    }
`;

export const Price = styled.h2`
    justify-self: end;
    @media (max-width: 1020px) {
        grid-column: 2 / 4;
        grid-row: 2;
        justify-self: center;
    }
    @media (max-width: 680px) {
        justify-self: end;
    }
    @media (max-width: 580px) {
        grid-column: 1;
        grid-row: 4;
        justify-self: center;
    }
`;