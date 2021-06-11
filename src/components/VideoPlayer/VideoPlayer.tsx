import React, { FC } from "react";
import cx from 'classnames';
import s from './VideoPlayer.module.scss';

export declare namespace VideoPlayerProps {
  export type Props = {
    src: string,
    poster?: string,
  };
}

const VideoPlayer: FC<VideoPlayerProps.Props> = (props) => (
  <div className={cx(s.VideoPlayer)}>
    <video autoPlay className={s.VideoPlayerTag} controls src={props.src} poster={props.poster} />
  </div>
)

export default VideoPlayer;
