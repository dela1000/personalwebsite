import PropTypes from 'prop-types';

export default function CenterContainer({ children }) {
  return <div className="center-container-padding">{children}</div>;
}

CenterContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
