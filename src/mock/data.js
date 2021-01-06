import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '👨🏻‍💻 Conor Hinchee Full Stack Web Developer 👨🏻‍💻', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'I work with clients to build their brand and solve their problems on the web.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Conor Hinchee!',
  subtitle: 'I am a full stack web developer working to help businesses succeed.',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'ConorHinchee.jpg',
  paragraphOne:
    'I am passionate about all things World Wide Web and am a JavaScript evangelist. I have worked as a freelancer, independent contractor, and helped found a start-up.',
  paragraphTwo:
    'I like working in TypeScript and using ReactJS. I like building Rest API endpoints using NodeJS. I enjoy using Google Cloud as a starting place for most projects. I am familiar with Git and using Github. I like to working using Agile methodologies and building, using, and implementing CI/CD pipelines.',
  paragraphThree: 'I am currently looking for my next big adventure!',
  resume: 'Conor_Hinchee_Resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Thumbnail_Line-Eyes.png',
    title: 'Line Eyes',
    info: 'Tinder style pregnancy test result checker ',
    info2:
      'Users upload their pregnancy/ovulation tests and other users vote if they think the test shows a positive,negative, or invalid result.',
    url: '',
    repo: 'https://github.com/captnstarburst/line-eyes-web',
  },
  {
    id: nanoid(),
    img: 'Thumbnail_Resolvve.png',
    title: 'Resolvve',
    info: 'Resolvve is a social media app, where users pay money to get things done',
    info2:
      'I worked on the integration of payments utilizing both Stripe and StripeConnect. I built private REST API endpoints on the google cloud platform usingNodeJS and Typescript. Assisted in building user interfaces using React andBootstrap',
    url: 'https://resolvve.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Thumbnail_ThoseGuys.png',
    title: 'Those Guys Appliance Repair',
    info: 'Home town appliance repair business',
    info2:
      'I focused heavily on SEO and lead generation. Building out a site that quickly replaced competitors in google indexes. The site featured reviews and a in page messaging system.',
    url: 'https://github.com/captnstarburst/ThoseGuysApplianceRepair',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'conorphinchee@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/ConorHinchee',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/captnstarburst',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/conor-hinchee/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/captnstarburst',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
