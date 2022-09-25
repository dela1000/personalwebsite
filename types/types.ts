import { ReactNode } from 'react';

export type ChildrenTypes = {
  children: ReactNode | ReactNode[];
};

type ImgData = {
  src: string;
};

type ImageTypes = {
  firstImage: ImgData;
  secondImage: ImgData;
  thirdImage: ImgData;
};

export type ProjectImagesSectionTypes = {
  imagesObj: ImageTypes;
};

export type ImageDataTypes = {
  name: string;
  img: ImgData;
};

export type ImagesGridTypes = {
  imagesData: ImageDataTypes[];
};

export type Education = {
  degree: string;
  school: string;
  time: string;
};

export type Experience = {
  bulletPoints: string[];
  company: string;
  tag: string;
  time: string;
  title: string;
};

export type ResumeData = {
  experience: Experience[];
  education: Education[];
};

export type TextSectionTypes = {
  name?: string;
  text?: string;
  description?: string;
  developed?: string;
};

export type TravelImagesDataTypes = {
  RachelMorocco: ImgData;
  athens: ImgData;
  danielIreland: ImgData;
  gridPhotos: ImageDataTypes[];
  thingsCovered: string[];
};

export type TravelTextTypes = {
  topHero: {
    primaryText: string;
    secondaryText: string;
  };
  bottomHero: {
    primaryText: string;
  };
  header: string;
  travelPoints: string[];
  description: string;
  thingsCovered: string[];
  cost: string[];
  ddr: string;
  dBio: string;
  rw: string;
  rBio: string;
  contactUs: string;
};

export type HeroTypes = {
  imageLink?: string;
  topText?: string;
  centerText?: string;
  bottomText?: string;
  windowType?: string;
  contactText?: string;
};

export type UseAppContext = {
  sharedState: {
    navbarState?: boolean;
    windowType?: string;
    themeName?: string;
  };
  toggleTheme?: () => null;
  toggleNavbar?: (close: string | boolean) => null;
};
