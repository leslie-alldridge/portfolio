export const Containers = [
  {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
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
    dark: false,
    primary: false,
    darkText: true,
  },
  {
    id: 'experience',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Experience',
    headline: 'Customer-centric',
    description: `With more than 10 years of customer service experience under my belt, 
    customers (users) remain at the front of my mind. 
    I have developed software in both large scale multi-billion dollar companies and small start ups. 
    I enjoy building software in a way that new staff members can contribute with ease.`,

    imgStart: true,
    img: require('../../images/website.svg').default,
    alt: 'Piggybank',
    dark: true,
    primary: false,
    darkText: false,
  },
  {
    id: 'contact',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Contact Me',
    description: `My LinkedIn profile is updated every quarter to reflect new pieces of work I have contributed to. 
      You will also be able to see what online courses and achievements I have completed outside of work. 
      This information is also included in my CV.`,
    buttonLabel: 'Learn more',
    imgStart: false,
    img: require('../../images/social.svg').default,
    alt: 'Piggybank',
    dark: false,
    primary: false,
    darkText: true,
  },
];
