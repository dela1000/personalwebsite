import PropTypes from 'prop-types';

export default function PersonalImagesGrid({ imagesData }) {
  return (
    <div className="w-full mb-1">
      <div className="flex flex-wrap">
        {imagesData.map((imageData) => (
          <div key={imageData.name} className="w-1/2 md:w-1/4">
            <img className="block h-auto w-full sepia" src={imageData.img} alt={imageData.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

PersonalImagesGrid.propTypes = {
  imagesData: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
