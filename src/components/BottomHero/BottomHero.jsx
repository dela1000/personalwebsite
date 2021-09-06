import PropTypes from 'prop-types';

export default function BottomHero({ imageLink, primaryText, secondaryText, windowType }) {
  return (
    <div className="relative w-full">
      <div className="absolute center w-full" style={{ height: '100%' }}>
        <div className="w-full text-center px-12">
          <div className={`${windowType}-secondary-text white--font garamond my-5 `}>
            {secondaryText}
          </div>
          <div className={`${windowType}-primary-text white--font monserrat my-5`}>
            {primaryText}
          </div>
          <button id="contact" type="button">
            Click Me!
          </button>
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
  windowType: PropTypes.string.isRequired,
};
