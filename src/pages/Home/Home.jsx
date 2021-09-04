import React from 'react';
import PropTypes from 'prop-types';
import LargePhoto from '../../components/LargePhoto/index';
import largeImagesData from '../../adapters/imagesData';

export default function Home({ windowType }) {
  return (
    <div>
      <LargePhoto imageLink={largeImagesData[windowType].merzougabw} />
      <LargePhoto imageLink={largeImagesData[windowType].halongbaybw} />
    </div>
  );
}

Home.propTypes = {
  windowType: PropTypes.string.isRequired,
};
