import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Hero from 'components/Hero';
import CenterContainer from 'components/CenterContainer';
import TextSection from 'components/TextSection';
import largeImagesData from 'adapters/largeImagesData';
import pageText from 'adapters/pageText';

export default function Home({ windowType }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="fade-in">
      <Hero
        imageLink={largeImagesData[windowType].merzougabw}
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
        imageLink={largeImagesData[windowType].halongbaybw}
        topText={pageText.home.bottomHero.secondaryText}
        centerText={pageText.home.bottomHero.primaryText}
        contactText={pageText.contactButton.contactMe}
        windowType={windowType}
      />
    </div>
  );
}

Home.propTypes = {
  windowType: PropTypes.string.isRequired,
};
