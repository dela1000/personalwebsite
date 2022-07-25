import PropTypes from 'prop-types';

export default function TechImagesGrid({ imagesData }) {
  return (
    <div className="flex flex-wrap my-8 -mx-8 justify-center">
      {imagesData.map((imageData) => (
        <div
          key={imageData.name}
          className={`mb-4 px-8 w-1/2 md:w-1/3 lg:w-1/6 image-transition-wrap group ${
            imageData.name === 'Vue' && 'pt-5'
          }`}
        >
          <img
            className="block h-auto w-full sepia mt-4 image-transition duration-500"
            src={imageData.img}
            alt={imageData.name}
          />
          <div className="flex pt-2 justify-center items-center">
            <div className="footer-text-size monserrat font-semibold opacity-0 group-hover:opacity-100 duration-300">
              {imageData.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
TechImagesGrid.propTypes = {
  imagesData: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
