import React, { FC } from 'react';
import cx from 'classnames';
import s from './Page.module.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

declare namespace PageProps {
  export type Props = {
    className?: string,
    hideCategories?: boolean,
    hidefooter?: boolean,
  }
}

const Page:FC<PageProps.Props> = ({
  children,
}) => (
  <div className={cx(s.Page)}>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Page;
