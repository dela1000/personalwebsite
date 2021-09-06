import React from 'react';
import PropTypes from 'prop-types';
import TopHero from '../../components/TopHero/index';
import largeImagesData from '../../adapters/imagesData';

export default function Projects({ windowType }) {
  return (
    <div>
      <TopHero imageLink={largeImagesData[windowType].acropolisbw} />
      <TopHero imageLink={largeImagesData[windowType].albaiuliabw} />
    </div>
  );
}

Projects.propTypes = {
  windowType: PropTypes.string.isRequired,
};
