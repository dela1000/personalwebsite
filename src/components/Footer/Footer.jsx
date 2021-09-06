import { useContext } from 'react';
import './Footer.css';
import { Context } from '../../contexts/context';

export default function Footer() {
  const [{ themeName }] = useContext(Context);
  return (
    <footer
      id="top"
      className={`${themeName}-header w-screen items-center py-7 flex justify-around sticky`}
    >
      Im a footer
    </footer>
  );
}
