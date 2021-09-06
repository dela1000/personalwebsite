import React from 'react';
import PropTypes from 'prop-types';
import TopHero from '../../components/TopHero/index';
import BottomHero from '../../components/BottomHero/index';
import CenterContainer from '../../components/CenterContainer/index';
import TextSection from '../../components/TextSection/index';
import largeImagesData from '../../adapters/imagesData';
import pageText from '../../adapters/pageText';

export default function Home({ windowType }) {
  return (
    <div data-testid="Home" className="flex flex-col h-full">
      <div className="flex-1 block">
        <div className="mb-auto mt-auto">
          <div className="flex flex-col">
            <div className="flex justify-center">
              <TopHero
                imageLink={largeImagesData[windowType].merzougabw}
                primaryText={pageText.home.topHero.primaryText}
                secondaryText={pageText.home.topHero.secondaryText}
                windowType={windowType}
              />
            </div>
            <CenterContainer>
              <TextSection
                name={pageText.home.name}
                text={pageText.home.header}
                description={pageText.home.description}
              />
            </CenterContainer>
            <div className="flex mb-auto justify-center">
              <BottomHero
                imageLink={largeImagesData[windowType].halongbaybw}
                primaryText={pageText.home.bottomHero.primaryText}
                secondaryText={pageText.home.bottomHero.secondaryText}
                windowType={windowType}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  windowType: PropTypes.string.isRequired,
};
