import React, { FC } from 'react';
import {
  Link,
} from 'react-router-dom';
import s from './Footer.module.scss';
import { ROUTE_PATHS } from '../../constants/constants';
import { FooterContext } from "../Root/Root";

const Footer:FC = () => {
  return (
    <footer className={s.Footer}>
      <div className="container">
        <ul className={s.FooterMenu}>
          <li className="mini-nav__item">
            <Link to={ROUTE_PATHS.SUBSCRIPTION_COSTS} className="mini-nav__link">Стоимость услуги</Link>
          </li>
          <li className="mini-nav__item">
            <Link to={ROUTE_PATHS.OFERTA} className="mini-nav__link">
              Пользовательское
              соглашение
            </Link>
          </li>
        </ul>
        <FooterContext.Consumer>
          {(footerText) => <div dangerouslySetInnerHTML={{__html: footerText}} />}
        </FooterContext.Consumer>
      </div>
    </footer>
  );
}

export default Footer;
