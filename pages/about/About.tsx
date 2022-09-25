import { useAppContext } from 'contexts/context';
import Hero from 'components/Hero';
import CenterContainer from 'components/CenterContainer';
import TextSection from 'components/TextSection';
import PersonalImagesGrid from 'components/PersonalImagesGrid';
import largeImagesData from 'adapters/largeImagesData';
import pageText from 'adapters/pageText';
import personalImagesData from 'adapters/personalImagesData';

import { UseAppContext, LargeImagesDataTypes } from 'types/types';

export default function About() {
  const {
    sharedState: { windowType = 'desktop', themeName },
  }: UseAppContext = useAppContext();
  const largeImagesDataWindowType = largeImagesData[windowType as keyof LargeImagesDataTypes];

  return (
    <div className={`${themeName === 'dark' ? 'dark-header' : 'light-header'}  fade-in`}>
      <Hero
        imageLink={largeImagesDataWindowType.eterabw.src}
        centerText={pageText.about.topHero.primaryText}
        bottomText={pageText.about.topHero.secondaryText}
        windowType={windowType}
      />
      <CenterContainer>
        <TextSection text={pageText.about.header} description={pageText.about.description} />
      </CenterContainer>
      <PersonalImagesGrid imagesData={personalImagesData} />
      <Hero
        imageLink={largeImagesDataWindowType.barcelonabw.src}
        centerText={pageText.about.bottomHero.primaryText}
        topText={pageText.about.bottomHero.secondaryText}
        contactText={pageText.contactButton.contactMe}
        windowType={windowType}
      />
    </div>
  );
}
