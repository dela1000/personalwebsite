import { useAppContext } from 'contexts/context';
import Hero from 'components/Hero';
import TravelSection from 'components/TravelSection';
import PersonalImagesGrid from 'components/PersonalImagesGrid';
import largeImagesData from 'adapters/largeImagesData';
import pageText from 'adapters/pageText';
import travelImagesData from 'adapters/travelImagesData';

import { UseAppContext } from 'types/types';

export default function Travel() {
  const {
    sharedState: { windowType, themeName }
  }: UseAppContext = useAppContext();

  return (
    <div className={`${themeName === 'dark' ? 'dark-header' : 'light-header'}  fade-in`}>
      <Hero
        imageLink={largeImagesData[windowType].benchbw.src}
        centerText={pageText.travel.topHero.primaryText}
        bottomText={pageText.travel.topHero.secondaryText}
        windowType={windowType}
      />
      <TravelSection
        travelText={pageText.travel}
        travelImagesData={travelImagesData}
        themeName={themeName}
      />
      <PersonalImagesGrid imagesData={travelImagesData.gridPhotos} />
      <Hero
        imageLink={largeImagesData[windowType].cliffsbw.src}
        centerText={pageText.travel.bottomHero.primaryText}
        windowType={windowType}
        contactText={pageText.travel.contactUs}
      />
    </div>
  );
}
