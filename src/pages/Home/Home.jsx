import React from 'react';
import PropTypes from 'prop-types';
import TopHero from '../../components/TopHero/index';
import BottomHero from '../../components/BottomHero/index';
import largeImagesData from '../../adapters/imagesData';

export default function Home({ windowType }) {
  return (
    <div data-testid="Home" className="flex flex-col h-full">
      <div className="flex-1 block">
        <div className="mb-auto mt-auto">
          <div className="flex flex-col">
            <div className="flex justify-center">
              <TopHero
                imageLink={largeImagesData[windowType].merzougabw}
                primaryText="DESIGN. DEVELOP. DELIVER."
                secondaryText="Creating meaningful experiences through unique online ventures"
              />
            </div>
            <div className="flex mb-auto justify-center">
              <BottomHero imageLink={largeImagesData[windowType].halongbaybw} />
            </div>

            <div className="flex mb-auto justify-center">BUTTON GOES HERE</div>
          </div>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  windowType: PropTypes.string.isRequired,
};
