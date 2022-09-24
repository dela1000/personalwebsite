import { useAppContext } from 'contexts/context';
import pageText from 'adapters/pageText';
import styles from './Footer.module.css';

import { UseAppContext } from 'types/types';

export default function Footer() {
  const {
    sharedState: { themeName, windowType }
  }: UseAppContext = useAppContext();
  return (
    <footer
      id="top"
      className={`${
        themeName === 'dark' ? 'dark-header' : 'light-header'
      } w-screen items-center p-10 px-20 flex justify-around`}
    >
      <div className={`${themeName} flex flex-col text-center`}>
        <div className="py-10 text-2xl garamond">{pageText.footer.header}</div>
        <div
          className={`${themeName} ${
            windowType === 'desktop'
              ? styles[`footer-text-size`]
              : styles[`footer-text-size_mobile`]
          }  monserrat px-10`}
        >
          <div>{pageText.footer.top}</div>
          <div>{pageText.footer.middle}</div>
          <div>{pageText.footer.bottom}</div>
        </div>
      </div>
    </footer>
  );
}
