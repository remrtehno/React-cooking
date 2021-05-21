import React, { FC } from 'react';
import {
  Link,
} from 'react-router-dom';
import s from './Footer.module.scss';
import { ROUTE_PATHS } from '../../constants/constants';

const Footer:FC = () => (
  <footer className={s.Footer}>
    <div className="container">
      <ul className="mini-nav">
        <li className="mini-nav__item">
          <Link to={ROUTE_PATHS.SUBSCRIPTION_COSTS} className="mini-nav__link">Стоимость услуги</Link>
        </li>
        <li className="mini-nav__item">
          <Link to={ROUTE_PATHS.CONDITIONS} className="mini-nav__link">
            Пользовательское
            соглашение
          </Link>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
