import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {FormattedMessage} from "react-intl";

import BasketCard from "../layout/BasketCard";
import { fontFamily, gray2, Btn } from '../styles';
import {getBasketSuperSelectorIds} from "../../selectors/basketSelectors";

const Container = styled.div`
    height: calc(100vh - 4rem);
    font-family: ${fontFamily};
    color: ${gray2};
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Text = styled.p`
    margin-top: 10vh;
    font-size: 10vw;
`;
const BtnContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    @media (max-width: 560px) {
         flex-direction: column;
    }
`;

const BasketPage = ({basket}) => {
    return(
        <Container>
            <div>
                { basket.length !== 0
                    ? basket.map((id) =>  <BasketCard item={id} key={id}/>)
                    : <Text><FormattedMessage id="empty" defaultMessage="Basket is empty!" /></Text>
                }
            </div>
            <BtnContainer>
                <div>
                    <Link to="/"><Btn><FormattedMessage id="BackToCatalog" defaultMessage="Back to Catalog" /></Btn></Link>
                </div>
                { basket.length !== 0
                    && <div>
                        <Link to="/order"><Btn><FormattedMessage id="Order" defaultMessage="Order" /></Btn></Link>
                    </div>
                }
            </BtnContainer>
        </Container>
    )
};

const mapStateToProps = state => ({
    basket: getBasketSuperSelectorIds(state)
});

export default connect(
    mapStateToProps
)(BasketPage);