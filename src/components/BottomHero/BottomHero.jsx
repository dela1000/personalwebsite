import PropTypes from 'prop-types';

export default function BottomHero({ imageLink, primaryText, secondaryText }) {
  return (
    <div className="relative w-full">
      <div className="absolute center w-full" style={{ height: '100%' }}>
        <div className="w-full text-center px-44">
          <div className="white--font garamond text-3xl my-5">{secondaryText}</div>
          <div className="white--font text-7xl monserrat my-5">{primaryText}</div>
        </div>
      </div>
      <img
        style={{ maxHeight: '700px' }}
        className="w-full object-cover"
        src={imageLink}
        alt="Large Holder"
      />
    </div>
  );
}

BottomHero.propTypes = {
  imageLink: PropTypes.string.isRequired,
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
};
