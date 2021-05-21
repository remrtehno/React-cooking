import React, { FC } from "react";
import Page from "../Page/Page";

declare namespace InnerPageProps {
  export type Props = {
    link: string,
  }
}

const InnerPage:FC<InnerPageProps.Props> = (props) => {
  console.log(props)
  return (
    <Page>
      {props.link}
    </Page>
  )
}

export default InnerPage;
