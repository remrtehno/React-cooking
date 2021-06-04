import React, { lazy, useEffect } from 'react';
import {
  BrowserRouter,
  Switch,
  Route, useHistory,
} from 'react-router-dom';
import queryString from 'query-string';
import { useDispatch } from 'react-redux';
import API, { ROUTE_PATHS } from '../../constants/constants';
import Loader from "../Loader/Loader";
import useWelcome from "../../hooks/useWelcome";
import { getFooter, getOffer, getSubscription } from "../../actions/dataActions";
import SubscriptionPage from "../../pages/SubscriptionPage/SubscriptionPage";

const MainPage = lazy(() => import('../../pages/MainPage/MainPage'));
const CategoryPage = lazy(() => import('../../pages/CategoryPage/CategoryPage'));
const CategoryItemPage = lazy(() => import('../../pages/CategoryItemPage/CategoryItemPage'));
const InnerPage = lazy(() => import('../InnerPage/InnerPage'));
const Page404 = lazy(() => import('../../pages/Page404/Page404'));
const ErrorPage = lazy(() => import('../../pages/Error/Error'));
const Offerta = lazy(() => import('../../pages/Offerta/Offerta'));
const Page = lazy(() => import('../Page/Page'));

const Root = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const statusValue = queryString.parse(history?.location?.search).status;
    if (statusValue && +statusValue === 2) {
      history.push(ROUTE_PATHS.WELCOME);
    }
  }, [history]);

  useEffect(() => {
    dispatch(getFooter());
    dispatch(getOffer());
    dispatch(getSubscription());
  }, [])

  return (
    <React.Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Page>
          <Switch>
            <Route exact path={ROUTE_PATHS.CATEGORY} component={CategoryPage} />
            <Route exact path={ROUTE_PATHS.CATEGORY_ITEM_DETAIL} component={CategoryItemPage} />
            <Route path={ROUTE_PATHS.SUBSCRIPTION_COSTS}>
              <SubscriptionPage />
            </Route>
            <Route path={ROUTE_PATHS.OFERTA}>
              <Offerta />
            </Route>
            <Route
              path={ROUTE_PATHS.WELCOME}
              component={() => <InnerPage hooks={useWelcome} />}
            />
            <Route exact path={API.HOST}>
              <MainPage />
            </Route>
            <Route path={ROUTE_PATHS.ERROR} component={ErrorPage} />
            <Route path={ROUTE_PATHS.PAGE404} component={Page404} />
          </Switch>
        </Page>
      </BrowserRouter>
    </React.Suspense>
  )
};

export default Root;
