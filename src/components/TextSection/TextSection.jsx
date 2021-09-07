import PropTypes from 'prop-types';

export default function TextSection({ name, text, description, developed }) {
  return (
    <div className="w-full text-center px-10 py-8">
      {name && <div className="header-text-size monserrat mb-2">{name}</div>}
      <div className="header-text-size garamond mb-1">{text}</div>
      <div className="description-text-size monserrat">{description}</div>
      {developed && <div className="description-text-size monserrat mt-10">{developed}</div>}
    </div>
  );
}

TextSection.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string.isRequired,
  description: PropTypes.string,
  developed: PropTypes.string,
};

TextSection.defaultProps = {
  name: '',
  description: '',
  developed: '',
};
