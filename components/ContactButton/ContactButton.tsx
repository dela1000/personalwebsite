import pageText from 'adapters/pageText';

import { ButtonProps } from 'types/types';

export default function ContactButton({ text }: ButtonProps) {
  if (!pageText.contactButton.contactEmail) return null;
  return (
    <a
      href={`mailto:${pageText.contactButton.contactEmail}?subject=Hi Daniel! I want to ask you about a project`}
      target="_blank"
      rel="noreferrer"
    >
      <button type="button" className="btn btn-outline uppercase">
        {text}
      </button>
    </a>
  );
}
