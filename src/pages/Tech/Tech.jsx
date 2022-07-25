import { useEffect } from 'react';
import PropTypes from 'prop-types';
import CenterContainer from 'components/CenterContainer';
import TextSection from 'components/TextSection';
import TechImagesGrid from 'components/TechImagesGrid';
import Hero from 'components/Hero';
import largeImagesData from 'adapters/largeImagesData';
import pageText from 'adapters/pageText';
import techImagesData from 'adapters/techImagesData';

export default function Tech({ windowType }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="fade-in">
      <Hero
        imageLink={largeImagesData[windowType].praguebw}
        centerText={pageText.tech.topHero.primaryText}
        bottomText={pageText.tech.topHero.secondaryText}
        windowType={windowType}
      />
      <CenterContainer>
        <TextSection text={pageText.tech.header} description={pageText.tech.description} />
        <TechImagesGrid imagesData={techImagesData} />
      </CenterContainer>
      <Hero
        imageLink={largeImagesData[windowType].barcelonabw}
        topText={pageText.tech.bottomHero.secondaryText}
        centerText={pageText.tech.bottomHero.primaryText}
        contactText={pageText.contactButton.contactMe}
        windowType={windowType}
      />
    </div>
  );
}

Tech.propTypes = {
  windowType: PropTypes.string.isRequired,
};
