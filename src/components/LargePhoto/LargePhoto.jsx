import PropTypes from 'prop-types';

export default function PhotoHolder({ imageLink }) {
  return (
    <img
      style={{ maxHeight: '700px' }}
      className="w-full object-cover"
      src={imageLink}
      alt="Logo"
    />
  );
}

PhotoHolder.propTypes = {
  imageLink: PropTypes.string.isRequired,
};
