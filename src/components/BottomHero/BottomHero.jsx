import PropTypes from 'prop-types';

export default function BottomHero({ imageLink }) {
  return (
    <div className="relative w-full">
      <div className="absolute w-screen h-auto text-center top-1/2">
        <b> GOES HERE</b>
        <h2>Bottom Hero</h2>
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
};
