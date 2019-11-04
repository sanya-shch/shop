import {FormattedMessage} from "react-intl";
import React from "react";

import {FieldContainer} from './renderFieldStyle';

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

export default renderField;