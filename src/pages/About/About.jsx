import React from 'react';
import PropTypes from 'prop-types';
import LargePhoto from '../../components/LargePhoto/index';
import largeImagesData from '../../adapters/imagesData';

export default function About({ windowType }) {
  return (
    <div>
      <LargePhoto imageLink={largeImagesData[windowType].eterabw} />
      <LargePhoto imageLink={largeImagesData[windowType].sintrabw} />
    </div>
  );
}

About.propTypes = {
  windowType: PropTypes.string.isRequired,
};
