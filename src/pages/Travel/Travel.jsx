import React from 'react';
import PropTypes from 'prop-types';
import TopHero from '../../components/TopHero/index';
import largeImagesData from '../../adapters/largeImagesData';

export default function Travel({ windowType }) {
  return (
    <div>
      <TopHero imageLink={largeImagesData[windowType].benchbw} />
      <TopHero imageLink={largeImagesData[windowType].cliffsbw} />
    </div>
  );
}

Travel.propTypes = {
  windowType: PropTypes.string.isRequired,
};
