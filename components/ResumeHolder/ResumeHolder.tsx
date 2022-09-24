import Link from 'next/link';

import { ResumeData, Experience, Education } from 'types/types';

export default function ResumeHolder({
  resumeData,
  themeName
}: {
  resumeData: ResumeData;
  themeName: string;
}) {
  return (
    <div className={themeName === 'dark' ? 'bg-gray-400' : 'bg-gray-300'}>
      <div className="resume-container-padding text-gray-600">
        <div className="garamond font-size-largest font-weight-medium text-4xl">
          Relevant Experience
        </div>
        <div className="mt-4">
          {resumeData.experience.map((item: Experience) => (
            <div className="my-4" key={`${item.title}_${item.time}`}>
              <div className="grid grid-cols-2 gap-4 text-xl">
                <div>{item.company}</div>
                <div className="text-right">
                  <div>{item.time}</div>
                </div>
              </div>
              <div className="margin-top-small text-sm font-light italic mt-2">{item.tag}</div>
              <div className="margin-top-small mt-2">{item.title}</div>
              <ul className="pl-6">
                {item.bulletPoints.map((bullet: string) => (
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
          {resumeData.education.map((item: Education) => (
            <div className="grid grid-cols-10 mb-4 gap-1 text-xl" key={item.degree}>
              <div className="col-span-6">{item.school}</div>
              <div className="col-span-4 text-right">
                <div>{item.time}</div>
              </div>
              <div className="col-span-10 margin-top-small text-sm font-light italic">
                {item.degree}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`${themeName === 'dark' ? 'bg-gray-500' : 'bg-gray-400'} p-20`}>
        <div className="flex items-center justify-center">
          <button id="contact" type="button" className="btn btn-outline">
            <Link href="DanielDeLaRosa_Resume_2022_full.pdf" locale={false}>
              <a target="_blank" rel="noopener noreferrer">
                <div className="pointer">DOWNLOAD RESUME</div>
              </a>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
