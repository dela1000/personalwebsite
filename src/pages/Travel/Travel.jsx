import React from 'react';
import PropTypes from 'prop-types';
import TopHero from '../../components/TopHero/index';
import BottomHero from '../../components/BottomHero/index';
import TravelSection from '../../components/TravelSection/index';
import PersonalImagesGrid from '../../components/PersonalImagesGrid/index';
import largeImagesData from '../../adapters/largeImagesData';
import pageText from '../../adapters/pageText';
import travelImagesData from '../../adapters/travelImagesData';

export default function Travel({ windowType }) {
  return (
    <div>
      <TopHero
        imageLink={largeImagesData[windowType].benchbw}
        primaryText={pageText.travel.topHero.primaryText}
        secondaryText={pageText.travel.topHero.secondaryText}
        windowType={windowType}
      />

      <TravelSection travelText={pageText.travel} travelImagesData={travelImagesData} />

      <PersonalImagesGrid imagesData={travelImagesData.gridPhotos} />
      <BottomHero
        imageLink={largeImagesData[windowType].cliffsbw}
        primaryText={pageText.travel.topHero.primaryText}
        windowType={windowType}
        contactText={pageText.travel.contactUs}
      />
    </div>
  );
}

Travel.propTypes = {
  windowType: PropTypes.string.isRequired,
};
