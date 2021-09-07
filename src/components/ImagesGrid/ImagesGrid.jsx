import PropTypes from 'prop-types';
import './ImagesGrid.css';

export default function ImagesGrid({ imagesData }) {
  console.log('+++ 4: src/components/ImagesGrid/ImagesGrid.jsx - imagesData: ', imagesData);
  return (
    <div className="flex flex-wrap my-8 -mx-8">
      {imagesData.map((imageLink) => (
        <div className="mb-4 px-8 w-1/2 md:w-1/3 lg:w-1/6">
          <img className="block h-auto w-full sepia" src={imageLink} alt="tech" />
        </div>
      ))}
    </div>
  );
}
ImagesGrid.propTypes = {
  imagesData: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
