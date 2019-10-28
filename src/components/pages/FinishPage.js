import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import {Btn, fontFamily, gray2} from "../styles";

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

const FinishPage = () => {
    return(
        <Container>
            <Text><FormattedMessage id="finishText" defaultMessage="Thank You!" /></Text>
            <Link to="/"><Btn><FormattedMessage id="goToCatalog" defaultMessage="Go to Catalog" /></Btn></Link>
        </Container>
    )
};

export default FinishPage;