import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {FormattedMessage} from "react-intl";

import BasketCard from "./BasketCard";
import Btn from "../common/Btn";
import {Container, BtnContainer, Text} from './basketPageStyle';
import {getBasketSuperSelectorIds} from "../../selectors/basketSelectors";
import {gray2} from "../common/styles";

const theme = {
    color: gray2
};

const BasketPage = ({basket}) => {
    return(
        <Container theme={theme}>
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