import { StaticImageData } from 'next/image';

export type TravelImageGridItem = {
  img: StaticImageData;
  name: string;
};

export type TravelImagesData = {
  RachelMorocco: StaticImageData;
  athens: StaticImageData;
  danielIreland: StaticImageData;
  gridPhotos: TravelImageGridItem[];
};

const travelImagesData: TravelImagesData = {
  RachelMorocco: require('assets/travel_photos/RachelMorocco.jpg'),
  athens: require('assets/travel_photos/athens.jpg'),
  danielIreland: require('assets/travel_photos/danielIreland.jpg'),
  gridPhotos: [
    { img: require('assets/travel_photos/rndflorence.png'), name: 'Florence, Italy' },
    { img: require('assets/travel_photos/dubrovnik.png'), name: 'Dubrovnik, Croatia' },
    { img: require('assets/travel_photos/rndtbilisi.png'), name: 'Tbilisi, Georgia' },
    { img: require('assets/travel_photos/vienna.png'), name: 'Vienna, Austria' },
    { img: require('assets/travel_photos/bokaap.png'), name: 'Cape Town, South Africa' },
    {
      img: require('assets/travel_photos/rndsarajevo.png'),
      name: 'Sarajevo, Bosnia and Herzegovina',
    },
    { img: require('assets/travel_photos/dublin.png'), name: 'Dublin, Ireland' },
    { img: require('assets/travel_photos/rndsafari.png'), name: 'Manyeleti, South Africa' },
  ],
};

export default travelImagesData;
