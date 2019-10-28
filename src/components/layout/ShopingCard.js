import React from 'react';
import styled from "styled-components";
import {connect} from "react-redux";

import {addToBasket} from "../../actions/shopActions";

const Container = styled.div`
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
const Img = styled.img `
    width: 100%;
    mar
`;
const Button = styled.svg`
    position: absolute;
    bottom: 1rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
`;

const ShopingCard = ({ addToBasket, item: { id, brand, name, price, type, img }}) => {

    return(
        <Container>
            <Img src={img} alt={name}/>
            <Button onClick={() => addToBasket(id, price)} enable-background="new 0 0 511.343 511.343" viewBox="0 0 511.343 511.343" xmlns="http://www.w3.org/2000/svg">
                <path d="m149 384.005c-35.105 0-63.666 28.561-63.666 63.667s28.561 63.667 63.666 63.667c35.106 0 63.667-28.561 63.667-63.667s-28.561-63.667-63.667-63.667z" fill="#d8d6d6"/>
                <path d="m383.667 384.005c-35.106 0-63.667 28.561-63.667 63.667s28.561 63.667 63.667 63.667 63.667-28.561 63.667-63.667-28.561-63.667-63.667-63.667z" fill="#d8d6d6"/>
                <path d="m490.334 128.002h-415.997c-12.192 0-21.84 10.367-20.943 22.542l14.12 191.78c.812 11.027 10.008 19.459 20.925 19.459.964 0 136.927-8.011 360.458-21.147 9.162-.538 16.914-6.966 19.141-15.87l42.67-170.67c3.308-13.236-6.71-26.094-20.374-26.094z" fill="#ece2e2"/>
                <path d="m277 .005c-70.396 0-127.667 57.271-127.667 127.667s57.271 127.667 127.667 127.667 127.667-57.271 127.667-127.667-57.271-127.667-127.667-127.667z" fill="#7be3d4"/>
                <path d="m447.667 426.005h-298.525c-41.154 0-75.747-30.83-80.466-71.715-.049-.416 1.094 12.263-24.208-269.618h-23.468c-11.598 0-21-9.402-21-21s9.402-21 21-21h42.667c10.87 0 19.944 8.296 20.916 19.123l25.844 287.917c2.378 19.567 18.979 34.293 38.715 34.293h298.525c11.598 0 21 9.402 21 21s-9.402 21-21 21z" fill="#ccc"/>
                <path d="m309 106.672h-11v-11c0-11.598-9.402-21-21-21s-21 9.402-21 21v11h-11c-11.598 0-21 9.402-21 21s9.402 21 21 21h11v11c0 11.598 9.402 21 21 21s21-9.402 21-21v-11h11c11.598 0 21-9.402 21-21s-9.402-21-21-21z" fill="#5caa9f"/>
            </Button>
            <h3><span>{brand} </span>{name}</h3>
            <h4>{type}</h4>
            <h3>{price}</h3>
        </Container>
    )
};

export default connect(
    null,
    {addToBasket}
)(ShopingCard);