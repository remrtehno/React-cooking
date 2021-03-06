import React, { FC } from "react";
import cx from 'classnames';
import Page from "../Page/Page";
import Loader from "../Loader/Loader";
import s from './InnerPage.module.scss';

declare namespace InnerPageProps {
  export type Props = {
    text?: string,
    hooks?: any,
  }
}

const InnerPage:FC<InnerPageProps.Props> = (props) => {
  const html = props.hooks && props.hooks();

  if (!html && !props.text) {
    return <Loader />;
  }

  return (
    <Page>
      <div className={cx("container", s.InnerPage)}>
        {props.text}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Page>
  )
}

export default InnerPage;
