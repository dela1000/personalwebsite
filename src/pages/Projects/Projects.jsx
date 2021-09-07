import { useEffect } from 'react';
import PropTypes from 'prop-types';
import TopHero from '../../components/TopHero/index';
import BottomHero from '../../components/BottomHero/index';
import CenterContainer from '../../components/CenterContainer/index';
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
      <CenterContainer>
        {projects.map((project) => (
          <div className="mb-5" key={project.header}>
            <TextSection
              text={project.header}
              description={project.description}
              developed={project.developed}
            />
            <ProjectImagesSection imagesObj={project} />
          </div>
        ))}
      </CenterContainer>
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
