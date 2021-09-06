import React from 'react';
import PropTypes from 'prop-types';
import TopHero from '../../components/TopHero/index';
import largeImagesData from '../../adapters/largeImagesData';

export default function Resume({ windowType }) {
  return (
    <div>
      <TopHero imageLink={largeImagesData[windowType].keyboardbw} />
      <TopHero imageLink={largeImagesData[windowType].lisbonbw} />
    </div>
  );
}

Resume.propTypes = {
  windowType: PropTypes.string.isRequired,
};
