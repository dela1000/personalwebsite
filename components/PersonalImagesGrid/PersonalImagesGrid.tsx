import { ImagesGridTypes, ImageDataTypes } from 'types/types';

export default function PersonalImagesGrid({ imagesData }: ImagesGridTypes) {
  return (
    <div className="w-full mb-1">
      <div className="flex flex-wrap">
        {imagesData.map((imageData: ImageDataTypes) => (
          <div key={imageData.name} className="w-1/2 md:w-1/4">
            <img
              className="block h-auto w-full sepia"
              src={imageData.img.src}
              alt={imageData.name}
              title={imageData.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
