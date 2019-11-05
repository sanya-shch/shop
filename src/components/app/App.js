import React, {Fragment} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {connect} from 'react-redux';
import {IntlProvider} from "react-intl";

import NavBar from "../navbar/NavBar";
import ShopPage from "../catalog/ShopPage";
import BasketPage from "../basket/BasketPage";
import OrderPage from "../order/OrderPage";
import FinishPage from "../finish/FinishPage";
import PageNotFound from "../404/PageNotFound";
import {getLang} from "../../selectors";
import messages from "../../localization";
import {GlobalStyle} from './GlobalStyle';
import {fontFamily} from "../common/styles";

const theme = {
    fontFamily: fontFamily
};

const App = ({lang}) => {
    return (
        <IntlProvider locale={lang} messages={messages[lang]}>
            <Router>
                <Fragment>
                    <GlobalStyle theme={theme}/>
                    <NavBar/>
                    <Switch>
                        <Route exact path="/">
                            <ShopPage />
                        </Route>
                        <Route path="/basket">
                            <BasketPage />
                        </Route>
                        <Route path="/order">
                            <OrderPage />
                        </Route>
                        <Route path="/finish">
                            <FinishPage />
                        </Route>
                        <Route path="*">
                            <PageNotFound />
                        </Route>
                    </Switch>
                </Fragment>
            </Router>
        </IntlProvider>
    );
};

const mapStateToProps = state => ({
    lang: getLang(state)
});

export default connect(
    mapStateToProps
)(App);