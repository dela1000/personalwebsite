import React from 'react';
import PropTypes from 'prop-types';
import LargePhoto from '../../components/LargePhoto/index';
import largeImagesData from '../../adapters/imagesData';

export default function Resume({ windowType }) {
  return (
    <div>
      <LargePhoto imageLink={largeImagesData[windowType].keyboardbw} />
      <LargePhoto imageLink={largeImagesData[windowType].lisbonbw} />
    </div>
  );
}

Resume.propTypes = {
  windowType: PropTypes.string.isRequired,
};
