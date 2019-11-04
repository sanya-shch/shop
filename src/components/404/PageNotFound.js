import React from 'react';
import {FormattedMessage} from "react-intl";

import {GlobalStyle} from './pageNotFoundStyle';

const PageNotFound = () => {
    return (
        <div>
            <GlobalStyle/>
            <section className="error-page">
                <div>
                    <h1 data-h1="404">404</h1>
                    <p><FormattedMessage id="pageNotFound" defaultMessage="PAGE NOT FOUND" /></p>
                </div>
            </section>
        </div>
    )
};

export default PageNotFound;