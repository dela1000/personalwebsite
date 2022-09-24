import { ImagesGridTypes, ImageDataTypes } from 'types/types';

export default function TechImagesGrid({ imagesData }: ImagesGridTypes) {
  return (
    <div className="flex flex-wrap my-8 -mx-8 justify-center">
      {imagesData.map((imageData: ImageDataTypes) => (
        <div
          key={imageData.name}
          className={`mb-2 px-8 w-1/2 md:w-1/3 lg:w-1/6 image-transition-wrap group ${
            imageData.name === 'Vue' && 'pt-4'
          }`}
        >
          <img
            className="block h-auto w-full sepia mt-4 image-transition duration-500"
            src={imageData.img.src}
            alt={imageData.name}
          />
          <div
            className={`flex pt-2 justify-center items-center ${
              imageData.name === 'Vue' && 'mt-2'
            }`}
          >
            <div className="footer-text-size monserrat font-semibold opacity-0 group-hover:opacity-100 duration-300">
              {imageData.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
