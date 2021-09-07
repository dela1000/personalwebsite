import { useEffect } from 'react';
import PropTypes from 'prop-types';
import TopHero from '../../components/TopHero/index';
import BottomHero from '../../components/BottomHero/index';
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
      <TopHero
        imageLink={largeImagesData[windowType].eterabw}
        primaryText={pageText.about.topHero.primaryText}
        secondaryText={pageText.about.topHero.secondaryText}
        windowType={windowType}
      />
      <CenterContainer>
        <TextSection text={pageText.about.header} description={pageText.about.description} />
      </CenterContainer>
      <PersonalImagesGrid imagesData={personalImagesData} />
      <BottomHero
        imageLink={largeImagesData[windowType].barcelonabw}
        primaryText={pageText.about.topHero.primaryText}
        secondaryText={pageText.about.topHero.secondaryText}
        contactText={pageText.contactButton.contactMe}
        windowType={windowType}
      />
    </div>
  );
}

About.propTypes = {
  windowType: PropTypes.string.isRequired,
};
