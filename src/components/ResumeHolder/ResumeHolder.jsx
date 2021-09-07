import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../contexts/context';
import resumeFile from '../../assets/DanielDeLaRosa_Resume_2021_full.pdf';

export default function ResumeHolder({ resumeData }) {
  const [{ themeName }] = useContext(Context);
  return (
    <div className={themeName === 'dark' ? 'bg-gray-400' : 'bg-gray-300'}>
      <div className="px-20 lg:px-96 py-32 text-gray-600">
        <div className="garamond font-size-largest font-weight-medium text-4xl">
          Relevant Experience
        </div>
        <div className="mt-4">
          {resumeData.experience.map((item) => (
            <div className="my-4" key={item.title}>
              <div className="grid grid-cols-2 gap-4 text-xl">
                <div>{item.company}</div>
                <div className="text-right">
                  <div>{item.time}</div>
                </div>
              </div>
              <div className="margin-top-small text-sm font-light italic mt-2">{item.tag}</div>
              <div className="margin-top-small mt-2">{item.title}</div>
              <ul className="pl-6">
                {item.bulletPoints.map((bullet) => (
                  <li className="font-light" key={bullet}>
                    &bull; {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="garamond font-size-largest font-weight-medium text-4xl mt-10">
          Education
        </div>
        <div className="mt-4">
          {resumeData.education.map((item) => (
            <div className="grid grid-cols-2 mb-4 gap-1 text-xl" key={item.degree}>
              <div>{item.school}</div>
              <div className="text-right">
                <div>{item.time}</div>
              </div>
              <div className="margin-top-small text-sm font-light italic">{item.degree}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-20">
          <button id="contact" type="button" className="btn btn--outline">
            <a target="_blank" rel="noreferrer" href={resumeFile}>
              <div className="pointer">DOWNLOAD RESUME</div>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

ResumeHolder.propTypes = {
  resumeData: PropTypes.shape({
    experience: PropTypes.arrayOf(
      PropTypes.shape({
        company: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        bulletPoints: PropTypes.arrayOf(PropTypes.string.isRequired),
      }),
    ).isRequired,
    education: PropTypes.arrayOf(
      PropTypes.shape({
        school: PropTypes.string.isRequired,
        degree: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
      }),
    ).isRequired,
    resumeLink: PropTypes.string,
  }).isRequired,
};
