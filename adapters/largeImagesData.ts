import { StaticImageData } from 'next/image';

type DesktopImages = {
  acropolisbw: StaticImageData;
  albaiuliabw: StaticImageData;
  barcelonabw: StaticImageData;
  benchbw: StaticImageData;
  cliffsbw: StaticImageData;
  eterabw: StaticImageData;
  fesbw: StaticImageData;
  halongbaybw: StaticImageData;
  karlstejnbw: StaticImageData;
  keyboardbw: StaticImageData;
  lisbonbw: StaticImageData;
  merzougabw: StaticImageData;
  mexicocitybw: StaticImageData;
  portobw: StaticImageData;
  praguebw: StaticImageData;
  sintrabw: StaticImageData;
};

type MobileImages = {
  acropolisbw: StaticImageData;
  albaiuliabw: StaticImageData;
  barcelonabw: StaticImageData;
  benchbw: StaticImageData;
  cliffsbw: StaticImageData;
  eterabw: StaticImageData;
  fesbw: StaticImageData;
  halongbaybw: StaticImageData;
  karlstejnbw: StaticImageData;
  keyboardbw: StaticImageData;
  lisbonbw: StaticImageData;
  merzougabw: StaticImageData;
  mexicocitybw: StaticImageData;
  portobw: StaticImageData;
  praguebw: StaticImageData;
  sintrabw: StaticImageData;
};

export type LargeImagesDataType = {
  desktop: DesktopImages;
  mobile: MobileImages;
};

const largeImagesData: LargeImagesDataType = {
  desktop: {
    acropolisbw: require('assets/bg-photos/desktop/acropolisbw.jpg'),
    albaiuliabw: require('assets/bg-photos/desktop/albaiuliabw.jpg'),
    barcelonabw: require('assets/bg-photos/desktop/barcelonabw.jpg'),
    benchbw: require('assets/bg-photos/desktop/benchbw.jpg'),
    cliffsbw: require('assets/bg-photos/desktop/cliffsbw.jpg'),
    eterabw: require('assets/bg-photos/desktop/eterabw.jpg'),
    fesbw: require('assets/bg-photos/desktop/fesbw.jpg'),
    halongbaybw: require('assets/bg-photos/desktop/halongbaybw.jpg'),
    karlstejnbw: require('assets/bg-photos/desktop/karlstejnbw.jpg'),
    keyboardbw: require('assets/bg-photos/desktop/keyboardbw.jpg'),
    lisbonbw: require('assets/bg-photos/desktop/lisbonbw.jpg'),
    merzougabw: require('assets/bg-photos/desktop/merzougabw.jpg'),
    mexicocitybw: require('assets/bg-photos/desktop/mexicocitybw.jpg'),
    portobw: require('assets/bg-photos/desktop/portobw.jpg'),
    praguebw: require('assets/bg-photos/desktop/praguebw.jpg'),
    sintrabw: require('assets/bg-photos/desktop/sintrabw.jpg'),
  },
  mobile: {
    acropolisbw: require('assets/bg-photos/mobile/acropolisbw.jpg'),
    albaiuliabw: require('assets/bg-photos/mobile/albaiuliabw.jpg'),
    barcelonabw: require('assets/bg-photos/mobile/barcelonabw.jpg'),
    benchbw: require('assets/bg-photos/mobile/benchbw.jpg'),
    cliffsbw: require('assets/bg-photos/mobile/cliffsbw.jpg'),
    eterabw: require('assets/bg-photos/mobile/eterabw.jpg'),
    fesbw: require('assets/bg-photos/mobile/fesbw.jpg'),
    halongbaybw: require('assets/bg-photos/mobile/halongbaybw.jpg'),
    karlstejnbw: require('assets/bg-photos/mobile/karlstejnbw.jpg'),
    keyboardbw: require('assets/bg-photos/mobile/keyboardbw.jpg'),
    lisbonbw: require('assets/bg-photos/mobile/lisbonbw.jpg'),
    merzougabw: require('assets/bg-photos/mobile/merzougabw.jpg'),
    mexicocitybw: require('assets/bg-photos/mobile/mexicocitybw.jpg'),
    portobw: require('assets/bg-photos/mobile/portobw.jpg'),
    praguebw: require('assets/bg-photos/mobile/praguebw.jpg'),
    sintrabw: require('assets/bg-photos/mobile/sintrabw.jpg'),
  },
};

export default largeImagesData;
