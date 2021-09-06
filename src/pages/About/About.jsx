import React from 'react';
import PropTypes from 'prop-types';
import TopHero from '../../components/TopHero/index';
import largeImagesData from '../../adapters/imagesData';

export default function About({ windowType }) {
  return (
    <div>
      <TopHero imageLink={largeImagesData[windowType].eterabw} />
      <TopHero imageLink={largeImagesData[windowType].barcelonabw} />
    </div>
  );
}

About.propTypes = {
  windowType: PropTypes.string.isRequired,
};
