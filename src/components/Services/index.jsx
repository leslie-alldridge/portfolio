import React from 'react';
import Icon1 from '../../images/cloud.svg';
import Icon2 from '../../images/call.svg';
import Icon3 from '../../images/monitor.svg';

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesH2,
  ServicesCard,
  ServicesIcon,
  ServicesP,
} from './ServiceElements';

const Services = () => {
  return (
    <>
      <ServicesContainer id='services'>
        <ServicesH1>Cloud Ready</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>AWS + Google</ServicesH2>
            <ServicesP>
              3 years AWS experience in a professional environment. Self
              learning Google Cloud services with personal projects.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Hybrid + Remote</ServicesH2>
            <ServicesP>
              Due to lockdowns and flexible working arrangements I have a
              dedicated office and all the tools required to work effectively in
              teams.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>CI/CD + Monitoring</ServicesH2>
            <ServicesP>
              I am passionate about creating and maintaining good CI/CD
              pipelines and monitoring tools. Experience with on-call incident
              response.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
