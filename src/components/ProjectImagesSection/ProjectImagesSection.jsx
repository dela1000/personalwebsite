import PropTypes from 'prop-types';

export default function ProjectImagesSection({ imagesObj }) {
  return (
    <div>
      <div className="flex items-center justify-center image-transition-wrap">
        <img className="p-4 max-w-xs image-transition" src={imagesObj.firstImage} alt="First" />
      </div>
      <div className="flex flex-wrap flex-wrap-reverse">
        <div className="w-full lg:w-1/2 mt-10">
          <div className="flex items-center justify-center image-transition-wrap">
            <img
              className="p-4 max-w-xs image-transition"
              src={imagesObj.secondImage}
              alt="second"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-10">
          <div className="h-full flex items-center justify-center image-transition-wrap">
            {' '}
            <img className="p-4 max-w-xs image-transition" src={imagesObj.thirdImage} alt="third" />
          </div>
        </div>
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
