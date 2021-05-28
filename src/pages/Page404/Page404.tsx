import React from "react";
import cx from 'classnames';
import s from './Page404.module.scss';
import Page from "../../components/Page/Page";

const Page404 = () => (
  <Page>
    <div className={cx(s.Page404)}>
      <div>
        <h2 className={s.Page404}>
          Ошибка 404
          <br />
          {' '}
          Нету такой страницы
        </h2>
      </div>
    </div>
  </Page>
)

export default Page404;
