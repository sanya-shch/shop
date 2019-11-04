import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {FormattedMessage} from "react-intl";

import validate from "./validateOrderForm";
import renderField from "./renderField";
import Btn from "../common/Btn";
import {Container} from './orderFormStyle';
import {gray2} from "../common/styles";

const theme = {
    color: gray2
};

const OrderForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="username"
                type="text"
                component={renderField}
                label="Username"
            />
            <Field name="email" type="email" component={renderField} label="Email" />
            <Field
                name="city"
                type="text"
                component={renderField}
                label="City"
            />
            <Field
                name="postal_code"
                type="text"
                component={renderField}
                label="Postal Code"
            />
            <Container theme={theme}>
                <Btn type="submit" disabled={submitting}>
                    <FormattedMessage id='Submit' defaultMessage='Submit' />
                </Btn>
                <Btn type="button" disabled={pristine || submitting} onClick={reset}>
                    <FormattedMessage id='Clear Values' defaultMessage='Clear Values' />
                </Btn>
            </Container>
        </form>
    )
};

export default reduxForm({
    form: 'orderForm',
    validate
})(OrderForm)