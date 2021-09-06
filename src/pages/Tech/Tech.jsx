import React from 'react';
import PropTypes from 'prop-types';
import TopHero from '../../components/TopHero/index';
import largeImagesData from '../../adapters/imagesData';

export default function Tech({ windowType }) {
  return (
    <div>
      <TopHero imageLink={largeImagesData[windowType].praguebw} />
      <TopHero imageLink={largeImagesData[windowType].barcelonabw} />
    </div>
  );
}

Tech.propTypes = {
  windowType: PropTypes.string.isRequired,
};
