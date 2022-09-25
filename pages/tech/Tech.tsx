import { useAppContext } from 'contexts/context';
import CenterContainer from 'components/CenterContainer';
import TextSection from 'components/TextSection';
import TechImagesGrid from 'components/TechImagesGrid';
import Hero from 'components/Hero';
import largeImagesData from 'adapters/largeImagesData';
import pageText from 'adapters/pageText';
import techImagesData from 'adapters/techImagesData';

import { UseAppContext, LargeImagesDataTypes } from 'types/types';

export default function Tech() {
  const {
    sharedState: { windowType, themeName },
  }: UseAppContext = useAppContext();
  const largeImagesDataWindowType = largeImagesData[windowType as keyof LargeImagesDataTypes];

  return (
    <div className={`${themeName === 'dark' ? 'dark-header' : 'light-header'}  fade-in`}>
      <Hero
        imageLink={largeImagesDataWindowType.praguebw.src}
        centerText={pageText.tech.topHero.primaryText}
        bottomText={pageText.tech.topHero.secondaryText}
        windowType={windowType}
      />
      <CenterContainer>
        <TextSection text={pageText.tech.header} description={pageText.tech.description} />
        <TechImagesGrid imagesData={techImagesData} />
      </CenterContainer>
      <Hero
        imageLink={largeImagesDataWindowType.barcelonabw.src}
        topText={pageText.tech.bottomHero.secondaryText}
        centerText={pageText.tech.bottomHero.primaryText}
        contactText={pageText.contactButton.contactMe}
        windowType={windowType}
      />
    </div>
  );
}
