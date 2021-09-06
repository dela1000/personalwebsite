import pageText from '../../adapters/pageText';

export default function ContactButton() {
  if (!pageText.contactButton.contactEmail) return null;
  return (
    <a
      href={`mailto:${pageText.contactButton.contactEmail}?subject=Hi Daniel! I want to ask you about a project`}
      target="_blank"
      rel="noreferrer"
    >
      <button id="contact" type="button" className="btn btn--outline">
        CONTACT ME
      </button>
    </a>
  );
}
