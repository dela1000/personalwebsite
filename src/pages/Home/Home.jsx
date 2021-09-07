import { useEffect } from 'react';
import PropTypes from 'prop-types';
import TopHero from '../../components/TopHero/index';
import BottomHero from '../../components/BottomHero/index';
import CenterContainer from '../../components/CenterContainer/index';
import TextSection from '../../components/TextSection/index';
import largeImagesData from '../../adapters/largeImagesData';
import pageText from '../../adapters/pageText';

export default function Home({ windowType }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="fade-in">
      <TopHero
        imageLink={largeImagesData[windowType].merzougabw}
        primaryText={pageText.home.topHero.primaryText}
        secondaryText={pageText.home.topHero.secondaryText}
        windowType={windowType}
      />
      <CenterContainer>
        <TextSection
          name={pageText.home.name}
          text={pageText.home.header}
          description={pageText.home.description}
        />
      </CenterContainer>
      <BottomHero
        imageLink={largeImagesData[windowType].halongbaybw}
        primaryText={pageText.home.bottomHero.primaryText}
        secondaryText={pageText.home.bottomHero.secondaryText}
        contactText={pageText.contactButton.contactMe}
        windowType={windowType}
      />
    </div>
  );
}

Home.propTypes = {
  windowType: PropTypes.string.isRequired,
};
