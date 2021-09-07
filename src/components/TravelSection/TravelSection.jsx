import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../contexts/context';
import TextSection from '../TextSection/index';
import ContactButton from '../ContactButton/index';

export default function TravelSection({ travelText, travelImagesData }) {
  const [{ themeName }] = useContext(Context);
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
            {travelText.travelPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <div className="description-text-size monserrat">{travelText.description}</div>

          <div className="flex flex-wrap pt-10">
            <div className="lg:w-1/2 pr-8">
              <div className="description-text-size garamond mb-1">Things Covered</div>
              <ul className=" mb-10">
                {travelText.thingsCovered.map((point) => (
                  <li className="px-10" key={point}>
                    &bull; {point}
                  </li>
                ))}
              </ul>
              <div className="description-text-size garamond mb-1">The Damage</div>
              <ul className=" mb-10">
                {travelText.cost.map((point) => (
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
                  src={travelImagesData.athens}
                  alt={travelImagesData.athens}
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
                src={travelImagesData.danielIreland}
                alt={travelImagesData.danielIreland}
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
                src={travelImagesData.RachelMorocco}
                alt={travelImagesData.RachelMorocco}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

TravelSection.propTypes = {
  travelText: PropTypes.shape({
    header: PropTypes.string.isRequired,
    travelPoints: PropTypes.arrayOf(PropTypes.string.isRequired),
    description: PropTypes.string.isRequired,
    thingsCovered: PropTypes.arrayOf(PropTypes.string.isRequired),
    cost: PropTypes.arrayOf(PropTypes.string.isRequired),
    ddr: PropTypes.string.isRequired,
    rw: PropTypes.string.isRequired,
    dBio: PropTypes.string.isRequired,
    rBio: PropTypes.string.isRequired,
    contactUs: PropTypes.string.isRequired,
  }).isRequired,
  travelImagesData: PropTypes.shape({
    RachelMorocco: PropTypes.string.isRequired,
    athens: PropTypes.string.isRequired,
    danielIreland: PropTypes.string.isRequired,
    gridPhotos: PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
};
