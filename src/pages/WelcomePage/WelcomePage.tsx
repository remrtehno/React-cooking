import React from "react";
import useWelcome from "../../hooks/useWelcome";
import s from './WelcomePage.module.scss';

const WelcomePage = () => {
  const info = useWelcome();
  return (
    <div className={s.WelcomePage} dangerouslySetInnerHTML={{ __html: info }} />
  )
}

export default WelcomePage;
