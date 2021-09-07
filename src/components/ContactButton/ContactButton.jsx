import PropTypes from 'prop-types';
import pageText from '../../adapters/pageText';

export default function ContactButton({ text }) {
  if (!pageText.contactButton.contactEmail) return null;
  return (
    <a
      href={`mailto:${pageText.contactButton.contactEmail}?subject=Hi Daniel! I want to ask you about a project`}
      target="_blank"
      rel="noreferrer"
    >
      <button type="button" className="btn btn--outline uppercase">
        {text}
      </button>
    </a>
  );
}

ContactButton.propTypes = {
  text: PropTypes.string.isRequired,
};
