import React, { useEffect } from "react";
import cx from "classnames";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Offerta = () => {
  const infoText = useSelector((state:RootState) => state.infoText);

  useEffect(() => {
    window.scroll(0, 0);
  }, [])

  return (
    <>
      <div className={cx("container", 'inner-pages')}>
        <div dangerouslySetInnerHTML={{ __html: infoText }} />
      </div>
    </>
  )
}

export default Offerta;
