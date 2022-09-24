import { TextSectionTypes } from 'types/types';

export default function TextSection({ name, text, description, developed }: TextSectionTypes) {
  return (
    <div className="w-full text-center px-10 py-8">
      {name && <div className="header-text-size monserrat mb-2">{name}</div>}
      <div className="sub-header-text-size garamond mb-5">{text}</div>
      <div className="description-text-size monserrat">{description}</div>
      {developed && <div className="description-text-size monserrat mt-10">{developed}</div>}
    </div>
  );
}
