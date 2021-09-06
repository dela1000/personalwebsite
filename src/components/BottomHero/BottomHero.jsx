import PropTypes from 'prop-types';
import ContactButton from '../ContactButton/index';

export default function BottomHero({ imageLink, primaryText, secondaryText, windowType }) {
  return (
    <div className="relative w-full">
      <div className="absolute center w-full" style={{ height: '100%' }}>
        <div className="w-full text-center px-12 white-font">
          <div className={`${windowType}-secondary-text garamond my-5`}>{secondaryText}</div>
          <div className={`${windowType}-primary-text monserrat my-5`}>{primaryText}</div>
          <ContactButton />
        </div>
      </div>
      <img
        className="hero-image-height w-full object-cover image-darkness"
        src={imageLink}
        alt="Bottom Hero"
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
