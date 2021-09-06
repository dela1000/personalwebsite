import PropTypes from 'prop-types';

export default function ProjectImagesSection({ imagesObj }) {
  return (
    <div className="flex align-center">
      <div className="h-full lg:flex mx-auto block">
        <img className="block p-4 max-w-xs" src={imagesObj.firstImage} alt="First" />
        <img className="block p-4 max-w-xs" src={imagesObj.secondImage} alt="second" />
        <img className="block p-4 max-w-xs" src={imagesObj.thirdImage} alt="third" />
      </div>
    </div>
  );
}

ProjectImagesSection.propTypes = {
  imagesObj: PropTypes.shape({
    firstImage: PropTypes.string.isRequired,
    secondImage: PropTypes.string.isRequired,
    thirdImage: PropTypes.string.isRequired,
  }).isRequired,
};
