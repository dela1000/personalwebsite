import { StaticImageData } from 'next/image';

export type ProjectData = {
  firstImage: StaticImageData;
  secondImage: StaticImageData;
  thirdImage: StaticImageData;
  header: string;
  description: string;
  developed: string;
};

export type ProjectsType = {
  [key: string]: ProjectData;
};

const projects: ProjectsType = {
  recipes: {
    firstImage: require('assets/projects/recipes/1.png'),
    secondImage: require('assets/projects/recipes/3.png'),
    thirdImage: require('assets/projects/recipes/2.png'),
    header: 'Shopreceta',
    description:
      "Planning, shopping, and cooking made simple. Shopreceta helps you keep all your recipes in one place, create a shopping list with the recipe's ingredients, and view the recipe in a mobile and user friendly UI when cooking. It can be used on browsers and as iOS and Android mobile apps.",
    developed: 'React, React Native, NodeJS, and Firebase. Deployed to Netlify.',
  },
  rendezbrew: {
    firstImage: require('assets/projects/rendezbrew/home.png'),
    secondImage: require('assets/projects/rendezbrew/event.png'),
    thirdImage: require('assets/projects/rendezbrew/myevent.png'),
    header: 'Rendezbrew',
    description:
      'Rendezbrew helps you find a central location to meet with your friends. Create and event and it will determine the most central meeting point to get a drink depending on where everyone who is coming is located.',
    developed: 'React Native, NodeJS, and SQL. Deployed to AWS.',
  },
  acrogenerator: {
    firstImage: require('assets/projects/acrogenerator/splash.png'),
    secondImage: require('assets/projects/acrogenerator/firstview.png'),
    thirdImage: require('assets/projects/acrogenerator/secondview.png'),
    header: 'AcroGenerator',
    description:
      'The AcroGenerator helps partners find different connections between a number of positions. After selecting the difficulty and the number of positions you will see a randomized set of moves that you can try and connect.',
    developed: 'React Native, and NodeJS. Deployed to AWS.',
  },
};

export default projects;
