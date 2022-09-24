import type { NextPage } from 'next';
import Hero from 'components/Hero';
import CenterContainer from 'components/CenterContainer';
import TextSection from 'components/TextSection';
import largeImagesData from 'adapters/largeImagesData';
import pageText from 'adapters/pageText';
import { useAppContext } from 'contexts/context';

import { UseAppContext } from 'types/types';

const Home: NextPage = () => {
  const {
    sharedState: { windowType, themeName }
  }: UseAppContext = useAppContext();

  return (
    <div className={`${themeName === 'dark' ? 'dark-header' : 'light-header'}  fade-in`}>
      <Hero
        imageLink={largeImagesData[windowType].merzougabw.src}
        centerText={pageText.home.topHero.primaryText}
        bottomText={pageText.home.topHero.secondaryText}
        windowType={windowType}
      />
      <CenterContainer>
        <TextSection
          name={pageText.home.name}
          text={pageText.home.header}
          description={pageText.home.description}
        />
      </CenterContainer>
      <Hero
        imageLink={largeImagesData[windowType].halongbaybw.src}
        topText={pageText.home.bottomHero.secondaryText}
        centerText={pageText.home.bottomHero.primaryText}
        contactText={pageText.contactButton.contactMe}
        windowType={windowType}
      />
    </div>
  );
};

export default Home;
