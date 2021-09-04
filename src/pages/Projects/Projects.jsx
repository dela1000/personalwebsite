import React from 'react';
import PropTypes from 'prop-types';
import LargePhoto from '../../components/LargePhoto/index';
import largeImagesData from '../../adapters/imagesData';

export default function Projects({ windowType }) {
  return (
    <div>
      <LargePhoto imageLink={largeImagesData[windowType].acropolisbw} />
      <LargePhoto imageLink={largeImagesData[windowType].albaiuliabw} />
    </div>
  );
}

Projects.propTypes = {
  windowType: PropTypes.string.isRequired,
};
