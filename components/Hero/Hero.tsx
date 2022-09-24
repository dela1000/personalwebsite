import ContactButton from 'components/ContactButton/index';

import { HeroTypes } from 'types/types';

export default function Hero({
  imageLink,
  topText,
  centerText,
  bottomText,
  windowType,
  contactText
}: HeroTypes) {
  return (
    <div id={contactText ? 'contact' : undefined} className="relative z-0">
      <div className="absolute center w-full h-full">
        <div className="w-full text-center px-12 white-font">
          {topText && <div className={`${windowType}-secondary-text garamond my-5`}>{topText}</div>}
          <div className={`${windowType}-primary-text monserrat my-5`}>{centerText}</div>
          {bottomText && (
            <div className={`${windowType}-secondary-text garamond my-5`}>{bottomText}</div>
          )}
          {contactText && <ContactButton text={contactText} />}
        </div>
      </div>

      <img
        alt="hero"
        className="hero-image-height w-full object-cover image-darkness"
        src={imageLink}
      />
    </div>
  );
}
