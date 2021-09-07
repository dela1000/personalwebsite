import { useState } from 'react';
import PropTypes from 'prop-types';
import ContactButton from '../ContactButton/index';

export default function BottomHero({
  imageLink,
  primaryText,
  secondaryText,
  windowType,
  contactText,
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div id="contact" className="relative w-full z-0">
      <div className="absolute center w-full" style={{ height: '100%' }}>
        <div className="w-full text-center px-12 white-font">
          <div className={`${windowType}-secondary-text garamond my-5`}>{secondaryText}</div>
          <div className={`${windowType}-primary-text monserrat my-5`}>{primaryText}</div>
          <ContactButton text={contactText} />
        </div>
      </div>
      {loaded ? null : (
        <div
          style={{
            height: '100%',
            width: '100%',
          }}
        />
      )}
      <img
        alt="Bottom Hero"
        className="hero-image-height w-full object-cover image-darkness"
        src={imageLink}
        style={loaded ? {} : { display: 'none' }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

BottomHero.propTypes = {
  imageLink: PropTypes.string.isRequired,
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string,
  windowType: PropTypes.string.isRequired,
  contactText: PropTypes.string,
};

BottomHero.defaultProps = {
  secondaryText: '',
  contactText: null,
};
