import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import OrderForm from "./OrderForm";
import {makeOrder} from "../../actions/orderActions";
import {getBasket} from "../../selectors/basketSelectors";

const OrderPage = ({makeOrder, basket, history}) => {
    const showResults = (values) => {
        values["basket"] = basket;
        makeOrder(values);
        history.push('/finish');
    };
    return(
        <div>
            <OrderForm onSubmit={showResults} />
        </div>
    )
};

const mapStateToProps = state => ({
    basket: getBasket(state)
});

export default connect(
    mapStateToProps,
    { makeOrder }
)(withRouter(OrderPage));