import PropTypes from 'prop-types';

export default function PhotoText({ text }) {
  return (
    <div className="w-screen text-center">
      <div>{text}</div>
    </div>
  );
}

PhotoText.propTypes = {
  text: PropTypes.string.isRequired,
};
