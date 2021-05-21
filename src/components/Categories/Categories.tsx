import React, { FC } from 'react';
import {
  Link, useHistory,
} from 'react-router-dom';
import queryString from "query-string";
import cx from 'classnames';
import { Category, Maybe } from '../../generated/graphql';
import s from './Categories.module.scss';
import API, { CATEGORY } from '../../constants/constants';

declare namespace CategoriesProps {
    type Props = {
      categories?: Maybe<Array<{ __typename?: 'Category' } & Pick<Category, 'alias' | 'id' | 'name'>>>
    };
}

const Categories:FC<CategoriesProps.Props> = (props) => {
  const history = useHistory();
  const pathAlias = queryString.parse(history?.location?.search).status;
  return (
    <div className={s.Categories}>
      <div className="container">
        <ul className={s.CategoriesUl}>
          { props.categories && props.categories.map((val) => {
            const categoryAlias = `${API.HOST}/${CATEGORY}/${val?.alias}`;
            return (
              <li key={val.id} className={cx(s.LinkWrapper, pathAlias)}>
                <Link className={s.Link} to={categoryAlias}>{val?.name}</Link>
              </li>
            )
          }) }
        </ul>
      </div>
    </div>
  )
};

export default Categories;
