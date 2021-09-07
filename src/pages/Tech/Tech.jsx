import React from 'react';
import PropTypes from 'prop-types';
import TopHero from '../../components/TopHero/index';
import CenterContainer from '../../components/CenterContainer/index';
import TextSection from '../../components/TextSection/index';
import TechImagesGrid from '../../components/TechImagesGrid/index';
import BottomHero from '../../components/BottomHero/index';
import largeImagesData from '../../adapters/largeImagesData';
import pageText from '../../adapters/pageText';
import techImagesData from '../../adapters/techImagesData';

export default function Tech({ windowType }) {
  return (
    <div>
      <TopHero
        imageLink={largeImagesData[windowType].praguebw}
        primaryText={pageText.tech.topHero.primaryText}
        secondaryText={pageText.tech.topHero.secondaryText}
        windowType={windowType}
      />
      <CenterContainer>
        <TextSection text={pageText.tech.header} description={pageText.tech.description} />
        <TechImagesGrid imagesData={techImagesData} />
      </CenterContainer>
      <BottomHero
        imageLink={largeImagesData[windowType].barcelonabw}
        primaryText={pageText.tech.bottomHero.primaryText}
        secondaryText={pageText.tech.bottomHero.secondaryText}
        contactText={pageText.contactButton.contactMe}
        windowType={windowType}
      />
    </div>
  );
}

Tech.propTypes = {
  windowType: PropTypes.string.isRequired,
};
