import React from 'react';
import PropTypes from 'prop-types';
import LargePhoto from '../../components/LargePhoto/index';
import largeImagesData from '../../adapters/imagesData';

export default function Tech({ windowType }) {
  return (
    <div>
      <LargePhoto imageLink={largeImagesData[windowType].praguebw} />
      <LargePhoto imageLink={largeImagesData[windowType].barcelonabw} />
    </div>
  );
}

Tech.propTypes = {
  windowType: PropTypes.string.isRequired,
};
