import TextSection from 'components/TextSection/index';
import ContactButton from 'components/ContactButton/index';

import { TravelImagesDataTypes, TravelTextTypes } from 'types/types';

export default function TravelSection({
  travelText,
  travelImagesData,
  themeName,
}: {
  travelText: TravelTextTypes;
  travelImagesData: TravelImagesDataTypes;
  themeName: string;
}) {
  return (
    <div className="text-gray-600">
      <div
        className={`${
          themeName === 'dark' ? 'bg-gray-400' : 'bg-gray-300'
        } center-container-padding`}
      >
        <TextSection text={travelText.header} />
        <div className="description-text-size monserrat">
          <ul className=" mb-10">
            {travelText.travelPoints.map((point: string) => (
              <li className="my-2" key={point}>
                - {point}
              </li>
            ))}
          </ul>

          <div className="description-text-size monserrat">{travelText.description}</div>

          <div className="flex flex-wrap pt-10">
            <div className="lg:w-1/2 pr-8">
              <div className="description-text-size garamond mb-1">Things Covered</div>
              <ul className=" mb-10">
                {travelText.thingsCovered.map((point: string) => (
                  <li className="px-10" key={point}>
                    &bull; {point}
                  </li>
                ))}
              </ul>
              <div className="description-text-size garamond mb-1">The Damage</div>
              <ul className=" mb-10">
                {travelText.cost.map((point: string) => (
                  <li className="px-10" key={point}>
                    &bull; {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center lg:w-1/2">
              <div className="image-transition-wrap">
                <img
                  className="sepia image-transition"
                  src={travelImagesData.athens.src}
                  alt={travelImagesData.athens.src}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${themeName === 'dark' ? 'bg-gray-500' : 'bg-gray-400'} p-20`}>
        <div className="flex items-center justify-center">
          <ContactButton text={travelText.contactUs} />
        </div>
      </div>
      <div
        className={`${
          themeName === 'dark' ? 'bg-gray-400' : 'bg-gray-300'
        } center-container-padding`}
      >
        <TextSection text="Who are we" />
        <div className="flex flex-wrap">
          <div className="flex items-center justify-center w-full lg:w-1/2 mt-10">
            <div className="image-transition-wrap">
              <img
                className="sepia w-96 image-transition"
                src={travelImagesData.danielIreland.src}
                alt={travelImagesData.danielIreland.src}
              />
            </div>
          </div>
          <div className="lg:w-1/2 mt-10">
            <div className="h-full flex items-center justify-center">
              <div className="description-text-size monserrat p-10 text-center lg:text-left">
                <span className="font-bold">{travelText.ddr}</span>
                <span>{travelText.dBio}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap flex-wrap-reverse mt-10">
          <div className="lg:w-1/2 mt-10">
            <div className="h-full flex items-center justify-center">
              <div className="description-text-size monserrat p-10 text-center lg:text-right">
                <span className="font-bold">{travelText.rw}</span>
                <span>{travelText.rBio}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full lg:w-1/2 mt-10">
            <div className="flex items-center justify-center image-transition-wrap">
              <img
                className="sepia w-96 image-transition"
                src={travelImagesData.RachelMorocco.src}
                alt={travelImagesData.RachelMorocco.src}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
