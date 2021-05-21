import React, { FC } from "react";
import cx from 'classnames';
import s from './VideoPlayer.module.scss';

export declare namespace VideoPlayerProps {
  export type Props = {
    src: string,
  };
}

const VideoPlayer: FC<VideoPlayerProps.Props> = (props) => {
  return (
    <div className={cx(s.VideoPlayer)}>
      <video className={s.VideoPlayerTag} controls src={props.src} poster={props.src} />
    </div>
  )
}

export default VideoPlayer;
