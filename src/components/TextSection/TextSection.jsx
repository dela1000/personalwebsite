import PropTypes from 'prop-types';
import './TextSection.css';

export default function TextSection({ name, text, description }) {
  return (
    <div className="w-full text-center">
      <div className="header-text-size monserrat mb-4">{name}</div>
      <div className="header-text-size garamond mb-10">{text}</div>
      <div className="description-text-size monserrat">{description}</div>
    </div>
  );
}

TextSection.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

TextSection.defaultProps = {
  name: '',
};
