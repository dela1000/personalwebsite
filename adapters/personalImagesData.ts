import { StaticImageData } from 'next/image';

export type ImageDataType = {
  name: string;
  img: StaticImageData;
};

const personalImagesData: ImageDataType[] = [
  { img: require('assets/photos/running.jpg'), name: 'Sofia, Bulgaria' },
  { img: require('assets/photos/guell.jpg'), name: 'Barcelona, Spain' },
  { img: require('assets/photos/lennon.jpg'), name: 'Prague, Czechia' },
  { img: require('assets/photos/osaka.jpg'), name: 'Osaka, Japan' },
  { img: require('assets/photos/krka.jpg'), name: 'Krka, Croatia' },
  { img: require('assets/photos/sa.jpg'), name: 'Cape Town, South Africa' },
  { img: require('assets/photos/thailand.jpg'), name: 'Doi Inthanon, Thailand' },
  { img: require('assets/photos/dog.jpg'), name: 'Weston, Florida' },
];

export default personalImagesData;
