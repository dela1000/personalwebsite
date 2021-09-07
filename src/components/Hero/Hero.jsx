import PropTypes from 'prop-types';
import ContactButton from '../ContactButton/index';

export default function BottomHero({
  imageLink,
  topText,
  centerText,
  bottomText,
  windowType,
  contactText,
}) {
  return (
    <div id={contactText ? 'contact' : null} className="relative z-0">
      <div className="absolute center w-full h-full">
        <div className="w-full text-center px-12 white-font">
          {topText && <div className={`${windowType}-secondary-text garamond my-5`}>{topText}</div>}
          <div className={`${windowType}-primary-text monserrat my-5`}>{centerText}</div>
          {bottomText && (
            <div className={`${windowType}-secondary-text garamond my-5`}>{bottomText}</div>
          )}
          {contactText && <ContactButton text={contactText} />}
        </div>
      </div>

      <img
        alt="hero"
        className="hero-image-height w-full object-cover image-darkness"
        src={imageLink}
      />
    </div>
  );
}

BottomHero.propTypes = {
  imageLink: PropTypes.string.isRequired,
  topText: PropTypes.string,
  centerText: PropTypes.string.isRequired,
  bottomText: PropTypes.string,
  windowType: PropTypes.string.isRequired,
  contactText: PropTypes.string,
};

BottomHero.defaultProps = {
  topText: '',
  bottomText: '',
  contactText: null,
};
