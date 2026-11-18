import { StaticImageData } from 'next/image';

export type TechImageData = {
  name: string;
  img: StaticImageData;
};

const techImagesData: TechImageData[] = [
  { img: require('assets/logos/javascript.png'), name: 'Javascript' },
  { img: require('assets/logos/typescript.png'), name: 'Typescript' },
  { img: require('assets/logos/react.png'), name: 'React/Native' },
  { img: require('assets/logos/vue.png'), name: 'Vue' },
  { img: require('assets/logos/angular.png'), name: 'Angular' },
  { img: require('assets/logos/node.png'), name: 'Node' },
  { img: require('assets/logos/html.png'), name: 'HTML' },
  { img: require('assets/logos/css.png'), name: 'CSS' },
  { img: require('assets/logos/git.png'), name: 'git' },
  { img: require('assets/logos/tailwind.png'), name: 'TailwindCSS' },
  { img: require('assets/logos/bootstrap.png'), name: 'Bootstrap' },
  { img: require('assets/logos/adobe.png'), name: 'Adobe' },
];

export default techImagesData;
