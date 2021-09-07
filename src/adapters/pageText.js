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
      primaryText: 'HIRE A SENIOR FULL STACK ENGINEER TODAY',
      secondaryText: 'Do you have a website idea and need help from an expert?',
    },
    name: 'DANIEL DE LA ROSA',
    header: 'Senior Full Stack Engineer',
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
      primaryText: 'HIRE A SENIOR FULL STACK ENGINEER TODAY',
      secondaryText: 'Do you have a website idea and need help from an expert?',
    },
    header: 'Experience goes a long way',
    description: `With over ${yearsinTech} years in the technology industry and more than ${yearsAsDev} as a Full Stack engineer, I have cultivated a strong background in program development, providing positive results on all the projects in which I have participated.`,
    resumeData: {
      experience: [
        {
          company: 'WeSpire',
          tag: 'Empower companies to design, run, and measure employee experience programs to improve social, environmental, and business outcomes.',
          title: 'Senior Full Stack Engineer',
          time: '2021-Current',
          bulletPoints: [
            'Principal pod lead managing a number of developers and guiding them to understand the codebase',
            'Plan the technical infrastructure of a new design system and begin its implementation into the existing codebase ',
            'Tackle new feature development while updating existing codebase to industry standards ',
          ],
        },
        {
          company: 'Near.co (previously UberMedia)',
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
            'Building full stack websites and mobile applications using only the latest technologies such as React.js and Node.js',
            "Provide complete application development for all of our clients' needs",
            'Support legacy products with any development updates, bugfixes, and 3rd party compliances',
          ],
        },
        {
          company: 'Near.co (previously UberMedia)',
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
          company: 'Near.co (previously UberMedia)',
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
        'With expertise on these technologies your website will be exactly as you want it.',
    },
    header: 'Creating what you want with the right tools',
    description:
      'Wielding a variety of technologies and support properties, website design and development becomes easier. Below is a condensed list of the technologies which will make your online presence be clear and concise.',
  },
  about: {
    topHero: {
      primaryText: 'PASSION. PERSONALITY. PERSPECTIVE.',
      secondaryText: 'Learn a bit more about who I am away from my laptop.',
    },
    bottomHero: {
      primaryText: 'HIRE A SENIOR FULL STACK ENGINEER TODAY',
      secondaryText: 'Do you have a website idea and need help from an expert?',
    },
    header: 'Fun Facts',
    description: `I am an avid partner-acrobatics certified educator, I have played drums for over ${
      yearsinTech * 2
    } years and guitar for ${yearsinTech}, ran the 2009 Los Angeles Marathon and a number of half-marathons, learned development with HackReactor, became a digital nomad in 2017 with Remote Year and have continued to travel the world visiting over 35 countries carrying a ukulele.`,
  },
  travel: {
    topHero: {
      primaryText: 'DEVIATE. DESIGN. DEPART.',
      secondaryText: 'Travel the world while "working from home".',
    },
    bottomHero: {
      primaryText: 'BEGIN YOUR WORK FROM HOME TRAVEL LIFE',
    },
    header: 'Curious about the digital nomad life?',
    travelPoints: [
      'Ready to deviate from the office life?',
      'Have you read The 4-Hour Workweek and thought to yourself, YES.',
      'Desire to achieve location independence but don’t know where to start?',
      'We are seasoned digital nomads, and we can help.',
    ],
    description:
      'You can spend hours, days, combing through digital nomad blogs, and get tons of info. We don’t know everything, and we haven’t invented the lifestyle, but how often can you have a one-on-one conversation in real time with someone who is actually doing this? We’ll share with you our personal journeys from being location-bound, stuff-bound, and not at all mobile, to eating cevapi in Bosnia, hiking Table Mountain in South Africa, taking care of chickens in Ireland, and many more experiences. What we do day to day, how we make decisions about where to go, how we manage money, how we cope with stuff, with lack of stuff, the incredible experiences, the level-3 fun, the moving, the loneliness, the languages, the newness...',
    thingsCovered: [
      'Prioritizing your priorities: Wifi, Safety, Fun. And more. Balancing the reckless fun with the adulting.',
      'Is digital nomading affordable? Extremely.',
      'Visas & the Beast: Schengen Zone.',
      'Build your tribe: how to keep a social life while on the road.',
      'MONEY & Tools.',
      'Perfect life? Not always. Here are some ways digital nomading can suck, so you’re prepared.',
    ],
    cost: ['$90 for 90 minutes.', 'It’s the cost of a nice date night.'],
    ddr: 'Daniel De La Rosa',
    dBio: ` has been traveling for over ${yearsinTech} years. After building a solid career in software development, in an office in Pasadena, California, he realized that he was in a position to do a redesign of the way he worked. He began working remotely, and shortly after he signed up to travel with the program Remote Year. After 12 months and 12 countries, there was no way he was going back to a desk. In the years that followed, Daniel developed a personal system that enabled him to continue the nomadic lifestyle while also achieving financial freedom, stability, and control.`,
    rw: 'Rachel Whitener',
    rBio: ' became successful as a professional chef in Los Angeles during her 10 years living in the city. After a trip to Morocco she saw the opportunity to travel the world and redefine herself as a digital nomad. A few months after joining Daniel, she started a new career as a Virtual Assistant and Account Manager while also teaching social media Master Classes. With a year of nomading under her belt, she has now visited over 10 countries and has a growing wishlist of new places to explore.',
    contactUs: 'contact us',
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
