import React from 'react';
import PropTypes from 'prop-types';
import TopHero from '../../components/TopHero/index';
import BottomHero from '../../components/BottomHero/index';
import largeImagesData from '../../adapters/imagesData';

export default function Home({ windowType }) {
  return (
    <div>
      <TopHero imageLink={largeImagesData[windowType].merzougabw} />
      <BottomHero imageLink={largeImagesData[windowType].halongbaybw} />
    </div>
  );
}

Home.propTypes = {
  windowType: PropTypes.string.isRequired,
};
