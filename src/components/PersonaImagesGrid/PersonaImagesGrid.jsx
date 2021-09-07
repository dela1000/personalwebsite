import PropTypes from 'prop-types';

export default function PersonaImagesGrid({ imagesData }) {
  return (
    <div className="w-full mb-1">
      <div className="flex flex-wrap">
        {imagesData.map((imageData) => (
          <div className="w-1/2 md:w-1/4">
            <img className="block h-auto w-full sepia" src={imageData.img} alt={imageData.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
PersonaImagesGrid.propTypes = {
  imagesData: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
