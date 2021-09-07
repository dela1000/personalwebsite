import { useEffect } from 'react';
import PropTypes from 'prop-types';

import Hero from '../../components/Hero/index';
import CenterContainer from '../../components/CenterContainer/index';
import TextSection from '../../components/TextSection/index';
import PersonalImagesGrid from '../../components/PersonalImagesGrid/index';
import largeImagesData from '../../adapters/largeImagesData';
import pageText from '../../adapters/pageText';
import personalImagesData from '../../adapters/personalImagesData';

export default function About({ windowType }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="fade-in">
      <Hero
        imageLink={largeImagesData[windowType].eterabw}
        centerText={pageText.about.topHero.primaryText}
        bottomText={pageText.about.topHero.secondaryText}
        windowType={windowType}
      />
      <CenterContainer>
        <TextSection text={pageText.about.header} description={pageText.about.description} />
      </CenterContainer>
      <PersonalImagesGrid imagesData={personalImagesData} />
      <Hero
        imageLink={largeImagesData[windowType].barcelonabw}
        centerText={pageText.about.bottomHero.primaryText}
        topText={pageText.about.bottomHero.secondaryText}
        contactText={pageText.contactButton.contactMe}
        windowType={windowType}
      />
    </div>
  );
}

About.propTypes = {
  windowType: PropTypes.string.isRequired,
};
