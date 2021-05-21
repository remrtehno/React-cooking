import React, { FC } from "react";
import cx from 'classnames';
import { useHistory } from "react-router-dom";
import s from './Back.module.scss';
import { ReactComponent as BackIcon } from "../../assets/img/back.svg";

export declare namespace BackProps {
  export type Props = {
    onClick?(): void,
  };
}

const Back: FC<BackProps.Props> = (props) => {
  const history = useHistory();
  const redirectToBack = () => history && history.goBack();
  return (
    <button type="button" className={cx(s.Back)}>
      <BackIcon className={cx(s.BackSvg)} onClick={props.onClick || redirectToBack} />
    </button>
  )
}

export default Back;
