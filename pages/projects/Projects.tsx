import { useAppContext } from 'contexts/context';
import Hero from 'components/Hero';
import TextSection from 'components/TextSection';
import ProjectImagesSection from 'components/ProjectImagesSection';
import largeImagesData from 'adapters/largeImagesData';
import projects from 'adapters/projects';
import pageText from 'adapters/pageText';

import { UseAppContext } from 'types/types';

export default function Projects() {
  const {
    sharedState: { windowType, themeName }
  }: UseAppContext = useAppContext();
  return (
    <div className={`${themeName === 'dark' ? 'dark-header' : 'light-header'}  fade-in`}>
      <Hero
        imageLink={largeImagesData[windowType].acropolisbw.src}
        centerText={pageText.projects.topHero.primaryText}
        bottomText={pageText.projects.topHero.secondaryText}
        windowType={windowType}
      />
      <div className="flex flex-wrap lg:my-20">
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

      <div className="flex flex-wrap flex-wrap-reverse lg:my-24 mb-24">
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

      <Hero
        imageLink={largeImagesData[windowType].albaiuliabw.src}
        topText={pageText.projects.bottomHero.secondaryText}
        centerText={pageText.projects.bottomHero.primaryText}
        contactText={pageText.contactButton.contactMe}
        windowType={windowType}
      />
    </div>
  );
}
