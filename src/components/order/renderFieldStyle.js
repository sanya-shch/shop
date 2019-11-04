import styled from "styled-components";

export const FieldContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    margin-top: 1rem;
    label {
        justify-self: end;
    }
    input {
        justify-self: start;
        padding: 5px;
    }
    :nth-child(1) {
        margin-top: 20vh;
    }
    :nth-child(4) {
        margin-bottom: 10vh;
    }
    @media (max-width: 500px) {
        grid-template-columns: 1fr;
        justify-items: center;
        :nth-child(1) {
            margin-top: 10vw;
        }
        label {
            justify-self: center;
            grid-column: 1;
            grid-row: 1;   
        }
        input {
            justify-self: center;
            padding: 5px;
            grid-column: 1;
            grid-row: 2;
        }
    }
`;
