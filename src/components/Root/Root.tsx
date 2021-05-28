import React, { lazy, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, useHistory,
} from 'react-router-dom';
import queryString from 'query-string';
import axios from "axios";
import API, { ROUTE_PATHS } from '../../constants/constants';
import Loader from "../Loader/Loader";
import useOferta from "../../hooks/useOferta";
import useWelcome from "../../hooks/useWelcome";
import useSubscriptioncosts from "../../hooks/useSubscriptioncosts";

const MainPage = lazy(() => import('../../pages/MainPage/MainPage'));
const CategoryPage = lazy(() => import('../../pages/CategoryPage/CategoryPage'));
const CategoryItemPage = lazy(() => import('../../pages/CategoryItemPage/CategoryItemPage'));
const InnerPage = lazy(() => import('../InnerPage/InnerPage'));
const Page404 = lazy(() => import('../../pages/Page404/Page404'));
const ErrorPage = lazy(() => import('../../pages/Error/Error'));

export const FooterContext = React.createContext('');

const Root = () => {
  const [footerText, setFooterText] = useState('');
  const history = useHistory();

  useEffect(() => {
    const statusValue = queryString.parse(history?.location?.search).status;
    if (statusValue && +statusValue === 2) {
      history.push(ROUTE_PATHS.WELCOME);
    }
  }, [history]);

  useEffect(() => {
    axios.get(API.FOOTER).then((response) => {
      setFooterText(response.data);
    });
  }, [footerText]);

  return (
    <React.Suspense fallback={<Loader />}>
      <FooterContext.Provider value={footerText}>
        <Router>
          <Switch>
            <Route exact path={ROUTE_PATHS.CATEGORY} component={CategoryPage} />
            <Route exact path={ROUTE_PATHS.CATEGORY_ITEM_DETAIL} component={CategoryItemPage} />
            <Route exact path={API.HOST}>
              <MainPage />
            </Route>
            <Route
              path={ROUTE_PATHS.SUBSCRIPTION_COSTS}
              component={() => <InnerPage hooks={useSubscriptioncosts} />}
            />
            <Route
              path={ROUTE_PATHS.OFERTA}
              component={() => <InnerPage hooks={useOferta} />}
            />
            <Route
              path={ROUTE_PATHS.WELCOME}
              component={() => <InnerPage hooks={useWelcome} />}
            />
            <Route path={ROUTE_PATHS.ERROR} component={ErrorPage} />
            <Route path={ROUTE_PATHS.PAGE404} component={Page404} />
          </Switch>
        </Router>
      </FooterContext.Provider>
    </React.Suspense>
  )
};

export default Root;
