import Image from 'next/image';
import { ProjectImagesSectionTypes } from 'types/types';

export default function ProjectImagesSection({ imagesObj }: ProjectImagesSectionTypes) {
  return (
    <div>
      <div className="flex items-center justify-center image-transition-wrap">
        <img className="p-4 max-w-xs image-transition" src={imagesObj.firstImage.src} alt="First" />
      </div>
      <div className="flex flex-wrap flex-wrap-reverse">
        <div className="w-full lg:w-1/2 mt-10">
          <div className="flex items-center justify-center image-transition-wrap">
            <img
              className="p-4 max-w-xs image-transition"
              src={imagesObj.secondImage.src}
              alt="second"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-10">
          <div className="h-full flex items-center justify-center image-transition-wrap">
            {' '}
            <img
              className="p-4 max-w-xs image-transition"
              src={imagesObj.thirdImage.src}
              alt="third"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
