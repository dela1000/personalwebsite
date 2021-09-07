import PropTypes from 'prop-types';

export default function TechImagesGrid({ imagesData }) {
  return (
    <div className="flex flex-wrap my-8 -mx-8">
      {imagesData.map((imageData) => (
        <div key={imageData.name} className="mb-4 px-8 w-1/2 md:w-1/3 lg:w-1/6">
          <img
            className="block h-auto w-full sepia mt-4"
            src={imageData.img}
            alt={imageData.name}
          />
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
