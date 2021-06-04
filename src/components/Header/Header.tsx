import React from 'react';
import cx from 'classnames';
import { useHistory } from 'react-router-dom';
import s from './Header.module.scss';
import logo from '../../assets/img/service-logo@x2.png';
import API from '../../constants/constants';
import { useCompactQuery } from "../../generated/graphql";
import Loader from "../Loader/Loader";
import Categories from "../Categories/Categories";

const Header = () => {
  const history = useHistory();

  const { data, loading } = useCompactQuery({
    variables: {
      lang: ['ua'],
    },
  });

  if (loading || !data?.compact) {
    return <Loader />;
  }

  const { categories } = data?.compact;
  const redirectToRoot = () => history && history.push(API.HOST);

  return (
    <div className={cx(s.HeaderWrapper)}>
      <header className={s.Header}>
        <div className={cx('container', s.HeaderContainer)}>
          <div className={s.HeaderWrapper}>
            <div className="logo">
              <button type="button" className={s.logoLink} onClick={redirectToRoot}>
                <img className={s.logoImage} src={logo} alt="Кулинария - Top" />
              </button>
            </div>
          </div>
          <div className={s.HeaderWrapper}>
            <button type="button" className={s.logoLink} onClick={redirectToRoot}>
              <div className={s.projectName}>
                Кулинария
              </div>
            </button>
          </div>
        </div>
      </header>
      <Categories categories={categories} />
    </div>
  )
};

export default Header;
