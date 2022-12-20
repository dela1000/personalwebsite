import event from 'assets/projects/rendezbrew/event.png';
import home from 'assets/projects/rendezbrew/home.png';
import myevent from 'assets/projects/rendezbrew/myevent.png';

import firstview from 'assets/projects/acrogenerator/firstview.png';
import secondview from 'assets/projects/acrogenerator/secondview.png';
import splash from 'assets/projects/acrogenerator/splash.png';

import recipesfirstview1 from 'assets/projects/recipes/1.png';
import recipessecondview1 from 'assets/projects/recipes/2.png';
import recipesthirdview1 from 'assets/projects/recipes/3.png';

const projectImages = {
  recipes: {
    firstImage: recipesfirstview1,
    secondImage: recipesthirdview1,
    thirdImage: recipessecondview1,
    header: 'Shopreceta',
    description:
      "Planning, shopping, and cooking made simple. Shopreceta helps you keep all your recipes in one place, create a shopping list with the recipe's ingredients, and view the recipe in a mobile and user friendly UI when cooking. It can be used on browsers and as iOS and Android mobile apps.",
    developed: 'React, React Native, NodeJS, and Firebase. Deployed to Netlify.',
  },
  rendezbrew: {
    firstImage: home,
    secondImage: event,
    thirdImage: myevent,
    header: 'Rendezbrew',
    description:
      'Rendezbrew helps you find a central location to meet with your friends. Create and event and it will determine the most central meeting point to get a drink depending on where everyone who is coming is located.',
    developed: 'React Native, NodeJS, and SQL. Deployed to AWS.',
  },
  acrogenerator: {
    firstImage: splash,
    secondImage: firstview,
    thirdImage: secondview,
    header: 'AcroGenerator',
    description:
      'The AcroGenerator helps partners find different connections between a number of positions. After selecting the difficulty and the number of positions you will see a randomized set of moves that you can try and connect.',
    developed: 'React Native, and NodeJS. Deployed to AWS.',
  },
};

export default projectImages;
