import React from 'react';
import PropTypes from 'prop-types';
import TopHero from '../../components/TopHero/index';
import BottomHero from '../../components/BottomHero/index';
import largeImagesData from '../../adapters/largeImagesData';
import pageText from '../../adapters/pageText';

export default function Resume({ windowType }) {
  return (
    <div>
      <TopHero
        imageLink={largeImagesData[windowType].keyboardbw}
        primaryText={pageText.resume.topHero.primaryText}
        secondaryText={pageText.resume.topHero.secondaryText}
        windowType={windowType}
      />
      <BottomHero
        imageLink={largeImagesData[windowType].lisbonbw}
        primaryText={pageText.resume.bottomHero.primaryText}
        secondaryText={pageText.resume.bottomHero.secondaryText}
        windowType={windowType}
      />
    </div>
  );
}

Resume.propTypes = {
  windowType: PropTypes.string.isRequired,
};
