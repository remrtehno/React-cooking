import React, {
  FC, useEffect, useState,
} from 'react';
import {
  Link, useLocation,
} from 'react-router-dom';
import { useSelector } from "react-redux";
import s from './Footer.module.scss';
import { ROUTE_PATHS } from '../../constants/constants';
import { RootState } from "../../store/store";

const Footer:FC = () => {
  const footerText = useSelector((state:RootState) => state.footerText);
  const [, setState] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setState(1);
  }, [location])

  if (location.pathname === ROUTE_PATHS.WELCOME) {
    return null;
  }

  return (
    <footer className={s.Footer}>
      <div className="container">
        <ul className={s.FooterMenu}>
          <li className="mini-nav__item">
            <Link to={ROUTE_PATHS.SUBSCRIPTION_COSTS} className="mini-nav__link">Вартість послуги</Link>
          </li>
          <li className="mini-nav__item">
            <Link to={ROUTE_PATHS.OFERTA} className="mini-nav__link">
              Угода користувача
            </Link>
          </li>
        </ul>
        <div dangerouslySetInnerHTML={{ __html: footerText }} />
      </div>
    </footer>
  );
}

export default Footer;
