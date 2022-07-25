import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Hero from 'components/Hero';
import CenterContainer from 'components/CenterContainer';
import TextSection from 'components/TextSection';
import ResumeHolder from 'components/ResumeHolder';
import largeImagesData from 'adapters/largeImagesData';
import pageText from 'adapters/pageText';

export default function Resume({ windowType }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="fade-in">
      <Hero
        imageLink={largeImagesData[windowType].keyboardbw}
        centerText={pageText.resume.topHero.primaryText}
        bottomText={pageText.resume.topHero.secondaryText}
        windowType={windowType}
      />
      <CenterContainer>
        <TextSection text={pageText.resume.header} description={pageText.resume.description} />
      </CenterContainer>
      <ResumeHolder resumeData={pageText.resume.resumeData} />
      <Hero
        imageLink={largeImagesData[windowType].lisbonbw}
        topText={pageText.resume.bottomHero.secondaryText}
        centerText={pageText.resume.bottomHero.primaryText}
        contactText={pageText.contactButton.contactMe}
        windowType={windowType}
      />
    </div>
  );
}

Resume.propTypes = {
  windowType: PropTypes.string.isRequired,
};
