import { useContext } from 'react';
import './Footer.css';
import { Context } from '../../contexts/context';
import pageText from '../../adapters/pageText';

export default function Footer() {
  const [{ themeName }] = useContext(Context);
  return (
    <footer
      id="top"
      className={`${themeName}-header w-screen items-center pt-10 pb-20 flex justify-around sticky`}
    >
      <div className="flex flex-col text-center">
        <div className="py-10 text-2xl garamond">{pageText.footer.header}</div>
        <div className="footer-text-size monserrat">
          <div>{pageText.footer.top}</div>
          <div>{pageText.footer.middle}</div>
          <div>{pageText.footer.bottom}</div>
        </div>
      </div>
    </footer>
  );
}
