import moment from 'moment';

const yearsAsDev = moment().diff('2015-01-01', 'years', false);
const yearsinTech = moment().diff('2011-01-01', 'years', false);
const currentYear = moment().format('YYYY');

const pageText = {
  home: {
    topHero: {
      primaryText: 'DESIGN. DEVELOP. DELIVER.',
      secondaryText: 'Creating meaningful experiences through unique online ventures',
    },
    bottomHero: {
      primaryText: 'HIRE A FULL-STACK ENGINEER TODAY',
      secondaryText: 'Do you have a website idea and need help from an expert?',
    },
    name: 'DANIEL DE LA ROSA',
    header: 'Full Stack Software Engineer',
    description: `With over ${yearsAsDev} years of experience effectively coding websites and applications, my career has included building scalable online projects from the ground up, maintaining and debugging client-facing products, and updating legacy code to match the rapidly changing standards required to run applications securely and efficiently.`,
  },
  projects: {
    topHero: {
      primaryText: 'PLAN. PRODUCE. PUBLISH.',
      secondaryText: 'Creating meaningful experiences through unique online ventures',
    },
    bottomHero: {
      primaryText: 'GET YOUR WEB PROJECT STARTED TODAY',
      secondaryText: 'Do you have a project idea and need help from an expert?',
    },
  },
  resume: {
    topHero: {
      primaryText: 'EXHAUSTIVE. EXTENSIVE. EXPANDED.',
      secondaryText: 'Review a bit more about my professional background',
    },
    bottomHero: {
      primaryText: 'HIRE A FULL-STACK ENGINEER TODAY',
      secondaryText: 'Do you have a website idea and need help from an expert?',
    },
    header: 'Experience goes a long way',
    description: `With over ${yearsinTech} years in the technology industry and more than ${yearsAsDev} as a Full Stack software engineer, I have cultivated a strong background in program development, providing positive results on all the projects in which I have participated.`,
    resumeData: {
      experience: [
        {
          company: 'WeSpire',
          tag: 'Empower companies to design, run, and measure employee experience programs to improve social, environmental, and business outcomes.',
          title: 'Senior Full Stack Engineer',
          time: '2021-Current',
          bulletPoints: [
            '• Principal pod lead managing a number of developers and guiding them to understand the codebase',
            'Plan the technical infrastructure of a new design system and begin its implementation into the existing codebase ',
            'Tackle new feature development while updating existing codebase to industry standards ',
          ],
        },
        {
          company: 'UberMedia',
          tag: 'Leading independent developer of dynamic advertising and mobile data solutions, and feature-rich mobile applications',
          title: 'Full Stack Engineer II',
          time: '2016-2021',
          bulletPoints: [
            'Expert development in Angular.js, Vue.js, Node.js, and Ruby on Rails',
            'Support legacy products with any development updates, bugfixes, and 3rd party compliances',
            'Provide primary frontend development for all of UberMedia offerings',
          ],
        },
        {
          company: 'Xupe',
          tag: 'Plan, design, and develop beautiful websites and applications tailored to your business',
          title: 'Full Stack Engineer',
          time: '2020-2021',
          bulletPoints: [
            'Building full-stack websites and mobile applications using only the latest technologies such as React.js and Node.js',
            "Provide complete application development for all of our clients' needs",
            'Support legacy products with any development updates, bugfixes, and 3rd party compliances',
          ],
        },
        {
          company: 'UberMedia',
          tag: 'Leading independent developer of dynamic advertising and mobile data solutions, and feature-rich mobile applications',
          title: 'Quality Assurance Engineer',
          time: '2014-2016',
          bulletPoints: [
            'Identify, record, document, and track bugs using Sprint.ly and Jira Project Tracking software',
            'Design, develop, and execute automation scripts for test plans and test cases using Selenium IDE',
            'Perform thorough regression testing with Selenium IDE and manually when needed when bugs are resolved',
          ],
        },
        {
          company: 'UberMedia',
          tag: 'Leading independent developer of dynamic advertising and mobile data solutions, and feature-rich mobile applications',
          title: 'Associate Community Manager',
          time: '2011-2014',
          bulletPoints: [
            'Provided customer support for multiple mobile applications using Zendesk, Tender Support, and TwitSpark',
            'Planned and implemented engagement programs for applications using Twitter, Facebook, and YouTube',
            'Drafted, developed and executed a communication program to 9 million Twitter followers',
          ],
        },
      ],
      education: [
        {
          school: 'HackReactor',
          degree: 'Advanced Software Engineering',
          time: '2015-2016',
        },
        {
          school: 'University of California, Irvine',
          degree: 'BA Art History',
          time: '2005-2008',
        },
        {
          school: 'University of California, Irvine',
          degree: 'BA Sociology',
          time: '2005-2008',
        },
      ],
    },
  },
  tech: {
    topHero: {
      primaryText: 'CONCEIVE. COMPOSE. CREATE.',
      secondaryText: 'The tools of my trade',
    },
    bottomHero: {
      primaryText: 'GET YOUR WEB PROJECT STARTED TODAY',
      secondaryText:
        'With expertise on these technologies your website will be exactly as you desire.',
    },
    header: 'Creating what you want with the right tools',
    description:
      'Wielding a variety of technologies and support properties, website design and development becomes easier. Below is a condensed list of the technologies which will make your online presence be clear and concise.',
  },
  contactButton: {
    contactMe: 'CONTACT ME',
    contactEmail: 'dela1000@gmail.com',
  },
  footer: {
    header: 'Create beautiful, responsive, and interactive websites exactly as you want them.',
    top: `© ${currentYear} Daniel De La Rosa. All rights reserved.`,
    middle: 'All photos by Daniel De La Rosa.',
    bottom: 'Developed with React and deployed to Netlify.',
  },
};

export default pageText;
