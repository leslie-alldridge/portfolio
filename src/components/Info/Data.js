export const Containers = [
  {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About me',
    headline: 'Team Player',
    description: `
      I'm a highly motivated person with a strong technical background. 
      I love working in teams, breaking down problems and lateral
      thinking. I have experience working with multiple agile frameworks when delivering to customers. 
      Beyond the workplace you'll find me practising karate,
      lifting weights, solving Rubik's cubes, coding daily and
      volunteering my time to help others.
      `,
    imgStart: false,
    img: require('../../images/team.svg').default,
    alt: 'jira board',
    dark: true,
    primary: true,
    darkText: false,
  },
  {
    id: 'experience',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Experience',
    headline: 'Customer-centric',
    description: `With more than 10 years of customer service experience under my belt, 
    customers (users) remain at the front of my mind. 
    I have developed software in both large scale multi-billion dollar companies and small start ups. 
    I enjoy building software in a way that new staff members can contribute with ease.`,

    imgStart: true,
    img: require('../../images/website.svg').default,
    alt: 'Piggybank',
    dark: false,
    primary: false,
    darkText: true,
  },
  //   {
  //     id: 'services',
  //     lightBg: true,
  //     lightText: false,
  //     lightTextDesc: false,
  //     topLine: 'Premium Bank',
  //     headline: 'Unlimited transactions with zero fees',
  //     description:
  //       'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
  //     buttonLabel: 'Start now',
  //     imgStart: false,
  //     img: require('../../images/fast-car.svg').default,
  //     alt: 'Paper',
  //     dark: false,
  //     primary: false,
  //     darkText: true,
  //   },
  {
    id: 'contact',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Contact Me',
    description: `My LinkedIn is kept up to date every quarter to reflect new pieces of work I have contributed to. 
      You will also be able to see what online courses and achievements I have completed outside of work. 
      This information is also included in my CV.`,
    buttonLabel: 'Learn more',
    imgStart: true,
    img: require('../../images/social.svg').default,
    alt: 'Piggybank',
    dark: true,
    primary: false,
    darkText: false,
  },
];
