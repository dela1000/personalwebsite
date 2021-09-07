import { useEffect } from 'react';
import PropTypes from 'prop-types';
import TopHero from '../../components/TopHero/index';
import BottomHero from '../../components/BottomHero/index';
import TextSection from '../../components/TextSection/index';
import ProjectImagesSection from '../../components/ProjectImagesSection/index';
import largeImagesData from '../../adapters/largeImagesData';
import projects from '../../adapters/projects';
import pageText from '../../adapters/pageText';

export default function Projects({ windowType }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="fade-in">
      <TopHero
        imageLink={largeImagesData[windowType].acropolisbw}
        primaryText={pageText.projects.topHero.primaryText}
        secondaryText={pageText.projects.topHero.secondaryText}
        windowType={windowType}
      />

      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 mt-10">
          <div className="h-full flex items-center justify-center">
            <div className="description-text-size monserrat px-16">
              <TextSection
                text={projects.rendezbrew.header}
                description={projects.rendezbrew.description}
                developed={projects.rendezbrew.developed}
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-10">
          <div className="flex items-center justify-center">
            <ProjectImagesSection imagesObj={projects.rendezbrew} />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap flex-wrap-reverse my-10">
        <div className="w-full lg:w-1/2 mt-10">
          <div className="flex items-center justify-center">
            <ProjectImagesSection imagesObj={projects.acrogenerator} />
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-10">
          <div className="h-full flex items-center justify-center">
            <div className="description-text-size monserrat px-16 text-right">
              <TextSection
                text={projects.acrogenerator.header}
                description={projects.acrogenerator.description}
                developed={projects.acrogenerator.developed}
              />
            </div>
          </div>
        </div>
      </div>

      <BottomHero
        imageLink={largeImagesData[windowType].albaiuliabw}
        primaryText={pageText.projects.bottomHero.primaryText}
        secondaryText={pageText.projects.bottomHero.secondaryText}
        contactText={pageText.contactButton.contactMe}
        windowType={windowType}
      />
    </div>
  );
}

Projects.propTypes = {
  windowType: PropTypes.string.isRequired,
};
