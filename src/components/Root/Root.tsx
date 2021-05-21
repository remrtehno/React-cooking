import React, { lazy, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, useHistory,
} from 'react-router-dom';
import queryString from 'query-string';
import API, { ROUTE_PATHS } from '../../constants/constants';
import Loader from "../Loader/Loader";

const MainPage = lazy(() => import('../../pages/MainPage/MainPage'));
const CategoryPage = lazy(() => import('../../pages/CategoryPage/CategoryPage'));
const CategoryItemPage = lazy(() => import('../../pages/CategoryItemPage/CategoryItemPage'));
const InnerPage = lazy(() => import('../InnerPage/InnerPage'));

const Root = () => {
  const history = useHistory();

  useEffect(() => {
    const statusValue = queryString.parse(history?.location?.search).status;
    if (statusValue && +statusValue === 2) {
      history.push(ROUTE_PATHS.WELCOME);
    }
  }, [history]);

  return (
    <React.Suspense fallback={<Loader />}>
      <Router>
        <Switch>
          <Route exact path={ROUTE_PATHS.CATEGORY} component={CategoryPage} />
          <Route exact path={ROUTE_PATHS.CATEGORY_ITEM_DETAIL} component={CategoryItemPage} />
          <Route exact path={API.HOST}>
            <MainPage />
          </Route>
          <Route path={ROUTE_PATHS.SUBSCRIPTION_COSTS} component={InnerPage} />
          <Route path={ROUTE_PATHS.CONDITIONS} component={InnerPage} />
          <Route path={ROUTE_PATHS.ERROR} component={InnerPage} />
          <Route path={ROUTE_PATHS.PAGE404} component={InnerPage} />
          <Route path={ROUTE_PATHS.WELCOME} component={InnerPage} />
          <Route>
            404
          </Route>
        </Switch>
      </Router>
    </React.Suspense>
  )
};

export default Root;
