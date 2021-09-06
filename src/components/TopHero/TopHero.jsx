import PropTypes from 'prop-types';

export default function TopHero({ imageLink }) {
  return (
    <div className="relative w-full">
      <div className="absolute w-screen h-auto text-center top-1/2">
        <h2>TopHero</h2>
        <b> Goes Here</b>
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

TopHero.propTypes = {
  imageLink: PropTypes.string.isRequired,
};
