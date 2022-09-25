import { useAppContext } from 'contexts/context';
import Hero from 'components/Hero';
import TravelSection from 'components/TravelSection';
import PersonalImagesGrid from 'components/PersonalImagesGrid';
import largeImagesData from 'adapters/largeImagesData';
import pageText from 'adapters/pageText';
import travelImagesData from 'adapters/travelImagesData';

import { UseAppContext, LargeImagesDataTypes } from 'types/types';

export default function Travel() {
  const {
    sharedState: { windowType, themeName = 'dark' },
  }: UseAppContext = useAppContext();
  const largeImagesDataWindowType = largeImagesData[windowType as keyof LargeImagesDataTypes];

  return (
    <div className={`${themeName === 'dark' ? 'dark-header' : 'light-header'}  fade-in`}>
      <Hero
        imageLink={largeImagesDataWindowType.benchbw.src}
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
        imageLink={largeImagesDataWindowType.cliffsbw.src}
        centerText={pageText.travel.bottomHero.primaryText}
        windowType={windowType}
        contactText={pageText.travel.contactUs}
      />
    </div>
  );
}
