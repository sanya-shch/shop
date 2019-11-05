import React from 'react';
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {FormattedMessage} from "react-intl";

import {setLang} from "../../actions/langActions";
import {getTotalPrice, getLang} from "../../selectors";
import {Nav, Container, Button, BtnContainer} from './navbarStyle';
import {gray5} from "../common/styles";

const theme = {
    color: gray5
};

const NavBar = ({location, totalPrice, setLang}) => {
    const onClickSetEN = () => setLang('en');
    const onClickSetUA = () => setLang('uk');

    return (
        <Nav>
            <BtnContainer theme={theme}>
                <button onClick={onClickSetEN}>EN</button>
                <button onClick={onClickSetUA}>UA</button>
            </BtnContainer>
            {
                location.pathname === '/'
                    ? <Container theme={theme}>
                        <h1><FormattedMessage id="Catalog" defaultMessage="Catalog" /></h1>
                        <Link to="/basket">
                            <div className="btn">{
                                totalPrice === 0
                                    ? <Button enable-background="new 0 0 511.343 511.343" viewBox="0 0 511.343 511.343" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m490.334 106.668h-415.997c-12.192 0-21.84 10.367-20.943 22.542l14.12 191.78c.812 11.027 10.008 19.459 20.925 19.459.964 0 136.927-8.011 360.458-21.147 9.162-.538 16.914-6.966 19.141-15.87l42.67-170.67c3.308-13.235-6.71-26.094-20.374-26.094z" fill="#ece2e2"/>
                                        <path d="m149 362.671c-35.105 0-63.666 28.561-63.666 63.667s28.561 63.667 63.666 63.667c35.106 0 63.667-28.561 63.667-63.667s-28.561-63.667-63.667-63.667z" fill="#d8d6d6"/>
                                        <path d="m383.667 362.671c-35.106 0-63.667 28.561-63.667 63.667s28.561 63.667 63.667 63.667 63.667-28.561 63.667-63.667-28.561-63.667-63.667-63.667z" fill="#d8d6d6"/>
                                        <path d="m447.667 404.671h-298.525c-41.154 0-75.747-30.83-80.466-71.715-.049-.416 1.094 12.263-24.208-269.618h-23.468c-11.598 0-21-9.402-21-21s9.402-21 21-21h42.667c10.87 0 19.944 8.296 20.916 19.123l25.844 287.917c2.378 19.567 18.979 34.293 38.715 34.293h298.525c11.598 0 21 9.402 21 21s-9.402 21-21 21z" fill="#ccc"/>
                                    </Button>
                                    : <Button enable-background="new 0 0 511.343 511.343" viewBox="0 0 511.343 511.343" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m255.126 146.035-10.667-74.666c-1.478-10.346-10.338-18.03-20.789-18.03h-74.67c-11.589 0-21 9.403-21 21.001l.003 74.666c0 11.598 9.402 20.999 21 20.999h85.333c12.762 0 22.598-11.314 20.79-23.97z" fill="#7be3d4"/>
                                        <path d="m372.385 145.552-21.333-128c-1.688-10.126-10.449-17.548-20.714-17.548h-64c-6.379 0-12.413 2.9-16.398 7.882l-42.668 53.334c-3.622 4.526-5.21 10.349-4.391 16.088l10.667 74.666c1.478 10.346 10.338 18.03 20.789 18.03h117.333c12.953.001 22.85-11.641 20.715-24.452z" fill="#ffdfba"/>
                                        <path d="m426.333 42.672h-88.89c-12.952 0-22.85 11.641-20.714 24.453l14.227 85.333c1.688 10.126 10.45 17.547 20.715 17.547l74.663-.003c11.598 0 20.999-9.402 20.999-21v-85.33c0-11.598-9.401-21-21-21z" fill="#fe929f"/>
                                        <path d="m149 384.005c-35.105 0-63.666 28.561-63.666 63.667s28.561 63.667 63.666 63.667c35.106 0 63.667-28.561 63.667-63.667s-28.561-63.667-63.667-63.667z" fill="#d8d6d6"/>
                                        <path d="m383.667 384.005c-35.106 0-63.667 28.561-63.667 63.667s28.561 63.667 63.667 63.667 63.667-28.561 63.667-63.667-28.561-63.667-63.667-63.667z" fill="#d8d6d6"/>
                                        <path d="m490.334 128.002h-415.997c-12.192 0-21.84 10.367-20.943 22.542l14.12 191.78c.812 11.027 10.008 19.459 20.925 19.459.964 0 136.927-8.011 360.458-21.147 9.162-.538 16.914-6.966 19.141-15.87l42.67-170.67c3.308-13.236-6.71-26.094-20.374-26.094z" fill="#ece2e2"/>
                                        <path d="m447.667 426.005h-298.525c-41.154 0-75.747-30.83-80.466-71.715-.049-.416 1.094 12.263-24.208-269.618h-23.468c-11.598 0-21-9.402-21-21s9.402-21 21-21h42.667c10.87 0 19.944 8.296 20.916 19.123l25.844 287.917c2.378 19.567 18.979 34.293 38.715 34.293h298.525c11.598 0 21 9.402 21 21s-9.402 21-21 21z" fill="#ccc"/>
                                    </Button>
                            }</div>
                        </Link>
                    </Container>
                    : location.pathname === '/basket'
                        ? <Container theme={theme}>
                            <h1><FormattedMessage id="Basket" defaultMessage="Basket" /></h1>
                            <h2><FormattedMessage id="TotalPrice" defaultMessage="Total Price" />: {totalPrice}</h2>
                        </Container>
                        : location.pathname === '/order'
                            ? <Container theme={theme}>
                                <h1><FormattedMessage id="Order" defaultMessage="Order" /></h1>
                            </Container>
                            : location.pathname === '/finish'
                                && <Container theme={theme}>
                                    <h1><FormattedMessage id="finishText" defaultMessage="Thank You!" /></h1>
                                </Container>
            }
        </Nav>
    )
};

const mapStateToProps = state => ({
    totalPrice: getTotalPrice(state),
    lang: getLang(state)
});

export default connect(
    mapStateToProps,
    { setLang }
)(withRouter(NavBar));