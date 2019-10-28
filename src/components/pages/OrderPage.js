import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import OrderForm from "../forms/OrderForm";
import {makeOrder} from "../../actions/shopActions";
import {getBasket} from "../../selectors/shopSelectors";

const OrderPage = ({makeOrder, basket, history}) => {
    const showResults = (values) => {
        values["basket"] = basket;
        makeOrder(values);
        history.push('/finish');
        // window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
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