import React, { useState } from 'react';
import { Button } from '../ButtonElements';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroP,
  HeroContent,
  HeroH1,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements';

import Video from '../../videos/islands.mp4';

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay muted loop src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Leslie Alldridge</HeroH1>
        <HeroP>
          Full Stack Software Engineer with cloud infrastructure experience
          based in Wellington, New Zealand
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='./favicon.ico'
            target='_blank'
            download
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
          >
            Download CV {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
