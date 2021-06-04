import React from "react";
import s from './ErrorPage.module.scss';

const Error = () => (
  <>
    <div className={s.ErrorPage}>
      <div className="container">
        <h2 className={s.ErrorPage}>
          Ошибка
          <br />
          {' '}
          чтото пошло не так.
        </h2>
        <p className={s.description}>Попробуйте позже</p>
      </div>
    </div>
  </>
)

export default Error;
