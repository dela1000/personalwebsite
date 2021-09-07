import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Hero from '../../components/Hero/index';
import TravelSection from '../../components/TravelSection/index';
import PersonalImagesGrid from '../../components/PersonalImagesGrid/index';
import largeImagesData from '../../adapters/largeImagesData';
import pageText from '../../adapters/pageText';
import travelImagesData from '../../adapters/travelImagesData';

export default function Travel({ windowType }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="fade-in">
      <Hero
        imageLink={largeImagesData[windowType].benchbw}
        centerText={pageText.travel.topHero.primaryText}
        bottomText={pageText.travel.topHero.secondaryText}
        windowType={windowType}
      />
      <TravelSection travelText={pageText.travel} travelImagesData={travelImagesData} />
      <PersonalImagesGrid imagesData={travelImagesData.gridPhotos} />
      <Hero
        imageLink={largeImagesData[windowType].cliffsbw}
        centerText={pageText.travel.bottomHero.primaryText}
        windowType={windowType}
        contactText={pageText.travel.contactUs}
      />
    </div>
  );
}

Travel.propTypes = {
  windowType: PropTypes.string.isRequired,
};
