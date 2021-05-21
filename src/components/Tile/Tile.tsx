import React, { FC } from "react";
import cx from 'classnames';
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import s from './Tile.module.scss';
import {Maybe} from "../../generated/graphql";
import playIcon from "../../assets/img/play-button.svg";

export declare namespace TileProps {
  export type Props = {
    img: string,
    link: string,
    name: string,
    description?: Maybe<string>,
    type?: Maybe<string>,
    isBig?: boolean,
  };
}

const Tile: FC<TileProps.Props> = (props) => (
  <div className={cx(s.Tile, s.Item, props.isBig ? s.Big : '')}>
    <Link to={props.link}>
      <div className={s.ContentPreview}>
        <div className={s.ContentItemPreviewImageWrap}>
          <div className={s.ContentItemPreviewImageLazy} />
          <LazyLoad>
            <div
              className={s.ContentItemPreviewImage}
              style={
                { backgroundImage: `url(${props.img}) url(${playIcon})` }
              }
            />
          </LazyLoad>
        </div>
        <div className={s.ContentDescription}>
          <div className={s.ContentDescriptionName}>
            <div className={s.ContentDescriptionNameHide}>{props.name}</div>
          </div>
          <div className={s.ContentDescriptionType}>{props.type}</div>
          <div className={s.ContentDescriptionDescription}>{props.description}</div>
        </div>
      </div>
    </Link>
  </div>
)

export default Tile;
