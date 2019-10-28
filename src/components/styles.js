import styled from "styled-components";

// Grays
export const gray1 = '#383737';
export const gray2 = '#565555';
export const gray3 = '#857c81';
export const gray4 = '#b9b9b9';
export const gray5 = '#e0dddd';

// Fonts
export const fontFamily = "'Segoe UI', 'Helvetica Neue',sansserif";

export const Btn = styled.button`
    border: none;
    margin: 20px;
    padding: 24px;
    width: 220px;
    font-family: "montserrat",sans-serif;
    text-transform: uppercase;
    border-radius: 6px;
    cursor: pointer;
    color: #fff;
    background-size: 200%;
    transition: 0.6s;
    background-image: linear-gradient(
        to left,
        rgb(113, 183, 230),
        rgb(155, 89, 182)
    );
    
    :hover{
      background-position: right;
    }
    :focus {
        outline: none;
    }
`;