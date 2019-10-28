import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getCatalog } from '../../actions/shopActions';
import { fontFamily, gray2 } from '../styles';
import ShopingCard from "../layout/ShopingCard";
import Spinner from "../layout/Spiner";
import {getCatalogSuperSelector, getLoading} from "../../selectors/shopSelectors";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 2rem;
    justify-content: space-evenly;
    justify-items: center;
    background-color: white;
    margin: 1rem 2rem;
    font-family: ${fontFamily};
    color: ${gray2};
`;

const ShopPage = ({ getCatalog, catalog, loading }) => {

    useEffect(() => {
        getCatalog();
    },[]);

    if (loading) {
        return <Spinner/>;
    }

    return (
        <Container>
            {catalog !== null && catalog.map(item => <ShopingCard item={item} key={item.id} />)}
        </Container>
    )
};

const mapStateToProps = state => ({
    catalog: getCatalogSuperSelector(state),
    loading: getLoading(state)
});

export default connect(
    mapStateToProps,
    { getCatalog }
)(ShopPage);