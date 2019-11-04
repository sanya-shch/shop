import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import { getCatalog } from '../../actions/shopActions';
import ShopCard from "./ShopCard";
import Spinner from "../common/Spinner";
import {getCatalogSelector, getCatalogLoading} from "../../selectors/shopSelectors";
import {Container} from './shopPageStyle';
import {gray2} from "../common/styles";

const theme = {
    color: gray2
};

const ShopPage = ({ getCatalog, catalog, loading }) => {

    useEffect(() => {
        getCatalog();
    },[]);

    if (loading) {
        return <Spinner/>;
    }

    return (
        <Container theme={theme}>
            {catalog !== null && catalog.map(item => <ShopCard item={item} key={item.id} />)}
        </Container>
    )
};

const mapStateToProps = state => ({
    catalog: getCatalogSelector(state),
    loading: getCatalogLoading(state)
});

export default connect(
    mapStateToProps,
    { getCatalog }
)(ShopPage);