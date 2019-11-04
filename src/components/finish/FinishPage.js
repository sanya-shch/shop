import React from 'react';
import {Link} from "react-router-dom";
import { FormattedMessage } from "react-intl";

import Btn from "../common/Btn";
import {Container, Text} from './finishPageStyle';
import {gray2} from "../common/styles";

const theme = {
    color: gray2
};

const FinishPage = () => {
    return(
        <Container theme={theme}>
            <Text><FormattedMessage id="finishText" defaultMessage="Thank You!" /></Text>
            <Link to="/"><Btn><FormattedMessage id="goToCatalog" defaultMessage="Go to Catalog" /></Btn></Link>
        </Container>
    )
};

export default FinishPage;