import React, { FC, useEffect, useState } from 'react';
import {
  Link, useHistory, useLocation,
} from 'react-router-dom';
import cx from 'classnames';
import s from './Categories.module.scss';
import API, { CATEGORY, MAIN_CATEGORY, ROUTE_PATHS } from '../../constants/constants';

declare namespace CategoriesProps {
    type Props = {
      categories?: any,
      alias?: string,
    };
}

const Categories:FC<CategoriesProps.Props> = (props) => {
  const [, setState] = useState(0);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    setState(1);
  }, [location])

  const isCurrentCategory = (alias: string) => {
    if (history.location.pathname === API.HOST) {
      return MAIN_CATEGORY === alias;
    }
    return history.location.pathname.includes(alias)
  }

  if (location.pathname === ROUTE_PATHS.WELCOME) {
    return null;
  }

  return (
    <div className={s.Categories}>
      <div className="container">
        <ul className={s.CategoriesUl}>
          { props.categories && props.categories.map((val: any) => {
            const categoryAlias = `${API.HOST}/${CATEGORY}/${val?.alias}`;
            return (
              <li key={val.id} className={cx(s.LinkWrapper, isCurrentCategory(val?.alias) ? s.LinkWrapperActive : '')}>
                <Link
                  className={s.Link}
                  to={categoryAlias}
                  onClick={() => setState(val?.alias)}
                >
                  {val?.localizations[0].name}
                </Link>
              </li>
            )
          }) }
        </ul>
      </div>
    </div>
  )
};

export default Categories;
