import { useAppContext } from 'contexts/context';
import Hero from 'components/Hero';
import CenterContainer from 'components/CenterContainer';
import TextSection from 'components/TextSection';
import ResumeHolder from 'components/ResumeHolder';
import largeImagesData from 'adapters/largeImagesData';
import pageText from 'adapters/pageText';

import { UseAppContext, LargeImagesDataTypes } from 'types/types';

export default function Resume() {
  const {
    sharedState: { windowType, themeName = 'dark' },
  }: UseAppContext = useAppContext();
  const largeImagesDataWindowType = largeImagesData[windowType as keyof LargeImagesDataTypes];

  return (
    <div className={`${themeName === 'dark' ? 'dark-header' : 'light-header'}  fade-in`}>
      <Hero
        imageLink={largeImagesDataWindowType.keyboardbw.src}
        centerText={pageText.resume.topHero.primaryText}
        bottomText={pageText.resume.topHero.secondaryText}
        windowType={windowType}
      />
      <CenterContainer>
        <TextSection text={pageText.resume.header} description={pageText.resume.description} />
      </CenterContainer>
      <ResumeHolder resumeData={pageText.resume.resumeData} themeName={themeName} />
      <Hero
        imageLink={largeImagesDataWindowType.lisbonbw.src}
        topText={pageText.resume.bottomHero.secondaryText}
        centerText={pageText.resume.bottomHero.primaryText}
        contactText={pageText.contactButton.contactMe}
        windowType={windowType}
      />
    </div>
  );
}
