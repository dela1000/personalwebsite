import PropTypes from 'prop-types';

export default function TopHero({ imageLink, primaryText, secondaryText, windowType }) {
  return (
    <div className="relative">
      <div className="absolute center w-full" style={{ height: '100%' }}>
        <div className="w-full text-center px-12 white-font">
          <div className={`${windowType}-primary-text monserrat my-5`}>{primaryText}</div>
          <div className={`${windowType}-secondary-text garamond my-5`}>{secondaryText}</div>
        </div>
      </div>
      <img
        className="hero-image-height w-full object-cover image-darkness"
        src={imageLink}
        alt="Top Hero"
      />
    </div>
  );
}

TopHero.propTypes = {
  imageLink: PropTypes.string.isRequired,
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
  windowType: PropTypes.string.isRequired,
};
