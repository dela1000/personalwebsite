import PropTypes from 'prop-types';

export default function ResumeHolder({ resumeData }) {
  console.log('+++ 4: src/components/ResumeHolder/ResumeHolder.jsx - resumeData: ', resumeData);
  return (
    <div className="px-20 lg:px-96 py-32 bg-gray-200 text-gray-600">
      <div className="garamond font-size-largest font-weight-medium text-2xl">
        Relevant Experience
      </div>
      <div className="mt-4">
        {resumeData.experience.map((item) => (
          <div className="my-4">
            <div className="grid grid-cols-2 gap-4">
              <div>{item.company}</div>
              <div className="text-right">
                <div>{item.time}</div>
              </div>
            </div>
            <div className="margin-top-small text-sm font-light italic mt-2">{item.tag}</div>
            <div className="margin-top-small mt-2">{item.title}</div>
            <ul className="pl-6">
              {item.bulletPoints.map((bullet) => (
                <li className="font-light">&bull; {bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="garamond font-size-largest font-weight-medium text-2xl">Education</div>
      <div className="mt-4">
        {resumeData.education.map((item) => (
          <div className="grid grid-cols-2 mb-4 gap-1">
            <div>{item.school}</div>
            <div className="text-right">
              <div>{item.time}</div>
            </div>
            <div className="margin-top-small text-sm font-light italic">{item.degree}</div>
          </div>
        ))}
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
