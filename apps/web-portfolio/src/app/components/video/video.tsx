'use client';

import * as Styles from './styles';

const Video = () => {
  return (
    <Styles.HeroMain>
      <video className="video-background" autoPlay loop muted>
        <source src="/assets/videos/xxxx.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Styles.StyleTriangle isLeft />
      <Styles.StyleTriangle />
    </Styles.HeroMain>
  );
};

export default Video;
