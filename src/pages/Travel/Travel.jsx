import React from 'react';
import PropTypes from 'prop-types';
import LargePhoto from '../../components/LargePhoto/index';
import largeImagesData from '../../adapters/imagesData';

export default function Travel({ windowType }) {
  return (
    <div>
      <LargePhoto imageLink={largeImagesData[windowType].benchbw} />
      <LargePhoto imageLink={largeImagesData[windowType].cliffsbw} />
    </div>
  );
}

Travel.propTypes = {
  windowType: PropTypes.string.isRequired,
};
