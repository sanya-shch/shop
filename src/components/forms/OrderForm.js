import React from 'react'
import { Field, reduxForm } from 'redux-form'

import styled from "styled-components";
import {Btn, fontFamily, gray2} from "../styles";
import {FormattedMessage} from "react-intl";

const Container = styled.div`
    font-family: ${fontFamily};
    color: ${gray2};
    display: flex;
    justify-content: center;
`;
const FieldContainer = styled.div`
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

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required'
    } else if (!isNaN(Number(values.username))) {
        errors.username = 'Must be not a number'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.city) {
        errors.city = 'Required'
    } else if (!isNaN(Number(values.city))) {
        errors.city = 'Must be not a number'
    }
    if (!values.postal_code) {
        errors.postal_code = 'Required'
    } else if (values.postal_code.length === 6) {
        errors.postal_code = 'Must be 6 characters'
    } else if (isNaN(Number(values.postal_code))) {
        errors.postal_code = 'Must be a number'
    }
    return errors
};

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <FieldContainer>
        <label><FormattedMessage id={label} defaultMessage={label} /></label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    </FieldContainer>
);

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
            <Container>
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