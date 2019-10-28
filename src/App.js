import React, {Fragment} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import {connect} from 'react-redux';
import {IntlProvider} from "react-intl";

import NavBar from "./components/layout/NavBar";
import ShopPage from "./components/pages/ShopPage";
import BasketPage from "./components/pages/BasketPage";
import OrderPage from "./components/pages/OrderPage";
import FinishPage from "./components/pages/FinishPage";
import PageNotFound from "./components/pages/PageNotFound";
import {getLang} from "./selectors/shopSelectors";
import messages from "./messages";

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      letter-spacing: 1px;
    }
`;

const App = ({lang}) => {
    return (
        <IntlProvider locale={lang} messages={messages[lang]}>
            <Router>
                <Fragment>
                    <GlobalStyle/>
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