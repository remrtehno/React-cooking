import React, { useEffect } from "react";
import cx from "classnames";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const SubscriptionPage = () => {
  const subscription = useSelector((state:RootState) => state.subscription);

  useEffect(() => {
    window.scroll(0, 0);
  }, [])

  return (
    <>
      <div className={cx("container", 'inner-pages')}>
        <div dangerouslySetInnerHTML={{ __html: subscription }} />
      </div>
    </>
  )
}

export default SubscriptionPage;
