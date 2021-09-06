import event from '../assets/projects/rendezbrew/event.png';
import home from '../assets/projects/rendezbrew/home.png';
import myevent from '../assets/projects/rendezbrew/myevent.png';

import firstview from '../assets/projects/acrogenerator/firstview.png';
import secondview from '../assets/projects/acrogenerator/secondview.png';
import splash from '../assets/projects/acrogenerator/splash.png';

const projectImages = [
  {
    firstImage: home,
    secondImage: event,
    thirdImage: myevent,
    header: 'Rendezbrew',
    description:
      'Rendezbrew helps you find a central location to meet with your friends. Create and event and it will determine the most central meeting point to get a drink depending on where everyone who is coming is located.',
    developed: 'React Native, NodeJS, and SQL. Deployed to AWS.',
  },
  {
    firstImage: splash,
    secondImage: firstview,
    thirdImage: secondview,
    header: 'AcroGenerator',
    description:
      'The AcroGenerator helps partners find different connections between a number of positions. After selecting the difficulty and the number of positions you will see a randomized set of moves that you can try and connect.',
    developed: 'React Native, and NodeJS. Deployed to AWS.',
  },
];

export default projectImages;
