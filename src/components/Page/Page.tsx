import React, { FC } from 'react';
import cx from 'classnames';
import s from './Page.module.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

declare namespace PageProps {
  export type Props = {
    className?: string,
  }
}

const Page:FC<PageProps.Props> = ({ children, className}) => (
  <div className={cx(s.Page, className)}>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Page;
