import React from "react";
import s from './Loader.module.scss';
import LoaderImage from '../../assets/img/loader.gif'

const Loader = () => (<div className={s.Loader}><img src={LoaderImage} alt="" /></div>)

export default Loader;
